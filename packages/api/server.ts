import { getSessionFromStorage } from '@inrupt/solid-client-authn-node';
import express from 'express';
import { graph, Fetcher } from 'rdflib';

import {
  ResourceRequest,
  getSessionIdFromRequest,
  getProfileHandler,
  SessionRequest,
} from './src';
import {
  loginHandler,
  logoutHandler,
  redirectHandler,
  sessionAliveHandler,
} from './src/handlers/auth';

const cookieSession = require('cookie-session');

const app = express();
export const port = 3000;

app.use(express.json());

app.use(
  cookieSession({
    name: 'session',
    // These keys are required by cookie-session to sign the cookies.
    keys: [
      'Required, but value not relevant for this demo - key1',
      'Required, but value not relevant for this demo - key2',
    ],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);

app.use(async (req: ResourceRequest & SessionRequest, res, next) => {
  const existingSession = await getSessionFromStorage(
    getSessionIdFromRequest(req),
  );
  if (existingSession?.info?.isLoggedIn && existingSession.info.webId) {
    const sessionStore = graph();
    const sessionFetcher = new Fetcher(sessionStore);
    sessionFetcher._fetch = existingSession.fetch;
    req.webId = existingSession.info.webId;
    req.fetcher = sessionFetcher;
    req.store = sessionStore;
  } else if (
    req.path !== '/login' &&
    req.path !== '/session' &&
    req.path !== '/handle-redirect'
  ) {
    res.send(403);
  }
  next();
});

// Auth routes
app.get('/login', loginHandler);
app.get('/handle-redirect', redirectHandler);
app.post('/logout', logoutHandler);
app.post('/session', sessionAliveHandler);

// User routes
app.post('/user', getProfileHandler);

app.listen(port, () => {
  console.log(
    `Server running on port [${port}]. ` +
      `Visit [http://localhost:${port}/login] to log in to [broker.pod.inrupt.com].`,
  );
});
