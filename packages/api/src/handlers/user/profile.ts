import { Response } from 'express';
import { Graphs } from 'webql-client';
import { IndexedFormula, Fetcher } from 'rdflib';

import { ResourceRequest } from '../../utils';

export const profileHandler = async (req: ResourceRequest, res: Response) => {
  const graph = new Graphs(req.webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  try {
    const profileGraph = await graph.load();
    res.json({
      name: profileGraph['foaf#name'],
      photo: profileGraph['vcard#hasPhoto'],
      bio: profileGraph['vcard#note'],
      followers: [],
      follows: [],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
