import { requestPost } from './API';

export const login = async (username, password) => {
  return requestPost('/users/login', {
    username: username,
    password: password,
  });
}

export const signup = async (username, password, name, phone) => {
  var body = {
    username: username,
    password: password,
    name: name,
    phone: phone
  }
  return requestPost('/users/signup', body);
}