const service = require("./service");

function getWeighInKG(weight) {
  return weight + "KG";
}

const car = {
  name: "Fiat", // property
  model: 50,
  weight: 850,
  price: 80000,
  color: "white",
  // methods
  getName: () => {
    console.log(car.name);
    console.log(getWeighInKG(car.weight));
    car.start();
    service.getPrice(car.price);
  },
  start: () => {
    console.log("start car");
  },
  // methods
  drive: () => {
    console.log("drive car");
  },
  brake: () => {
    console.log("brake car");
  },
  stop: () => {
    console.log("stop car");
  },
};

car.getName();

car.start();

car.name = "honda";

console.log(car.name);
