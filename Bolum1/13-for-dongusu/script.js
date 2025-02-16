for(let i = 0; i <= 100; i++){
  console.log(i);
  

}

let toplam = 0;

let sayilar = [1,6,5,7,8,5,2,0,6,2,56,4,656,86,34]
console.log(sayilar[0])
for(let i = sayilar[0]; i <= sayilar.length-1; i++){
  console.log(sayilar[i]);

  toplam+= sayilar[i];

}
console.log(toplam);

