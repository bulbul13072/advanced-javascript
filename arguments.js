// function add(num1, num2){
// return num1+num2
// }
// const adds = add(5, 2, 4);
// console.log(adds);

// function add(num1, num2){
//     console.log(arguments);
//     return num1+num2+arguments[2];
//     }
//     const adds = add(5, 2, 4);
//     console.log(adds);
function add(num1, num2){
    console.log([...arguments]);//you can spread this arguments out and it will show you an array like
    return num1+num2+arguments[2];
    }
    const adds = add(5, 2, 4, 7);//someone may pass some extra parameters
    console.log(adds);