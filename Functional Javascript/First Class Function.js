function sayName(name) {
    return 'Hello ' + name;
}

var hello = sayName;

var anotherHello = hello;

console.log(anotherHello('Jack Pritom Soren'));

var arr = [1, 2, 3, anotherHello];

arr.push(sayName);

console.log(arr);

var person =
{
    name: 'Jack Pritom',
    sayName: hello,
    print: function () {
        console.log('hi')
    }
}

console.log(person);

var sum = 10 + (function () { return 50 })();

console.log(sum)

function wow(name, fun) {
    return fun(name);
}

var result = wow('jack pritom', sayName);
console.log(result);

function base(b) {
    return function (n) {
        var result = 1;

        for (var i = 0; i < b; i++) {
            result *= n;
        }

        return result;
    }
}

var power = base(2);
var result = power(5);
console.log(result)