
class Calculator {

    constructor () {

        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.resultAsOperand1 = false;
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

    setResult (value) {

        if (this.resultAsOperand1) {

            this.operand1 = value;
            this.result = this.operand1;
        } else {

           this.result = value;
        };
    };

    sum () {

        this.setResult(this.operand1 + this.operand2);
    };

    multiply () {

        this.setResult(this.operand1 * this.operand2);
    };

    divide () {

        this.setResult(this.operand1 / this.operand2);
    };

    subtract () {

        this.setResult(this.operand1 - this.operand2);
    };

    power () {

        this.setResult(Math.pow(this.operand1, this.operand2));
    };

    setResultAsOperand1 (b) {

        if (b) {
            this.resultAsOperand1 = true;
            this.operand1 = this.result;
            this.operand2 = 0;
        };
    };

    getResultAsOperand1 () {

        return this.resultAsOperand1;
    };

    getResult () {
        return this.result;
    };

    clear () {
        this.operand1 = 0;
        this.operand2 = 0;
        this.result = 0;
        this.resultAsOperand1 = false;
    };
};

module.exports = Calculator;
