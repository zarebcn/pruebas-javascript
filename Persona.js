
class Persona {

    constructor (name, age, height, weight) {

    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    };

    toString() {

        return this.name + ", " + this.age + " años, " + this.height + " M., " + this.weight + " kilos.";
    };
};

module.exports = Persona;
