//Set

let myArray = [1,2,3,4,5];

let mySet = new Set(myArray);

console.log(mySet);

mySet.add(22);

console.log(mySet);

mySet.add({a:2,b:3});

console.log(mySet);

mySet.delete(4);

console.log(mySet);

mySet.clear();

console.log(mySet);


//Map

let myMap = new Map([['a1','hello'],['b1','testing']]);

myMap.set('c1','jack')

myMap.delete('a1')

console.log(myMap);


//WeakSet

let carWeakSet = new WeakSet();

let car1 = {

    make: 'honda',
    model: 'civic'
};

carWeakSet.add(car1);

let car2 = {

    make: 'toyota',
    model: 'camry'
};

carWeakSet.add(car2);

console.log(carWeakSet);


//WeakMap

let carWeakMap = new WeakMap();

let key1=
{
    id: 1
}

let car3 = 
{
    make: 'car',
    model: 'audi'
}

carWeakMap.set(key1, car3);

console.log(carWeakMap);