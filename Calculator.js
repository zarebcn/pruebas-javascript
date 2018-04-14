
class Calculator {

    constructor () {

        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
    };

    setOperand1 (num) {
        this.operand1 = num;
    };

    getOperand1 () {
        return this.operand1;
    };

    setOperand2 (num) {
        this.operand2 = num;
    };

    getOperand2 () {
        return this.operand2;
    };

    sum () {
        this.result = this.operand1 + this.operand2;
    };

    multiply () {
        this.result = this.operand1 * this.operand2;
    };

    divide () {
        this.result = this.operand1 / this.operand2;
    };

    subtract () {
        this.result = this.operand1 - this.operand2;
    };

    setResultAsOperand1 (b) {

        if (b) {
            this.operand1 = this.result;
            this.operand2 = 0;
        };
    };

    getResult () {
        return this.result;
    };

    clear () {
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
    };
};

module.exports = Calculator;
