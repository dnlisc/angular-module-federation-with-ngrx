import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ShellState } from './shell.state';
import * as ShellActions from './shell.actions';

const initialState: ShellState = {
  shellFeature: false,
};

const getShellFeatureState = createFeatureSelector<ShellState>('shell');

export const getShellFeature = createSelector(
  getShellFeatureState,
  (state: ShellState) => state.shellFeature
);

export const shellReducer = createReducer(
  initialState,
  on(ShellActions.toggleShellFeature, (state: ShellState) => {
    return {
      ...state,
      shellFeature: !state.shellFeature,
    };
  })
);
