
selamlama();
fun("hello");
fun("how are you");
yasHesaplama(2001);


function selamlama(){
  console.log("merhaba");
}

function fun(mesaj){

  console.log(mesaj)

}
function yasHesaplama(dogumYili){
  let simdikiTarih = new Date().getFullYear();
  console.log("Yasiniz:" + (simdikiTarih -dogumYili));
}