function outer()
{
    function inner()
    {
        console.log('i am inner function')
    }
    
    inner()
    console.log('i am outer function')
}


outer()