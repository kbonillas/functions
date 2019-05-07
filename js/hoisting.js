// functions defined by a declaration are hoisted to the top
funcDeclaration();
function funcDeclaration() {
    console.log('im inside a function declaration');
}

// functions defined by expression are not hoised to the top. they remain where they are defined
var funcExpression = function (){
    console.log('im inside a function expression')
}

// so to avoid confusion, its best practice is to use functions after they are defined