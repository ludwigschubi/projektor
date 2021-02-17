import { Response } from 'express';
import { Graphs } from 'webql-client';
import { IndexedFormula, Fetcher } from 'rdflib';

import { ResourceRequest } from '../../utils';

export const getProfileHandler = async (
  req: ResourceRequest,
  res: Response,
) => {
  const graph = new Graphs(req.webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  res.json(await graph.load());
};
