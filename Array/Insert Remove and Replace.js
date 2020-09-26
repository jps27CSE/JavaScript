var arr=[1,2,3,4,5,6,7,8]

arr.push(9)
console.log(arr)

arr.unshift(0)
console.log(arr)

arr.splice(3,0,9) //first one which index insert ,,,second one is data remove,,third one element insert
console.log(arr)

//remove data

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.splice(3,1)
console.log(arr)