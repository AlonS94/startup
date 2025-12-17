import { makeAutoObservable } from 'mobx';
import RootStore from './rootStore';
import { ILogin, IUser } from 'types/user';
import { createRequest } from 'utils/createRequest';
import { setIsAuth, setLoginUser } from 'utils/auth';

export default class User {
  rootStore: RootStore;
  login: string | null = null;
  isRemember: boolean = true;
  isLoading: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  changeIsRemember(isRemember: boolean) {
    this.isRemember = isRemember;
  }

  logout() {
    this.setLogin(null);
    setIsAuth('false');
  }

  private setIsLoading(isLogin: boolean) {
    this.isLoading = isLogin;
  }

  private setLogin(userData: ILogin | null) {
    this.login = userData ? userData.user.login : null;
  }

  private handlerLogin(userData: ILogin | null) {
    if (this.isRemember && userData) {
      setLoginUser(userData.user.login);
    }
    this.setLogin(userData);
  }

  fetchLogin({ login, password }: IUser, onSuccess: () => void) {
    this.setIsLoading(true);
    createRequest<ILogin>({
      body: { login, password },
      path: 'login',
      onSuccess: (data) => {
        this.handlerLogin(data);
        setIsAuth('true');
        onSuccess();
      },
      method: 'POST',
      onError: (err) => console.log(err),
    })().finally(() => {
      this.setIsLoading(false);
    });
  }

  fetchRegister({ login, password }: IUser, onSuccess: () => void) {
    this.setIsLoading(true);
    createRequest<ILogin>({
      body: { login, password },
      path: 'register',
      onSuccess: (data) => {
        this.handlerLogin(data);
        setIsAuth('true');
        onSuccess();
      },
      method: 'POST',
      onError: (err) => console.log(err),
    })().finally(() => {
      this.setIsLoading(false);
    });
  }
}
