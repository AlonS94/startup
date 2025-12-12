import { makeAutoObservable } from 'mobx';
import RootStore from './rootStore';
import {
  deleteSavedLogin,
  getSavedLogin,
  getToken,
  getUser,
  setSavedLogin,
  setToken,
  setUser,
} from 'utils/auth';
import { IUser } from 'types/user';

export default class User {
  rootStore: RootStore;
  isAuth: boolean = false;
  savedLogin: string | null = 'null';
  isRemember: boolean = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
    this.loadInitialState();
  }

  loadInitialState() {
    const token = getToken();
    const saved = getSavedLogin();

    this.setAuth(!!token);
    this.setSavedLogin(saved);
  }

  register(user: IUser) {
    this.setAuth(true);
    setUser(user);
  }

  private setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  private setSavedLogin(savedLogin: string | null) {
    this.savedLogin = savedLogin;
  }

  login(userData: IUser) {
    const { email, password } = userData;

    const userRaw = getUser(email);
    if (!userRaw) {
      throw new Error('Пользователь не найден');
    }

    const user: IUser = JSON.parse(userRaw);

    if (user.password !== password) {
      throw new Error('Неверный пароль');
    }

    if (this.isRemember) {
      setSavedLogin(email);
      this.setSavedLogin(email);
    } else {
      deleteSavedLogin();
      this.setSavedLogin(null);
    }

    setToken(this.isRemember);
    this.setAuth(true);
  }

  changeIsRemember(isRemember: boolean) {
    this.isRemember = isRemember;
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    this.setAuth(false);
  }
}
