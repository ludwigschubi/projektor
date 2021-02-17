import axios from 'axios';
import { useQuery } from 'react-query';

import { useCurrentUser } from '../../context';

export interface AuthenticatedRequestArguments {
  sessionId?: string;
}

export const useGetCurrentProfileQuery = () => {
  const { sessionId } = useCurrentUser() ?? {};
  return useQuery('profile', () => getCurrentProfile({ sessionId }));
};

async function getCurrentProfile({ sessionId }: AuthenticatedRequestArguments) {
  const profile = (
    await axios.post(`http://localhost:3000/user`, {
      sessionId,
    })
  ).data;
  console.debug(profile);
  return profile;
}
