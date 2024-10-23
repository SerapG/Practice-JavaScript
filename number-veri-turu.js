//******number*****/
//number veri turu tanimlamak:

let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
console.log(
  "Fiyat:",
  price,
  "price:",
  tax,
  "KDV tutari:",
  priceTax,
  "Fiyat:",
  total
);

let stringNumber = "11";
console.log(stringNumber);
// Çıktısı 11 olur fakat rebkleri farklı olur rakam olmadığını ve metinsel bir bilgi olduğunu belirtir
let newNumber = Number(stringNumber); //rakamsal veriye dönüştürdük
console.log(newNumber);
console.log("Number Constructor içine bilgi gönderildi: ", Number("111"));
// arttirma azaltma islemleri

let counter = 4;
//counter = counter + 1; //uzun yontem
counter += 1;
counter++;
console.log(counter);

counter -= 1;
counter--;
console.log(counter);

counter *= 10;
console.log(counter);

//islem önceligi:
console.log(2 + 3 * 10); //50???
console.log((2 + 3) * 10); //50???

//mod (kalan)alma:
//sayi tek mi cift mi?
console.log(3 % 2);
console.log(15 % 2); //0 ise cift 1 ise tek

//8 urun alan koliye tum urunler sigiyor mu?
console.log("Koli kalan urun örneği: ", 18 % 8);

//us alma **:
console.log("Üst alma uzun yol: ", 2 * 2 * 2 * 2);
console.log("Üst alma örneği: ", 2 ** 4);

//asagi yuvarlama ornegi -> Math.floor:
console.log("Aşağı yuvarlama örneği: 1.8 ", Math.floor(1.8));
//yukari yuvarlama ornegi -> Math.ceil:
console.log("Yukarı yuvarlama örneği: 1.3 ", Math.ceil(1.3));
//yakina yuvarlama ornegi -> Math.round:
console.log("Yakına yuvarlama örneği: 1.5 ", Math.round(1.5));
