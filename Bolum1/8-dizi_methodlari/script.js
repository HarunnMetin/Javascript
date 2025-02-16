//dizi methodlari

let renkler = ["Mavi", "Pembe", "Yesil"];

let sonuc;

sonuc = renkler.length;
sonuc = renkler.toString();
sonuc = renkler.join("-");

// sonuc = renkler.pop();
// sonuc = renkler.shift();

// sonuc = renkler.push("Siyah");
// sonuc = renkler.unshift("Beyaz");

// sonuc = renkler.indexOf("Yesil");

sonuc = renkler.splice(0, 0, "Beyaz", "Siyah");

console.log(sonuc);
console.log(renkler);
