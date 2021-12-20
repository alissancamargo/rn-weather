import produce, { Draft } from 'immer';

import type { WeatherAction, WeatherState } from './types';

const INITIAL_STATE: WeatherState = {
  weathers: [],
  weather: null,
  loading: false,
};

export default function weather(state = INITIAL_STATE, action: WeatherAction) {
  return produce(state, (draft: Draft<WeatherState>) => {
    switch (action.type) {
      case '@weather/GET_WEATHER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@weather/GET_WEATHER_SUCCESS': {
        draft.loading = false;
        draft.weathers = action.payload.weathers;
        break;
      }
      case '@weather/GET_WEATHER_BY_LATLONG_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@weather/GET_WEATHER_BY_LATLONG_SUCCESS': {
        draft.loading = false;
        draft.weather = action.payload.weather;
        break;
      }
      case '@weather/CANCEL_LOADING': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
