/*
const arr =['foo','bar','xyz']
console.log(...arr)
*/

/*
const arr = [1, 2, 3];
// const arr2 =[arr,3,4,5]
const arr2 = [...arr, 3, 4, 5];
console.log(arr2);
*/

const arr = ["a", "b", "c", "d"];
const [deger1, deger2, ...rest] = arr;
//deger2 den sonrasını rest degiskenine atadik
console.log(...rest);
