import axios from 'axios';
import { useQuery } from 'react-query';

import { useCurrentUser } from '../../context';

export interface AuthenticatedRequestArguments {
  sessionId?: string;
}

export interface CurrentProfileArguments extends AuthenticatedRequestArguments {
  webId: string;
}

export const useGetCurrentProfileQuery = ({
  webId,
}: CurrentProfileArguments) => {
  const { sessionId } = useCurrentUser() ?? {};
  return useQuery('profile', () => getCurrentProfile({ webId, sessionId }));
};

async function getCurrentProfile({ webId }: CurrentProfileArguments) {
  const profile = (
    await axios.get(`http://localhost:3000/fetch?resource=${webId}`, {
      withCredentials: true,
    })
  ).data;
  return profile;
}
