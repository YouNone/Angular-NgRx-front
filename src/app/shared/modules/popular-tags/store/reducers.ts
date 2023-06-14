import { createReducer, on, Action } from '@ngrx/store';

import { PopularTagsStateInterface } from './../types/popularTagsState.interface';
import {
  getPopularTagsAction,
  getPopularTagsActionFailure,
  getPopularTagsActionSuccess,
} from './actions/getPopularTag.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getPopularTagsActionSuccess,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),

  on(
    getPopularTagsActionFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
}
