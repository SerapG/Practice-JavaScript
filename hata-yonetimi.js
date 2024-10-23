/*
throw
try
catch
finally
*/

/*var isim = "pembe";
if (isim !== "serap") 
    throw Error("beklenmeyen isim") ; //durdurulur

console.log(isim)
*/

try {
  var sayi1 = 4;
  var sayi2 = 1;
  var sonuc = sayi1 / sayi2;

  if (sayi2 === 0)
    throw Error("sayi 2 sıfır olamaz");
  else 
    console.log(sonuc);
} catch (error) {
  console.log(error);
}finally{
    console.log("hata yonetimi yapildi")
}
//her kosulda finally blogu calisir