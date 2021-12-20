import { takeLatest, call, put, all } from 'redux-saga/effects';
import type { ActionType } from 'typesafe-actions';
import { api } from '../../../services/api';
import { weatherApiKey } from '../../../config/env';

import {
  getWeatherByLatLongRequest,
  cancelLoading,
  getWeatherSuccess,
  getWeatherByLatLongSuccess,
} from './actions';
import { locations } from '../../../constants/location';
import { IWeather } from './types';

export function* getWeather(): any {
  try {
    const weathersList: IWeather[] = [];

    for (const locale of locations) {
      const element = locale;

      const response = yield call(
        api.get,
        `weather?q=${element.city}&lang=pt_br&appid=${weatherApiKey}`,
      );

      if (response.status === 200) {
        weathersList.push(response.data);
      }
    }

    yield put(getWeatherSuccess(weathersList));
  } catch (error) {
    throw new Error(`Erro getWeatherRequest, ${error}`);
  }
}

export function* getWeatherByLatLong({
  payload,
}: ActionType<typeof getWeatherByLatLongRequest>): any {
  try {
    const { lat, long } = payload;

    const response = yield call(
      api.get,
      `weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${weatherApiKey}`,
    );

    if (response.status === 200) {
      yield put(getWeatherByLatLongSuccess(response.data));
    }
  } catch (error) {
    console.tron.log(error, 'getWeatherByLatLong Error');
    yield put(cancelLoading());
  }
}

export default all([
  takeLatest('@weather/GET_WEATHER_REQUEST', getWeather),
  takeLatest('@weather/GET_WEATHER_BY_LATLONG_REQUEST', getWeatherByLatLong),
]);
