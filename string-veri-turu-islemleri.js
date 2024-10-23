//******String Veri Türü İşlemleri **********/

let email = "serapgulgen@gmail.com";
let firstName = "serap";
let lastName = "GÜLGEN";

//string karakter sayisi -> length
console.log(email.length);
//İlk Karakteri Bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// String icinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@")); // olmayan bir şey aratırsak -1 gelir
console.log(email[11]);

// belli bir yere kadar al -> slice: (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(
  DOMAIN.slice(0, DOMAIN.indexOf(".")) //domainin 0 ından nokta görene kadar aldık
); //sadece gmail kısmını aldık

//bilgiyi degistir -> replace:
let kodluyoruz = email.replace("gmail.com", "kodluyoruz.org");
console.log(kodluyoruz);

// istediğim bilgi var mı? -> includes:
email.includes("ksdjflksdjf"); //false
email.includes("@"); //true

// istedigim bilgiyle basladı mı? bitti mi ? -> startWidth, endWidth :
console.log(
  email.endsWith("kodluyoruz.org") //true
);

// İlk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(
  1
).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`;
console.log(fullName);
