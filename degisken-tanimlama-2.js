//*********************DEĞİŞKEN TANIMLAMA KURALLARI *******************/
// Değişken Genel Tanimlama Kurallari:
// camelCase kullanimi (ilk kelime kucuk harfle basliyor ve diger kelimeler buyuk harfle baslar)

let fullname = ""; // bu degil
let kodluyoruzserverinfo = ""; //bu da degil okunabilir degil
let kodluyoruz_server_info = ""; // bu da degil
//JavaScript buyuk ve kucuk harf duyarlidir
let fullName = "";
let kodluyoruzServerInfo = "";
let kodluyoruzSERverInfo = ""; // bu iki isim ayni degil bu da dogru kullanim degil

// let firstName = "Serap",lastName = "Gülgen"; // bu sekilde kullanma
let firstName = "Serap"; // bu sekilde yazmak daha okunur ve dogru bir kullanim
let lastName = "Gülgen";
console.log(firstName, lastName);

//UPPER_CASE KULLANIMI Sabit olacak bilgiler varsa bunlari buyuk harfle tanimlayabilirim

const password = "1234"; //dogru kullanim degil
const PASSWORD = "1234"; // bu dogru kullanim
const SERVER_PASSWORD = "1234"; // DOGRU KULLANİM

//degiskenlerde turkce ve diger dllerin kullanimi

// let türkçeBilgi = "Türkçe bilgi yazdırılıyor.."; //tercih edilmez
// console.log(türkçeBilgi);
// let turkceBilgi="" // bu da olmaz
let info = "Türkçe Bilgi Yazdiriliyor...";
console.log(info);

//Anlamsiz Degisken Adlari Kullanmayin

let x = ""; // bu kullanim dogru degil
// x,y,z,k,i,j,e gibi anlamsiz degisken isimleri kullanmayin

// ## Ek Bİlgi:
// 1: boolean tanimlarken is/has kullanim:

let isActive = true;
let hasPassword = false;

// 2: Line Length < 80
