function checkCreds() {
    //input validation for week 3
    console.log("checkCreds started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables needed
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    // fill in variables
    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The First Name Was inputed as" + " " + firstName);
    //working on inputting last name
    lastName = document.getElementById("lName").value;
    console.log("The Last Name Was inputed as" + " " + lastName);
    //working on inputting zip code
    zipCode = document.getElementById("zipCode").value;
    console.log("The Zip Code Was inputed as" + " " + zipCode);
    //working on inputting full name
    fullName = firstName + " " + lastName;
    console.log("The Full Name Was inputed as" + " " + fullName);
    //working on inputting first name lenth
    fullNameLength = fullName.length;
    console.log("The Full Name has" + " " + fullNameLength + " " + "characters");

    //working on inputting ZipCode
    zipCodeNumb = parseInt(zipCode);
    console.log("The Zip Code Number is " + zipCodeNumb);
    //things to check for... fullNameLength is less than 20 characters,
    //zipcode has only 5 digits
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name";
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code";
    }
    else {
        alert("User Credentials Passed, Welcome to the Site, " + fullName);
    }
}

function checkPalin() {
    console.log("checkPalin() started");

    //record string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entString is" + " " + entStr);

    //take away any spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("")
    console.log("entStr without spaces is" + " " + entStrNoSpace);
    //create rev array and rev string
    var revStr;
    const revArray = [];
    length = entStrNoSpace.length - 1;
    console.log("string length is" + " " + length);

    //input into array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    }
    //convert to a string from an array
    revStr = revArray.join("");
    console.log("reversed is" + " " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reversed being equal is" + " " + equal);
    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome";
    }
}