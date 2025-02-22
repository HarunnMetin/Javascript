function Rectangle(name,width,height,color){

    this.name = name;
    this.width = width;
    this.height = height;
    this.color = color;

    this.area = function(){

        return this.width * this.height;
    }

}

const rect1 = new Rectangle("Rectangle 1" ,14,6);
const rect2 = new Rectangle("Rectangle 1" ,10,7);

rect1.perimeter = function(){
    return 2*(this.width + this.height);
}

//add proporties



rect1.color = "red";
rect2.color = "yellov";

delete rect1.color;
console.log(rect1.hasOwnProperty("color"));


console.log(rect1);
console.log(rect2);

console.log("alani:" + rect1.area());

console.log(rect1.perimeter());

//get keys
console.log(Object.keys(rect1));


//get values
console.log(Object.values(rect1));

//get entities
console.log(Object.entries(rect1));

for(let [key,value] of Object.entries(rect1)){
    if(typeof value !== "function"){
        console.log(key,value);
    }
}




