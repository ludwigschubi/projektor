import axios from 'axios';
import { ImageSourcePropType } from 'react-native';

import {
  AuthenticatedHookContext,
  HookDefaultOptions,
  useMutationHook,
  useQueryHookAsUser,
} from '../auth';

export interface Profile {
  webId: string;
  name: string;
  bio: string;
  link: string;
  picture: ImageSourcePropType;
  followers: [];
  follows: [];
  posts: [];
}

export type CurrentProfileHookOptions =
  | {
      staleTime?: number;
      webId: string;
    }
  | undefined;

export const useGetCurrentProfileQuery = (
  getCurrentProfileHookOptions?: CurrentProfileHookOptions,
) => {
  return useQueryHookAsUser<Profile>(getCurrentProfile, {
    key: 'profile',
    staleTime: getCurrentProfileHookOptions?.staleTime,
    variables: { webId: getCurrentProfileHookOptions?.webId },
  });
};

async function getCurrentProfile({ queryKey }: AuthenticatedHookContext) {
  const [_, { sessionId, webId }] = queryKey;
  return axios
    .post(`http://localhost:4000/user`, {
      sessionId,
      webId,
    })
    .then(({ data }) => {
      return data;
    });
}

export type EditProfileVariables =
  | {
      webId: string;
      name?: string;
      bio?: string;
      link?: string;
      picture?: ImageSourcePropType;
    }
  | undefined;

export const useEditProfileMutation = (hookOptions?: HookDefaultOptions) => {
  return useMutationHook<Profile, EditProfileVariables>(editProfile, {
    key: 'profile',
    onError: hookOptions?.onError,
    onSuccess: hookOptions?.onSuccess,
  });
};

async function editProfile(variablesAndSession: EditProfileVariables) {
  const { sessionId: credentials, ...rest } = variablesAndSession as Record<
    string,
    any
  >;
  await axios.post('http://localhost:4000/user/edit', variablesAndSession);
  return rest as Profile;
}
