class Room {
  constructor(area) {
    this.area = area;
    this.painted = false;
  }
  paint() {
    this.painted = true;
  }
}

export default Room;
