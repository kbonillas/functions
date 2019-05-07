var userFirstName = 'kristin';
var userLastName = 'bonillas';

console.log(formatName(userFirstName, userLastName));
// console.log(createUserObj);

// declare a function
function formatName(firstName, lastName) { // parameters, kind of like variables
    // console.log(firstName);
    // console.log(lastName);

    // console.log(lastName + ' ' + firstName);
    // save to server from here
    var formattedName = lastName + ' ' + firstName;

    // TO DO: check if userFullName is already in localStorage,
    // if it is, then don't override
    // if not, save it

    if (!localStorage.getItem('userFullName')) {
        localStorage.setItem('userFullName', formattedName); // save to localStorage

    }
    

    return formattedName; // don't put anything after the return since this shows that it's the last line of the function
}

// formatName(userFirstName, userLastName); // the argument which has value going into the variables

// function expression:
var createUserObj = function (firstName, lastName) {
    var userObj = {
        name: formatName(firstName, lastName),
        age: null
    };

    return userObj;
}(userFirstName, userLastName); // add last set of parenthesis to evaluate function expression immediately after creation

// constructor way
var concatinate = new Function ('x', 'y', 'return x + y');
// console.log(concatinate('kristin', 'bonillas'));