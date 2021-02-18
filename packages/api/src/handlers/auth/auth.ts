import {
  getSessionFromStorage,
  Session,
} from '@inrupt/solid-client-authn-node';
import { Response } from 'express';

import { port } from '../../../server';
import { getSessionIdFromRequest, SessionRequest } from '../../utils';

export const loginHandler = async (req: SessionRequest, res: Response) => {
  const session = new Session();
  req.session = { sessionId: session.info.sessionId };
  const redirectHandler = (url: string) => {
    res.redirect(url);
  };

  await session.login({
    redirectUrl: `http://localhost:${port}/handle-redirect`,
    oidcIssuer: req.params?.idp ?? 'https://broker.pod.inrupt.com',
    clientName: 'Projektor App',
    handleRedirect: redirectHandler,
  });
};

export const sessionAliveHandler = async (
  req: SessionRequest,
  res: Response,
) => {
  const {
    info: { isLoggedIn },
  } = ((await getSessionFromStorage(
    getSessionIdFromRequest(req),
  )) as Session) ?? { info: { isLoggedIn: false } };
  res.json({ isLoggedIn });
};

export const redirectHandler = async (req: SessionRequest, res: Response) => {
  const session = await getSessionFromStorage(req.session?.sessionId as string);

  await session?.handleIncomingRedirect(`http://localhost:${port}${req.url}`);

  if (session?.info.isLoggedIn) {
    return res.redirect(
      'projektor://home?' + new URLSearchParams(Object(session?.info)),
    );
  } else {
    return res.redirect('projektor://login');
  }
};

export const logoutHandler = async (req: SessionRequest, res: Response) => {
  const session = await getSessionFromStorage(getSessionIdFromRequest(req));
  session?.logout();
  res.send('<p>Logged out.</p>');
};
