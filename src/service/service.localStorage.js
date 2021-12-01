/**
 * local storage service
 * @author Kelvin Mansi
 * @date 11/23/2021
 * @time 11:00 AM
 * @version 1.0
 * @since 1.0
 */

class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, value) {
    this.storage.setItem(key, value);
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

export default LocalStorage;
