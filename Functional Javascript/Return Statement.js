function name (firstName,lastName,gender)
{
    var output;

    if (gender == 'male' || gender == 'Male')
    {
        output= 'Mr. '+ firstName +' ' +lastName
    }

    else if(gender =='female' || gender=='Female')
    {
        output= 'Ms. '+ firstName+' '+lastName
    }

    return output
}

var data= name('jack', 'pritom','male')

console.log(data)