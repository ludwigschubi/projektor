import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

import { LoggedInUser } from '../../context';

export const getActiveSessions = async () => {
  return (await axios.get('http://localhost:3000/sessions')).data;
};

export const logOutOfSession = (sessionId: string) => {
  return axios.post('http://localhost:3000/logout', { sessionId });
};

export const getActiveSessionsFromStorage = async () => {
  try {
    const sessions = JSON.parse(
      await EncryptedStorage.getItem('user-sessions'),
    );
    console.debug(`RETRIEVING SESSION BY ${sessions[0]?.webId}`);
    return sessions as LoggedInUser[];
  } catch {
    return undefined;
  }
};

export const saveActiveSessionsToStorage = async (sessions: LoggedInUser[]) => {
  if (sessions)
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
};

export const removeSessionFromStorage = async (id: string) => {
  if (id)
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
};
