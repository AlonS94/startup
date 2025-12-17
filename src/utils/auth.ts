export const getLoginUser = () => localStorage.getItem('login');
export const setLoginUser = (login: string) => localStorage.setItem('login', login);

export const getIsAuth = () => sessionStorage.getItem('token') || 'false';
export const setIsAuth = (isAuth: 'true' | 'false') => {
  sessionStorage.setItem('token', isAuth);
};
