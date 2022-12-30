function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let x = document.forms["myForm"]["lname"].value;
    let x = document.forms["myForm"]["email"].value;
    let x = document.forms["myForm"]["phone"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }