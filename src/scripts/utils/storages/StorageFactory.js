import SessionStorage from './SessionStorage';

/**
 * Available storages
 *
 * @type {{session: string}}
 */
export const STORAGES = {
  session: 'session',
};

/**
 * StorageFactory class
 */
export default class StorageFactory {
  /**
   * Get data storage
   *
   * @param {string} storage
   */
  static getStorage(storage) {
    switch (storage) {
      case 'session':
        return new SessionStorage();
      default:
        throw new Error('Storage not found.');
    }
  }
}
