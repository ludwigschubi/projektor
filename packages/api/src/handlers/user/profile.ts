import { Response } from 'express';
import { Graphs } from 'webql-client';
import { IndexedFormula, Fetcher } from 'rdflib';

import { ResourceRequest } from '../../utils';

export const profileHandler = async (req: ResourceRequest, res: Response) => {
  const webId = req.body.webId ?? req.webId;
  const graph = new Graphs(webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  try {
    const { ['#me']: profile } = await graph.load();
    res.json({
      webId: req.params.webId ?? req.webId,
      name: profile['foaf#name'],
      picture: profile['vcard#hasPhoto'],
      bio: profile['vcard#note'],
      link: 'https://instagram.com/opensource_plug',
      followers: [],
      follows: [],
      posts: [],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export type EditProfileRequestBody = {
  webId: string;
  name: string;
  bio: string;
  link: string;
};

export const editProfileHandler = async (
  req: ResourceRequest,
  res: Response,
) => {
  console.debug(req.body);
  const webId = req.body.webId ?? req.webId;
  const graph = new Graphs(webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  try {
    // const { ['#me']: profile } = await graph.load();
    // res.json({
    //   webId: req.params.webId ?? req.webId,
    //   name: profile['foaf#name'],
    //   picture: profile['vcard#hasPhoto'],
    //   bio: profile['vcard#note'],
    //   link: 'https://instagram.com/opensource_plug',
    //   followers: [],
    //   follows: [],
    //   posts: [],
    // });
  } catch (error) {
    res.status(500).json({ error });
  }
};
