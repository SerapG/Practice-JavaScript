/*const asenkronFonksiyon = function (sayi, callback) {
  const sonuc = sayi + 2;
  callback(sonuc);
};

asenkronFonksiyon(2, function (sonuc) {
  console.log(sonuc);
  asenkronFonksiyon(4, function (sonuc) {
    console.log(sonuc);
    asenkronFonksiyon(6, function (sonuc) {
      console.log(sonuc);
    });
  });
});
*/

/*
const asenkronFonksiyon = (sayi) => {
  return new Promise((resolve, reject) => {
    if (sayi === 4) resolve("her şey yolunda!");
    else reject("bir sorun var!");
  });
};
asenkronFonksiyon(5)
  .then((data) => {
    console.log(data);
    return 1;
  })
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  */

const deneme = (name, surname) => {
  return new Promise((resolve, reject) => {
    if (name === "serap" && surname === "gulgen") resolve("giriş başarılı!");
    else reject("giriş başarısız");
  });
};

deneme("serap", "gulgen")
  .then((data) => {
    console.log(data);
    return "Hoşgeldin Serap";
  })
  .then((data) => {
    console.log(data);
    return "Senin yaşın 25";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
