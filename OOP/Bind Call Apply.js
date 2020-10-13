function myFunc(c,d)
{
    console.log(this)
    console.log(this.a+this.b +c +d)
}

myFunc.call({a:40,b:50},10,5)
myFunc.apply({a:40,b:50},[10,5])


var testBind=myFunc.bind({a:40,b:50},10,5)

testBind()