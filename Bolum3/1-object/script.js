// Object

const product = {
    title: "Samsung s24",
    desctciption: "Guzel bir telefon",
    price: 4000,
    stock: 25,

    display: function(){
        return `urun basligi: ${this.title} urun aciklamasi: ${this.desctciption} ve fiyati ${this.price}`
    },
    active: function(){
        return (this.stock > 0) ? "urun satista":"stok yok";
    }
};
console.log(product.price);
console.log(product.display());

console.log(product.active());

