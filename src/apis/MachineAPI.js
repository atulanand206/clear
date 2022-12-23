import { requestPost } from './API';

export const findMachines = async () => {
  return requestPost('/machines', {});
};

export const markMachine = async (payload) => {
  return requestPost('/machines/mark', payload);
}

export const unmarkMachine = async (payload) => {
  return requestPost('/machines/unmark', payload);
}