//*****Template Literals Kullanımı ******/

// ${parametre}  `` -> backtick
let userName = "serap";
const DOMAIN = "kodluyoruz.org";

let email = userName + "@" + DOMAIN;
console.log(
  "Merhaba ",
  userName,
  "sitemize hoş geldin",
  "mail adresin: ",
  email
);

let info = `Merhaba ${userName} 
sitemize hoş geldin. Mail Adresin : ${email}
kısa isminiz: ${userName[0]}.
mail adresinin uzunluğu ${email.length} birim 
borcunuz: ${(2 + 3) * 100} tl
gunun saat bilgisi: ${new Date().getHours()}`;
console.log(info);


//interpolasyon metin içerisinde değişken kullanmak anlamına gelir.
//Normal dizeler içerisinde ifadeler gömmek için kullanilir.