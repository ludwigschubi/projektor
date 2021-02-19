import React, { Reducer, ReducerState, ReducerAction } from 'react';

import { LoggedInUser } from '../../context';

import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_SET_SESSIONS,
  USER_SET_PROFILE,
} from './appActions';

export const initialAppState = {
  currentUser: [] as LoggedInUser[],
};

export type AppReducer = Reducer<
  typeof initialAppState,
  { type: string; payload: any }
>;

export const appReducer = (
  state: ReducerState<AppReducer>,
  action: ReducerAction<AppReducer>,
) => {
  console.info('App Reducer received action of type: ' + action.type);
  console.info('With the payload: ');
  console.info(action.payload);
  switch (action.type) {
    case USER_SET_PROFILE:
      return {
        ...state,
        currentUser: state.currentUser.map((user) => {
          if (user?.webId === (action.payload.user as LoggedInUser)?.webId) {
            return action.payload.user;
          } else {
            return user;
          }
        }),
      };
    case USER_SET_SESSIONS:
      return {
        ...state,
        currentUser: action.payload as LoggedInUser[],
      };
    case USER_LOGIN:
      return {
        ...state,
        currentUser: [...state.currentUser, action.payload] as LoggedInUser[],
      };
    case USER_LOGOUT:
      return {
        ...state,
        currentUser: state.currentUser.filter(
          (user: LoggedInUser) => user?.sessionId !== action.payload,
        ) as LoggedInUser[],
      };
    default:
      throw new Error(
        'Type ' +
          action.type +
          ' is not a registered action type of AppReducer',
      );
  }
};

export const AppReducerContext = React.createContext<{
  state: ReducerState<AppReducer>;
  dispatch: (action: ReducerAction<AppReducer>) => void;
}>({
  state: initialAppState,
  dispatch: (action: ReducerAction<AppReducer>) => {
    console.debug(action.type);
  },
});

export const useAppReducer = () =>
  React.useReducer(appReducer, initialAppState);

export const useAppContext = () => React.useContext(AppReducerContext);
