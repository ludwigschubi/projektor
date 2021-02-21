import axios from 'axios';
import { ImageSourcePropType } from 'react-native';

import { AuthenticatedHookContext, useHookAsUser } from '../auth';

export interface Profile {
  id: string;
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
  return useHookAsUser<Profile>(getCurrentProfile, {
    key: 'profile',
    staleTime: getCurrentProfileHookOptions?.staleTime,
    variables: { webId: getCurrentProfileHookOptions?.webId },
  });
};

async function getCurrentProfile({ queryKey }: AuthenticatedHookContext) {
  const [_, { sessionId, webId }] = queryKey;
  return axios
    .post(`http://localhost:4000/${encodeURIComponent(webId)}`, {
      sessionId,
    })
    .then(({ data }) => {
      return data;
    });
}
