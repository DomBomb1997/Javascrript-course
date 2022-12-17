//Color changing function//
function changeColor(newColor) {
    const elem = document.getElementById('para');
    elem.style.color = newColor; }
//click me function//
function myfunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}