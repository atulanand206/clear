import { requestPost } from './API';

export const findMachines = async () => {
  return requestPost('/machines', {});
};