function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = Math.abs(parseInt(end, 10) - parseInt(start, 10));

    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let id = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++id;
    }
  }
}
