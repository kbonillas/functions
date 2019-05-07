// global scope
var globalVar = 'hello world';

function sayHello() {
    console.log(globalVar);

    // local/function scope
    var funcVar = 'im scoped inside a function';
    console.log(funcVar);
};

sayHello();
console.log(globalVar);
// console.log(funcVar);

// block scope
if (true) {
    // var blockVar = 'im inside a block'; // cant be
    // let blockVar = 'im inside a block'; // basically var but allows for reassignment
    const blockVar = 'im inside a block'; // stores a constant value only & cant be reassigned
    console.log(blockVar);
}
// console.log(blockVar);

function secondFunction() {
    // console.log(funcVar);
}

secondFunction();


// nested scope
function outerFunction(){
    const outer = 'im defined in outerFunction';
    console.log(outer);

    function innerFunction(){
        const inner = 'im defined in innerFunction';
        console.log(inner);
    }

    function secondFunction() {
        console.log('blah');
    }

    // innerFunction();
    // console.log(inner);

    return innerFunction
}

outerFunction();