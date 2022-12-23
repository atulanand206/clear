import { requestPost } from './API';

export const login = async (username, password) => {
  return requestPost('/users/login', {
    username: username,
    password: password,
  });
}