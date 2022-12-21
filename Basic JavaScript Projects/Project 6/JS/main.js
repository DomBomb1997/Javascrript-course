function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Animals(Species, Breed, Age, Color,) {
    this.Animal_Species = Species;
    this.Animal_Breed = Breed;
    this.Animal_age = Age;
    this.Animal_Color = Color;
}
var Jack = new Animals ("Dog", "Begal", 2, "Brown");
function myfunction() {
    document.getElementById("Keywords_and_Contructors").innerHTML = "Jack has a " + Jack.Animal_Color + "-colored " + Jack.Animal_Species + " he's " + Jack.Animal_age;
}


function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point =0;
        function Plus_one() {Starting_point += 1};
        Plus_one();
        return Starting_point;
    }
}