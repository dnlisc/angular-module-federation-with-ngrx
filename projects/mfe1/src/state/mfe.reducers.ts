import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as MfeActions from './mfe.actions';
import { MfeState } from './mfe.state';

// Initial state

const mfeInitialState: MfeState = {
  mfeFeature: false,
};

// MFE selectors
const getMfeFeatureSelector = createFeatureSelector<MfeState>('mfe');
export const getMfeFeature = createSelector(
  getMfeFeatureSelector,
  (state: MfeState) => state.mfeFeature
);

// This should be typed
const getShellFeatureSelector = createFeatureSelector('shell');
export const getShellFeature = createSelector(
  getShellFeatureSelector,
  (state: any) => state.shellFeature
);

export const mfeReducer = createReducer(
  mfeInitialState,
  on(MfeActions.toggleMfeFeature, (state: MfeState) => ({
    ...state,
    mfeFeature: !state.mfeFeature,
  }))
);
