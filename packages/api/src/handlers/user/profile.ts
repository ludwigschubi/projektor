import { getSessionFromStorage } from '@inrupt/solid-client-authn-node';
import { Response } from 'express';

import { getSessionIdFromRequest, SessionRequest } from '../../utils';

export const getProfileHandler = async (req: SessionRequest, res: Response) => {
  const existingSession = await getSessionFromStorage(
    getSessionIdFromRequest(req),
  );
  // res.send();
};
