

// const product = {
//     title: "Samsung s24",
//     description: "Guzel bir telefon",
//     price: 4000,
//     stock: 25,

//     display: function(){
//         return `urun basligi: ${this.title} urun aciklamasi: ${this.desctciption} ve fiyati ${this.price}`
//     },
//     active: function(){
//         return (this.stock > 0) ? "urun satista":"stok yok";
//     }
// };

function Product(title,description,price,stock){

    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;

    this.display = function(){
        return `urun basligi: ${this.title} urun aciklamasi: ${this.description} urun fiyati: ${this.price} urun stogu: ${this.stock}`;
    }

    this.is_active = function(){
        return (this.stock > 0) ? "stokta yok":`stoktaki urun adedi ${stock}`;
    }

}

const product = new Product("Airpods 2","great",3000 , 12);
const product2 = new Product("Airpods 1","excellent",4500, 12);
const product3 = new Product("Airpods 3","good",2100,34);

// console.log(product.title,product.description,product.price);
// console.log(product2.title);
// console.log(product3.title);

console.log(product.display(),product.is_active());
console.log(product2.display());
console.log(product3.display());

