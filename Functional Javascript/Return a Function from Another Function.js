function greeting (msg)
{
    return function (name)
    {
        console.log(msg + ' '+ name);
    }
}

var good= greeting('Good morning')
var hello= greeting('hello')

hello('jack')
good('pritom')