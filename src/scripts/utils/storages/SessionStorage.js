/**
 * SessionStorage class
 */
export default class SessionStorage {
  constructor() {
    if (typeof window.sessionStorage === 'undefined') {
      throw new Error('Don\'t support session storage');
    }

    this.storage = window.sessionStorage;
  }

  /**
   * Get item by key
   *
   * @param key
   */
  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  /**
   * Set item by key
   *
   * @param key
   * @param value
   */
  set(key, value) {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  /**
   * Remove item by key
   *
   * @param key
   */
  remove(key) {
    return this.storage.removeItem(key);
  }
}
