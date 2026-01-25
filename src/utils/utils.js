import dayjs from 'dayjs';
import { DATE_FORMAT } from '../const/const';

export function capitalizeFirstLetter(string) {
  if (!string){
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

export const getDuration = (startDate, endDate) => {
  const diffMinutes = dayjs(endDate).diff(startDate, 'minute');
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  return `${hours ? `${hours}H ` : ''}${minutes}M`;
};
