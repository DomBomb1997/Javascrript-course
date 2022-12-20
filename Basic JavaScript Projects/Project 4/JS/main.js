function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Blond",
        Breed:"Pug",
        Age:4,
        Sound:"Woof!"
    };
    delete Animal.Color;
    document.getElementById("Dictionary2").innerHTML = Animal.Color;
}