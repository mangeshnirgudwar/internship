var num1 = [1,2,3,4];

var a = num1.findIndex(findThree);

function findThree(value) 
 {
    return value == 3;
}
 
console.log(a);


