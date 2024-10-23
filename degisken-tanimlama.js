//var ile degisken tanimlama
//var serverName = "kodluyoruz.org";
//console.log(serverName);

//let ile degiskeni bos tanimlamak
let serverName;
console.log(serverName);

//let ile degiskene bilgi atamak
serverName = "https://kodluyoruz.org";
console.log(serverName);

//let ile degiskene bilgi atayarak tanimlamak
let password = "12345";
console.log(password);

//degisken atamasi yapmadan once kullanmaya calismak
/* HATALI KULLANIM
console.log(fullName)
var fullName ="Serap Gülgen";
*/

let fullName = "Serap Gülgen";
//let ile tanimlanan degiskenin icindeki bilgiyi degistirmek
fullName = "Lorem Ipsum Dolor";
console.log(fullName);

//birlestirme veya ekleme islemi

fullName + "Yeni eklenen bilgi"; //bu şekilde eklenmedi!!
console.log(fullName);

console.log(fullName + " Test Bilgisi"); // Ekle ve göster ama degiskene eklemedik

fullName = fullName + " 1. Yeni Bilgi";
fullName = "2. Yeni Bilgi : " + fullName;
console.log(fullName);

fullName = "Sifirladik";
fullName += " ve yeni Bilgi Eklendi"; // += dedigimiz zaman ekle ve birleştir yapmis oluruz
console.log(fullName)

//const ile degiskeni bos tanimlamaya calismak 

// const serverPassword; //sadece degisken tanimlandi ama ici bos? BU YONTEM YANLIS 

const SERVER_PASSWORD = "jdkjflsdk"
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD="1234"
//console.log(SERVER_PASSWORD)