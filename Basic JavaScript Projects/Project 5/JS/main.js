document.write(typeof "word");
document.write("10"+5);

function my_Function1() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test1").innerHTML = isNaN("This is a string");
    document.getElementById("Test2").innerHTML = isNaN("007");
}

function my_Function2() {
    document.getElementById("INF").innerHTML = (7E700);
    document.getElementById("-INF").innerHTML = (-7E700);
}

function my_Function3() {
    document.getElementById("Greater").innerHTML = (1<2);
    document.getElementById("Less").innerHTML = (1>2);
}

function my_Function4() {
    document.getElementById("=").innerHTML = (1==1);
    document.getElementById("==").innerHTML = (1==2);
}

function my_Function5() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:7,
        Sound:"Bark!"
    };
    X=7; y=8; A=1; B=2; C="Age"; D=8; E="Carrot"; 
    document.getElementById("===").innerHTML = (X===X);
    document.getElementById("===1").innerHTML = (X===E);
    document.getElementById("===2").innerHTML = (X===C);
    document.getElementById("===3").innerHTML = (X===D);
}

function my_Function6() {
    document.getElementById("&").innerHTML = (5 > 2 && 10 > 4);
    document.getElementById("&&").innerHTML = (5 > 10 && 10 > 4);
    document.getElementById("|").innerHTML = (5 > 10 || 10 > 4);
    document.getElementById("||").innerHTML = (5 > 10 || 10 > 200);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
   document.getElementById("Not1").innerHTML = !(5 > 10);
}
console.log(2+2);
console.log(2>4);