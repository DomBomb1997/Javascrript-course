function getReceipt() {
        // This initializes our string so it can get passed from//
        // function to function, growing line by line into a full receipt//
        var text1 = "<h3>You Ordered:</h3>";
        var runningTotal = 0;
        var sizeTotal = 0;
        var sizeArray = document.getElementsByClassName ("size");
        for (var i = 0; i < sizeArray.length; i++) {
            if (sizeArray[i].checked) {
                var selectedsize = sizeArray[i].value;
                textl = textl+selectedsize+"<br>" ;
        }
    }
                
    if (selectedsize =
    sizeTotal = 6;
    else if (selectedsize =-=
    "Personal Pizza") t
    "Small Pizza")
    sizeTotal = 8;
    else if (selectedsize === "Medium Pizza ")
    sizeTotal = 10 ;
    else if (selectedsize === "Large Pizza ")
    sizeTotal = 14;
    else if (selectedsize == "Extra Large Pizza")
    sizeTotal = 16;
    runningTotal = sizeTotal;
    console.log (selectedsize+" = $"+sizeTotal+" . 00");
    console.log("size text1: "+text1);
    console.log ("subtotal : S"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping (runningTotal, text1)