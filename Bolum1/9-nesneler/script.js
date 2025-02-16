// let kulllanici = ["Ahmet", "Deniz", 40];
let kullanici = {
  ad: "Derya",
  soyad: "Yetiskin",
  yas: 19,
  adres: { sehir: "Antalya", ilce: "Konyaalti" },
};

let sonuc;

sonuc = kullanici;
sonuc = kullanici["ad"];
sonuc = kullanici["soyad"];
sonuc = kullanici["yas"];
sonuc = kullanici["adres"]["ilce"];
sonuc = kullanici["adres"];
sonuc = kullanici.adres.sehir;
console.log(sonuc);
