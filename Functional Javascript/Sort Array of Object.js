var people=
[
    {name:'jack',age:22},
    {name:'pritom',age:24},
    {name:'test',age:30}
]

people.sort(function(a,b){
    return a.age - b.age
})

console.log(people)

people.sort(function(a,b){
    if(a.name > b.name)
    {
        return 1;
    }
    else if(a.name < b.name)
    {
        return -1;
    }
    else
    {
        return 0;
    }
})

console.log(people)