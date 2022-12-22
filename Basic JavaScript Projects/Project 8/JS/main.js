// Concatenate method //
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML =whole_sentence
}
// slice method //
function slice_Method() {
    var sentence = "All work and no play makes johnny a dull boy.";
    var Section = sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());

function search_function() {
    let text = "Mr. Blue has a blue house"
let position = text.search("Blue");

document.getElementById("search").innerHTML = position;
}
// string method //
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// precision method //
function precision_Method() {
    var X = 2374.82758378524;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
// to fixed //
console.log(financial(123.456));
// vakue of //
const object1 = new MyNumberType(4);

console.log(object1 + 3);