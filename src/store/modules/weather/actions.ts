import { action } from 'typesafe-actions';
import { IWeather } from './types';

export function getWeatherRequest() {
  return action('@weather/GET_WEATHER_REQUEST');
}

export function getWeatherSuccess(weathers: IWeather[]) {
  return action('@weather/GET_WEATHER_SUCCESS', { weathers });
}

export function getWeatherByLatLongRequest(lat: number, long: number) {
  return action('@weather/GET_WEATHER_BY_LATLONG_REQUEST', { lat, long });
}

export function getWeatherByLatLongSuccess(weather: IWeather) {
  return action('@weather/GET_WEATHER_BY_LATLONG_SUCCESS', { weather });
}

export function cancelLoading() {
  return action('@weather/CANCEL_LOADING');
}
