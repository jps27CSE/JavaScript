var arr=[4,8,1,3,5,6,4,3,9]

var filterdArr=arr.filter(function(value)
{
    return value %2==0
})

console.log(filterdArr)