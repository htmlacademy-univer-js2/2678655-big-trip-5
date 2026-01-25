import { mockOffers } from './offers.js';
import { mockDestinations } from './destinations.js';
import { mockEvents } from './point.js';

export const getOffers = () => {
  return [...mockOffers];
}
export const getDestinations = () => {
  return [...mockDestinations]
};
export const getPoints = () => {
 return [...mockEvents];
}
