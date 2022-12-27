import { useQuery } from 'react-query';
import { requestPost } from './API';

export const useMachines = () => {
  return useQuery('machines', () => requestPost('/machines', {
    buildingId: `${process.env.REACT_APP_BUILDING_ID}`
  }), {interval: 1000});
};

export const markMachine = async (payload) => {
  return requestPost('/machines/mark', payload);
}

export const unmarkMachine = async (payload) => {
  return requestPost('/machines/unmark', payload);
}