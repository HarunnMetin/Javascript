let simdi = new Date();

sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();

simdi.setFullYear(2032);
simdi.setMonth(4);
simdi.setDate(10);

let dogumtarihi = new Date(1980,5,19,20,12,25,50);
sonuc = dogumtarihi;

sonuc = simdi;

console.log(sonuc);