//sttring methodlari

var word = "you can do anything you want.";
var reason;

reason = word.toUpperCase();
reason = word.length;
reason = word[28];
reason = word.slice(0, 10);
reason = word.slice(10);
reason = word.slice(-10, -5);
reason = word.substring(0, 11);
reason = word.substring(16);
reason = word.replace("anything you want", "yourself");
reason = word.trim();
reason = word.trimEnd();
reason = word.trimStart();
reason = word.indexOf("can");
reason = word.split(" ")[1];

console.log(reason);
