import { IUser } from 'types/user';

export const getToken = () =>
  localStorage.getItem('token') || sessionStorage.getItem('token') || null;
export const setToken = (isRemember: boolean) => {
  if (isRemember) {
    localStorage.setItem('token', 'fake-token');
  } else {
    sessionStorage.setItem('token', 'fake-token');
  }
};

export const setUser = (user: IUser) => {
  localStorage.setItem(`user:${user.email}`, JSON.stringify(user));
};
export const getUser = (email: string) => localStorage.getItem(`user:${email}`);

export const getSavedLogin = () => localStorage.getItem('savedLogin');
export const setSavedLogin = (email: string) => localStorage.setItem('savedLogin', email);
export const deleteSavedLogin = () => localStorage.removeItem('savedLogin');
