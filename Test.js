/*import Persona from "./Persona";*/
const Persona = require("./persona.js");

let nums = [1, 2, 3];
nums.push(4);
console.log("del 1 al 4:", nums);


let sum = function (nums) {

    let suma = 0;

    for (let num of nums) {

       suma = suma + num;
    };

    return suma;
};

console.log(sum(nums));


let name = "Javier";

let salute = function (name) {

    let result = "Hello ";

    if (name.toLowerCase().includes("javier")) {

        result = result + "Zare";
    } else {

        result = result + name;
    };

    return result;
};

console.log(salute(name));

/*crear clase Car y objetos Car*/
let car1 = new Car ("BMW", "M3", 30000);
let car2 = new Car ("Ferrari", "Testarossa", 180000);
let car3 = new Car ("Renault", "Clio", 6500);

function Car (marca, modelo, precio) {

    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.descripcion = function () {
        return this.marca + " " + this.modelo + " " + this.precio + " " + "euros";
    };
};

console.log(car1.descripcion());

let cars = [car1, car2, car3];

/*sacar el coche mas caro*/
let caro = function (cars) {

    let result = cars[0];

    for (let car of cars) {

        if (result.precio <= car.precio) {

            result = car;
        };
    };

    return result;
};

console.log(caro(cars).descripcion());

/*ordenar los coches de mas barato a mas caro*/
cars.sort(function(a, b) {
  return a.precio - b.precio;
});

function ordenar (cars) {

    for (let car of cars) {

        console.log(car);
    };
};

ordenar(cars);

/*ordenar los coches de mas caro a mas barato*/
cars.sort(function(a, b) {
  return b.precio - a.precio;
});

ordenar(cars);

/*ordenar los coches alfabeticamente por marca*/
cars.sort(function (a, b) {
  if (a.marca > b.marca) {
    return 1;
  }
  if (a.marca < b.marca) {
    return -1;
  }
  return 0;
});

ordenar(cars);

/*crear clase Persona e importarla y crear objetos Persona*/
let persona1 = new Persona ("Pepe", 30, 1.85, 80);
let persona2 = new Persona ("Juan", 25, 1.70, 66);
let persona3 = new Persona ("Luis", 52, 1.76, 85);

console.log(persona1.toString());
