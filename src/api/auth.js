import { post } from './fetch';

export const login = (user, pass) => {
  return post('/api/auth/signin', { 
      username: user, 
      password: pass

    });
};

export const createAccount = (user) => {
  return post('/api/auth/signup', {
    ...user
  });
};