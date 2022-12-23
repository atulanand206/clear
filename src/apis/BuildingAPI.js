import { useQuery, useMutation, useQueryClient } from 'react-query';
import { requestPost } from './API';

const buildingId = "b2b20223-bdab-4a73-b50b-ac35eac7cfd6";

export function useBuilding() {
  return useQuery('building', () => requestPost('/buildings/layout', {
    buildingId: buildingId,
  }));
}

export function assignBedToUser(payload) {
  return requestPost('/beds/users/add', payload);
}