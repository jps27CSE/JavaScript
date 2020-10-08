var arr=[4,8,1,6,7,9,4,3]

arr.sort(function(a,b)
{
    if(a>b)
    {
        return 1
    }
    else if(a<b)
    {
        return -1
    }
    else
    {
        return 0
    }
})

console.log(arr)

var res1=arr.every(function(value)
{
    return value %2==0
})

console.log(res1)

var res2=arr.some(function(value)
{
    return value %2==1
})

console.log(res2)