function greeting(msg)
{
    return function(name)
    {
        console.log(msg + " " + name);
    }
}

var hello= greeting('hello')
hello('jack pritom')