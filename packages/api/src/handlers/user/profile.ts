import { Response } from 'express';
import { Graphs } from 'webql-client';
import { IndexedFormula, Fetcher, UpdateManager } from 'rdflib';

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
      name: Array.isArray(profile['foaf#name'])
        ? profile['foaf#name'][0]
        : profile['foaf#name'],
      picture: Array.isArray(profile['vcard#hasPhoto'])
        ? profile['vcard#hasPhoto'][0]
        : profile['vcard#hasPhoto'],
      bio: Array.isArray(profile['vcard#hasNote'])
        ? profile['vcard#hasNote'][0]
        : profile['vcard#hasNote'],
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
  const webId = req.body.webId ?? req.webId;
  const graph = new Graphs(webId as string);
  graph.store = req.store as IndexedFormula;
  graph.fetcher = req.fetcher as Fetcher;
  graph.updater = req.updater as UpdateManager;
  try {
    const newProfile = {
      ...(req.body.name ? { 'foaf#name': req.body.name } : {}),
      ...(req.body.picture ? { 'vcard#hasPhoto': req.body.picture } : {}),
      ...(req.body.bio ? { 'vcard#note': req.body.bio } : {}),
      ...(req.body.link ? { 'schema#relatedLink': req.body.link } : {}),
    };
    await graph.patch({ [req.webId as string]: newProfile });
  } catch (error) {
    res.json({ error });
  }
};
