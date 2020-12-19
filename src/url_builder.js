export default class {
  constructor() {
    this.type = "";
  }

  expiredAt() {
    this.type = "expiredAt";
    return this;
  }

  count() {
    this.type = "count";
    return this;
  }

  url() {
    this.type = "url";
    return this;
  }

  total() {
    this.type = "total";
    return this;
  }

  build() {
    return "hmage.download." + this.type;
  }
}
