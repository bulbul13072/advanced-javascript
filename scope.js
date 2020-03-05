// function add(first, second){
//     let result = first + second;
//     return result;
// }
// const output = add(10, 15);
// console.log(output);
// function add(first, second){
//     let result = first + second;
//     return result;
// }
// const output = add(10, 15);
// console.log(output);
// console.log(result);//you couldn't see a variable from outside the function

//you can declare a global variable like that
// let bonus = 20;//it's a global scope. the scope of this variable is bigger than the result variable
// function add(first, second){
//     let result = first + second+bonus;// you can call a variable from inside of a function
//     return result;
// }
// const output = add(10, 15);
// console.log(output);
// console.log(result);//you couldn't see a variable from outside the function

// Summery: If we declare a variable with "let" or "const" inside of a carly bracket we couldn't access it from the outside
// but if we declare it with "var" it will be accessible from outside
//that is why let and const is known as block scope
let bonus = 20;//it's a global scope. the scope of this variable is bigger than the result variable
function add(first, second){
    var result = first + second+bonus;// you can call a variable from inside of a function
    return result;
    if(result > 0){
        var mood = "happy";
    }
    const output = add(10, 15);
    console.log(output);
    console.log(mood);
}


