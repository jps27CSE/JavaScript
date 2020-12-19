var obj= 
{
    name: "jack",

    print: function ()
    {
        console.log(this.name)
    }
}

var myPrint=obj.print.bind(obj)

console.log(myPrint)

obj.print()


function a()
{
    function b()
    {
        console.log("hello")
    }

    new b()
}

a()