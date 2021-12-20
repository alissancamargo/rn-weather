import dayjs from 'dayjs';

export function toDate(date: Date) {
  return dayjs(date).format('DD/MM/YYYY');
}

export function toHour(hour: Date) {
  return dayjs(hour).format('HH:mm');
}
