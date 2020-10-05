function add(a,b)
{
    return a+b
}

var sum= add

console.log(sum(4,5))
console.log(typeof sum)

var arr=[]

arr.push(add)
console.log(arr)
console.log(arr[0](5,3))


var obj= 
{
    sum: add
}

console.log(obj)
console.log(obj.sum(7,9))

setTimeout(function ()
{
    console.log('I have created')
},100)