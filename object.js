let book = {
title: "Grega dienasgrāmata 1",
author:"Džefs Kinnijs" ,
pages: 218 
};
console.log(book.title);
book["pages"] = 100;
if (book.pages > 300) {
console.log("Grāmata ir gara");
} else {
console.log("Grāmata nav gara");
}