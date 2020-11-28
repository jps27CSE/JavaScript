function hello(name,print)
{
    print(name)
}


hello('jack pritom soren', function(name){
    console.log('hi ' +name)
})

var me = {
    name:'jack pritom',
    age:22,
    email:'test@gmail.com'
}

function printmyself(person,callback)
{
    console.log('Person: '+person.name+ 'Age: '+person.age)

    if(person.age >=18)
    {
        callback(person.email)
    }
    else
    {
        console.log('You are too small');
    }
}

printmyself(me,function(email){
    console.log('Email sent to '+email)
})