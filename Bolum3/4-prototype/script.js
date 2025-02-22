//proporties

console.log([]);

console.log(new Array());

function Comment(title,body,username){

    this.title = title;
    this.body = body;
    this.username = username;
    this.createdAt = Date.now();
    // this.display = function(){
    //     return this.title;
    // }

    console.log(this);
    
}
Comment.prototype.display = function(){
    return this.title;
}

Comment.prototype.get_username = function(){
    return this.username;
}

const c1 = new Comment("The future","will be better", "HarunMetinn");
const c2 = new Comment("I can do it myself","that's so easy", "HarunMetinn");

Array.prototype.get_number = function(){
    return this.length;
}

const arr = ["item1","item 2"];

console.log(arr.get_number());







