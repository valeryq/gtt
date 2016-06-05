import StorageFactory, { STORAGES } from '../../../utils/storages/StorageFactory';

/**
 * UserService class
 */
export default class UserService {
  constructor() {
    this.storage = StorageFactory.getStorage(STORAGES.session);
  }

  /**
   * Login user
   *
   * @param data
   */
  login(data) {
    this.storage.set('user', data);
  }

  /**
   * Logout user
   */
  logout() {
    this.storage.remove('user');
  }

  /**
   * Get user
   *
   * @returns {*}
   */
  user() {
    return this.storage.get('user') || null;
  }
}
