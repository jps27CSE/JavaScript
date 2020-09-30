var point=
{
    x:10,
    y:20,
    z:30
}

point.x=43
point.a=14
console.log(point)

console.log(point.d)

var prop='z'
point[prop]=55
console.log(point)

delete point.a
console.log(point)