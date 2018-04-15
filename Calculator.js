
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

    /**
     * if true, the following operations change the result and copy the result to the operand1.
     * if false, the following operations just change the result.
     */
    setResultAsOperand1 (b) {

        this.resultAsOperand1 = b;
    };

    setResult (value) {

        this.result = value;

        if (this.resultAsOperand1) {
            this.operand1 = this.result;
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
