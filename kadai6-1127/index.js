const obj1 = "abc"
const obj2 = 123
const obj3 = false
const obj4 = { a: 123}
const obj5 = { func: () => console.log('Hi!') }
const obj6 = { property: undefined }

console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
console.log(JSON.stringify(obj3))
console.log(JSON.stringify(obj4))
console.log(JSON.stringify(obj5))
console.log(JSON.stringify(obj6))
