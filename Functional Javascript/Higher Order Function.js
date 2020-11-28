var arr=[3,2,4,5]

arr.forEach(function(a)
{
    console.log(a)
})


function caller()
{
    return function(name)
    {
        return "hello "+name
    }
}


var x=caller()

var y=x('jack')

console.log(y)

var z=caller()('jack')

console.log(z)

