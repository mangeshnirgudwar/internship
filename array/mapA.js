var num = [1,2,3,4,5];

var number1 = num.map(double);
function double(value)
{
    return value * 2;
}

console.log(number1);