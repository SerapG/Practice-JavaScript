//*******Boolean Veri Türü İle Çalışmak **********/

//0 ve 1' i Anlamak
let isActive = false; // 0
isActive = true; //1
console.log(isActive);

let userName;
let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); //true
Boolean("0"); //true
Boolean(""); //false

userName = "user";
console.log("User Name var mı?", Boolean(userName));
//True False ataması yapılmadığı durumlarda Boolean içerisinde veri varsa true veri yoksa false diye gönderir.

// 0, -0, null, false, NaN, Undefined, ("") ->

Boolean(0); //false sıfırda deger olmadiginden dolayı false aliyor
Boolean(-0); //false
Boolean(-0.1); //true
Boolean(0 === 0); //true 0 eşit mi 0 a diye sorarsak true alırız

var x = 10 / "a";
console.log("Boolean x: ", Boolean(x));
var y = "" || -2 || "JavaScript";
console.log(Boolean(y));
var z = { 2: "js" };
console.log(Boolean(z));

var w = false || 0;
console.log(Boolean(w));

var t = "" && -2 && "Javascript";
console.log(Boolean(t));

let a;
console.log(Boolean(a));
