import dayjs from 'dayjs';
import { DATE_FORMAT } from '../const/const';

export function formatDate(date){
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export function getDuration(startDate, endDate) {
  const diffMinutes = dayjs(endDate).diff(startDate, 'minute');

  const days = Math.floor(diffMinutes / (24 * 60));
  const restMinutesAfterDays = diffMinutes % (24 * 60);

  const hours = Math.floor(restMinutesAfterDays / 60);
  const minutes = restMinutesAfterDays % 60;

  if (diffMinutes < 60) {
    return `${minutes}M`;
  }

  if (diffMinutes < 24 * 60) {
    const hoursStr = String(hours).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');
    return `${hoursStr}H ${minutesStr}M`;
  }

  const daysStr = String(days).padStart(2, '0');
  const hoursStr = String(hours).padStart(2, '0');
  const minutesStr = String(minutes).padStart(2, '0');

  return `${daysStr}D ${hoursStr}H ${minutesStr}M`;
}
