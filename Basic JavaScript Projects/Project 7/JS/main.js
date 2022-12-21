var X=10;
function Add_numbers_1() {
    var Y=30;
    document.getElementById("Adding").innerHTML = (X+Y);
}
console.log(X+Y)

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greetings").innerHTML = "How are you today?";
    }
}

function get_numbers() {
    if (10 < 18) {
    document.getElementById("num").innerHTML = "18 is greater";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You aren't old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    } 
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon.";
    }
    else {
        Reply = "It's evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}