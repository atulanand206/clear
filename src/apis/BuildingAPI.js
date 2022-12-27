import { useQuery } from 'react-query';
import { requestPost } from './API';
export const buildingId = `${process.env.REACT_APP_BUILDING_ID}`

export function useBuilding() {
  return useQuery('building', () => requestPost('/buildings/layout', {
    buildingId: buildingId,
  }));
}

export function assignBedToUser(payload) {
  return requestPost('/beds/users/add', payload);
}