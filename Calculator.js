
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

    operatorFunction (operation, bool) {

        if (bool) {

            this.operand1 = operation;
            this.result = this.operand1;
        } else {

           this.result = operation;
        };
    };

    sum () {

        /*if (this.resultAsOperand1) {

            this.operand1 = this.operand1 + this.operand2;
            this.result = this.operand1;
        } else {

            this.result = this.operand1 + this.operand2;
        };*/

        this.operatorFunction(this.operand1 + this.operand2, this.resultAsOperand1);
    };

    multiply () {

        /*if (this.resultAsOperand1) {

            this.operand1 = this.operand1 * this.operand2;
            this.result = this.operand1;
        } else {

            this.result = this.operand1 * this.operand2;
        };*/

        this.operatorFunction(this.operand1 * this.operand2, this.resultAsOperand1);
    };

    divide () {

        /*if (this.resultAsOperand1) {

            this.operand1 = this.operand1 / this.operand2;
            this.result = this.operand1;
        } else {

            this.result = this.operand1 / this.operand2;
        };*/

        this.operatorFunction(this.operand1 / this.operand2, this.resultAsOperand1);
    };

    subtract () {

        /*if (this.resultAsOperand1) {

            this.operand1 = this.operand1 - this.operand2;
            this.result = this.operand1;
        } else {

            this.result = this.operand1 - this.operand2;
        };*/

        this.operatorFunction(this.operand1 - this.operand2, this.resultAsOperand1);
    };

    power () {

        /*if (this.resultAsOperand1) {

            this.operand1 = Math.pow(this.operand1, this.operand2);
            this.result = this.operand1;
        } else {

            this.result = Math.pow(this.operand1, this.operand2);
        };*/

        this.operatorFunction(Math.pow(this.operand1, this.operand2), this.resultAsOperand1);
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
