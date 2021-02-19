import { Response } from 'express';
import { Graphs } from 'webql-client';
import { IndexedFormula, Fetcher } from 'rdflib';

import { ResourceRequest } from '../../utils';

export const profileHandler = async (req: ResourceRequest, res: Response) => {
  const graph = new Graphs(req.webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  try {
    const { ['#me']: profile } = await graph.load();
    res.json({
      name: profile['foaf#name'],
      picture: profile['vcard#hasPhoto'],
      bio: profile['vcard#note'] ?? 'Default Bio',
      link: 'https://instagram.com/opensource_plug',
      followers: [],
      follows: [],
      posts: [],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
