export class AppStorage {
  constructor() {
    this.state = new Map();
  }

  clear() {
    this.state.clear();
  }

  getItem(key) {
    return this.state.get(key) || null;
  }

  key(index) {
    return [...this.state.keys()][index] || null;
  }

  get length() {
    return this.state.size;
  }

  removeItem(key) {
    this.state.delete(key);
  }

  setItem(key, value) {
    this.state.set(key, value);
  }
}
