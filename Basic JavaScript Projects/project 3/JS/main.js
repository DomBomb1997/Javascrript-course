// Addition //
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" + addition;
}
// Subtraction //
function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 =" + subtraction;
}
// Multiplication //
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 X 8 = " + simple_Math;
}
// Division //
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 =" + simple_Math
}
// Multiple function //
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10 ,divided in half and then subtracted by 5 equals" + simple_Math;
}
// Percentages //
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a reminder of: " + simple_Math;
}
// Negation //
function negation_Operation() {
    var X = 10;
    document.getElementById("Math7").innerHTML = -X;
}
// Increment and Decrement //

    var X = 5;
    X++;
    document.write(X);

    var D = 5.25;
    D--;
    document.write(D)

    window.alert (Math.random() * 100);
// Math Object //
   function Math_Object() {

    document.getElementById("Math8").innerHTML = Math.round(4.6);
   }