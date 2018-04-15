const Calculator = require("./Calculator.js");

testOperation();
testResultAsOperand1();

function testOperation () {

    const calculadora = new Calculator();

    calculadora.setOperand1(2);
    calculadora.setOperand2(5);

    calculadora.sum();
    assertEquals(calculadora.getResult(), 7);
}

function testResultAsOperand1 () {

    const calculadora = new Calculator();

    calculadora.setOperand1(2);
    calculadora.setOperand2(5);
    calculadora.setResultAsOperand1(true);
    calculadora.sum();
    calculadora.sum();
    assertEquals(calculadora.getResult(), 12);
    calculadora.setResultAsOperand1(false);
    calculadora.sum();
    calculadora.sum();
    assertEquals(calculadora.getResult(), 17);
}


function assertEquals (actual, expected) {

    if (actual !== expected) {

        throw actual + " is not equal to " + expected;
    }
}
