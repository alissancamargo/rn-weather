import { combineReducers } from 'redux';
import type { StoreState } from '..';

import weather from './weather/reducer';

export default combineReducers<StoreState>({
  weather,
});
