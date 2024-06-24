var number = [1,2,3,4];

var arr = number.reduce(x, 0);

function x (acc, y)
{
    return acc + y;
}

console.log(arr)