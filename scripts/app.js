import book from "./book.js";
import library from "./library.js";
let book1 = new book("sonu","krutika",2025,"a tale of two cities",2 ,7874668799);
console.log(book1);

let library1 = new library("the grate library");

 
library1.addbook(book1)
console.log(library1);