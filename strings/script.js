let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("20.8");
sonuc = parseFloat(20.6);
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");
sonuc = Number.isInteger(sonuc);

let sayi = 10.1223;
sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(1);

sonuc = Math.round(4.8);
sonuc = Math.ceil(1.4);

sonuc = Math.sqrt(144);
sonuc = Math.pow(2, 2);
sonuc = Math.min(1, 3, 5, 6, 8, 4, 0);
sonuc = Math.max(33, 5, 32, 67, 12, 43, 65, 76, 9, 2, 43);

sonuc = Math.floor(Math.random() * 110);

console.log(typeof sonuc);
console.log(sonuc);
