import { Request } from 'express';
import { Fetcher, IndexedFormula, UpdateManager } from 'rdflib';

export interface SessionRequest extends Request {
  session?: { sessionId: string };
}

export interface ResourceRequest extends SessionRequest {
  store?: IndexedFormula;
  fetcher?: Fetcher;
  updater?: UpdateManager;
  webId?: string;
}

export const getSessionIdFromRequest = (req: SessionRequest) =>
  (req.session?.sessionId ?? req.body?.sessionId) as string;
