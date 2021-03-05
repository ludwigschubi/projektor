import axios from 'axios';
import {
  useQuery,
  QueryFunction,
  QueryFunctionContext,
  useMutation,
  MutationFunction,
} from 'react-query';
import EncryptedStorage from 'react-native-encrypted-storage';

import { LoggedInUser, useCurrentUser } from '../../context';

export const testSession = async (sessionId: string) => {
  return (await axios.post('http://localhost:4000/session', { sessionId })).data
    ?.isLoggedIn;
};

export const logOutOfSession = (sessionId: string) => {
  return axios.post('http://localhost:4000/logout', { sessionId });
};

export const getActiveSessionsFromStorage = async () => {
  try {
    const sessions = JSON.parse(
      await EncryptedStorage.getItem('user-sessions'),
    );
    console.debug(`RETRIEVING SESSION BY ${sessions[0]?.webId}`);
    const sessionActivity = await Promise.all(
      sessions.map((session: LoggedInUser) =>
        testSession(session?.sessionId as string),
      ),
    );
    const activeSessions = sessions.filter(
      (_: LoggedInUser, index: number) => sessionActivity[index],
    );
    const passiveSessions = sessions.filter(
      (_: LoggedInUser, index: number) => !sessionActivity[index],
    );
    // console.debug(
    //   'ACTIVE SESSIONS FOUND:',
    //   activeSessions.map((session: LoggedInUser) => session?.webId),
    // );
    // console.debug(
    //   'PASSIVE SESSIONS FOUND:',
    //   passiveSessions.map((session: LoggedInUser) => session?.webId),
    // );
    await Promise.all(
      passiveSessions.map(
        async (session: LoggedInUser) =>
          await removeSessionFromStorage(session?.sessionId as string),
      ),
    );

    return activeSessions;
  } catch {
    return undefined;
  }
};

export const saveActiveSessionsToStorage = async (sessions: LoggedInUser[]) => {
  if (sessions) {
    try {
      if (sessions.length > 0) {
        console.debug(`SAVING SESSION BY ${sessions[0]?.webId}`);
        return await EncryptedStorage.setItem(
          'user-sessions',
          JSON.stringify(sessions),
        );
      } else {
        return await EncryptedStorage.removeItem('user-sessions');
      }
    } catch {
      return undefined;
    }
  }
};

export const removeSessionFromStorage = async (id: string) => {
  if (id) {
    try {
      const sessions = JSON.parse(
        await EncryptedStorage.getItem('user-sessions'),
      );
      const newSessions = sessions.filter(
        ({ sessionId, webId }: { webId: string; sessionId: string }) => {
          if (sessionId === id) {
            console.debug(`REMOVING SESSION BY ${webId}`);
            return false;
          } else {
            return true;
          }
        },
      );
      await saveActiveSessionsToStorage(newSessions);
      return newSessions as LoggedInUser[];
    } catch {
      return undefined;
    }
  }
};

export type QueryHookDefaultOptions =
  | {
      key?: string;
      staleTime?: number;
      variables?: Record<string, any>;
    }
  | undefined;

export interface AuthenticatedHookContext extends QueryFunctionContext {
  queryKey: [string, { [key: string]: any }];
}

export function useQueryHookAsUser<
  QueryHookResult,
  QueryHookOptions = QueryHookDefaultOptions
>(
  queryFunction: QueryFunction<AuthenticatedHookContext>,
  hookOptions?: QueryHookDefaultOptions & QueryHookOptions,
) {
  const { sessionId } = useCurrentUser() ?? {};
  return useQuery<AuthenticatedHookContext, unknown, QueryHookResult>(
    [hookOptions?.key, { sessionId, ...hookOptions?.variables }],
    queryFunction,
    {
      staleTime: hookOptions?.staleTime ?? Number(1000 * 60 * 5), // Refetch after 5 minutes by default
    },
  );
}

export type HookDefaultOptions =
  | {
      key?: string;
      onSuccess?: (
        data: any,
        variables: any,
        context: any | undefined,
      ) => Promise<void> | void;
      onError?: (
        error: any,
        variables: any,
        context: any | undefined,
      ) => Promise<void> | void;
    }
  | undefined;

export interface AuthenticatedHookContext extends QueryFunctionContext {
  queryKey: [string, { [key: string]: any }];
}

export function useMutationHook<
  MutationHookResult,
  MutationHookVariables,
  MutationHookOptions = HookDefaultOptions
>(
  mutationFunction: MutationFunction<MutationHookResult, MutationHookVariables>,
  hookOptions?: HookDefaultOptions & MutationHookOptions,
) {
  return useMutation<
    MutationHookResult,
    unknown,
    MutationHookVariables,
    AuthenticatedHookContext
  >(hookOptions?.key as string, mutationFunction, {
    onError: hookOptions?.onError,
    onSuccess: hookOptions?.onSuccess,
  });
}
