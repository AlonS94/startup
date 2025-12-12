import User from './user';
import { makeAutoObservable } from 'mobx';

export default class RootStore {
  user: User;

  constructor() {
    this.user = new User(this);

    makeAutoObservable(this, {}, { autoBind: true });
  }
}
