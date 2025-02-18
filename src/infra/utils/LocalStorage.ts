export class LocalStorage {
  static getItem(key: string) {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue && JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage`, error);
    }
  }

  static setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item ${key} to localStorage`, error);
    }
  }
} 