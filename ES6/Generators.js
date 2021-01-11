function *g()
{
    console.log('hello');
    yield 'hello world';

    console.log('jack');
    yield 'hello jack';

}

var a = g()

console.log(a.next())