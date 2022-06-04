function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function () {
    console.log(a + b);
  };
  this.subtraction = function () {
    console.log(a - b);
  };
  this.multiplication = function () {
    console.log(a * b);
  };
  this.division = function () {
    console.log(a / b);
  };
}

const example = new Calculator(15, 5);
example.sum();
example.subtraction();
example.multiplication();
example.division();

/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
