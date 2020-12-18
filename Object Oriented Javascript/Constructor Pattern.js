function Person (name,email)
{
    this.name = name;
    this.email = email;
    this.print = function()
    {
        console.log("Name: " +this.name)
    }

}

var p1 = new Person('Jack Pritom Soren', 'test@mail.com')

var people=[p1]


console.log(p1)
console.log(p1.name)
console.log(p1.email)

people.forEach(function(person)
{
    console.log("Email: "+person.email)
    person.print()
})