// PROMP İLE KULLANICIDAN BİLGİ ALMAK

let fullName = prompt("Lütfen adınızı giriniz!");
console.log(fullName);

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style= "color:red">${fullName}</small>`;

function istek() {
  var kelime = prompt("Bir değer giriniz", "lütfen sadece kelime giriniz");
  document.write(kelime);
}
