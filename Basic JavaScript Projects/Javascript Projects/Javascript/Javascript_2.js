function validateForm() {
    let x = document.forms["myForm"]["text"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }