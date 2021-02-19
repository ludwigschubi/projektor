import axios from 'axios';
import { ImageSourcePropType } from 'react-native';

import { AuthenticatedHookContext, useHookAsUser } from '../auth';

export interface Profile {
  name: string;
  bio: string;
  link: string;
  picture: ImageSourcePropType;
  followers: [];
  follows: [];
  posts: [];
}

export const useGetCurrentProfileQuery = (
  getCurrentProfileHookOptions?:
    | {
        staleTime?: number;
      }
    | undefined,
) => {
  return useHookAsUser<Profile>(getCurrentProfile, {
    key: 'profile',
    staleTime: getCurrentProfileHookOptions?.staleTime,
  });
};

async function getCurrentProfile({ queryKey }: AuthenticatedHookContext) {
  const [_, { sessionId }] = queryKey;
  return axios
    .post('http://localhost:3000/user', {
      sessionId,
    })
    .then(({ data }) => {
      return data;
    });
}
