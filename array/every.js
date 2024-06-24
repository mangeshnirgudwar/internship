var x = [1,2,3,4];
var y = x.every(positive);
function positive(item)
{
    return item => 3;
}

var a = x.some(positive);
function positive(item)
{
    return item => 3;

}
console.log(y);
console.log(a);

