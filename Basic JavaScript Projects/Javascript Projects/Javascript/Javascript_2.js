function validateForm() {
    let X = document.forms["myForm"]["fname"].value;
    let Y = document.forms["myForm"]["lname"].value;
    let Z = document.forms["myForm"]["email"].value;
    let A = document.forms["myForm"]["phone"].value;
    if (X == "") {
      alert("First Name must be filled out");
      return false;
    }
    if (Y == "") {
      alert("Last Name must be filled out");
      return false;
    }
    if (Z == "") {
      alert("Email be filled out");
      return false;
    }
    if (A == "") {
      alert("Phone must be filled out");
      return false;
    }
  }