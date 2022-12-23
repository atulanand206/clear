import { useQuery } from 'react-query';
import { requestPost } from './API';

export function useCustomers() {
  return useQuery('customers', () => requestPost('/users/customers', {}));
}