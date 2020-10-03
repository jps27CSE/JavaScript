function add(a, b) {
    var result = a + b
    console.log(result)
}

add(10, 20)

var arr1 = [1, 2, 3]
var arr2 = [5, 7, 9]
var arr3 = [7, 9, 1]

var sum = 0

for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i]
}
console.log(sum)

var sum2 = 0

for (var i = 0; i < arr2.length; i++) {
    sum2 += arr2[i]
}

console.log(sum2)

var sum3 = 0

for (var i = 0; i < arr3.length; i++) {
    sum3 += arr3[i]
}

console.log(sum3)

function sumofArray(arr) {
    var sum = 0

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    console.log(sum)
}

sumofArray(arr1)
sumofArray(arr2)
sumofArray(arr3)