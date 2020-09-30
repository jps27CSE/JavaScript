var ob1=
{ 
    x: 10, 
    y: 20
}

var ob2=
{ 
    x: 10,
    y: 20
}

if(ob1.a==ob2.a && ob1.b==ob2.b)
{
    console.log(true)
}
else
{
    console.log(false)
}

console.log(JSON.stringify(ob1)==JSON.stringify(ob2))