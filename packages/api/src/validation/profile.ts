import { checkSchema } from 'express-validator';

export const checkProfile = checkSchema({
  webId: {
    in: 'body',
    isString: true,
  },
  name: {
    in: 'body',
    isString: true,
  },
  bio: {
    in: 'body',
    isString: true,
  },
  link: {
    in: 'body',
    isString: true,
  },
  picture: {
    in: 'body',
    isString: true,
  },
});
