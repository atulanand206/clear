import { requestPost } from './API';

export const findBuildingLayout = async (buildingId) => {
  return requestPost('/buildings/layout', {
    buildingId: buildingId,
  });
};