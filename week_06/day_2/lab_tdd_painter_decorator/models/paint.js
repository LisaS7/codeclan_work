class Paint {
  constructor(litres) {
    this.litres = litres;
  }
  get isEmpty() {
    return this.litres === 0 ? true : false;
  }
  empty() {
    this.litres = 0;
  }
  use(litres) {
    this.litres -= litres;
  }
}

export default Paint;
