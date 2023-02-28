class Decorator {
  constructor() {
    this.stock = [];
  }
  addPaint(can) {
    this.stock.push(can);
  }
  removePaint(can) {
    const index = this.stock.indexOf(can);
    this.stock.splice(index, 1);
  }
  paintInStock() {
    return this.stock.reduce((total, paintCan) => total + paintCan.litres, 0);
  }
  canPaint(room) {
    return this.paintInStock() >= room.area ? true : false;
  }
  paint(room) {
    if (this.canPaint(room)) {
      room.paint();
      let requiredPaint = room.area;

      for (const can of this.stock) {
        if (can.litres >= requiredPaint) {
          let usedPaint = requiredPaint;
          can.use(usedPaint);
          requiredPaint -= usedPaint;
        }
      }
    }
  }
  tidyUp() {
    this.stock = this.stock.filter((can) => can.litres);
  }
}

export default Decorator;
