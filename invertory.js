let storage = [
    { name: "GPU", category: "Electronics", price: 300, stock: 4 },
    { name: "CPU", category: "Electronics", price: 250, stock: 5 },
    { name: "RAM", category: "Electronics", price: 100, stock: 10 },
    { name: "Power Block", category: "Electronics", price: 80, stock: 3 },
    { name: "Case", category: "Electronics", price: 60, stock: 2 },
    { name: "Motherboard", category: "Electronics", price: 200, stock: 6 },
    { name: "Laptop", category: "Electronics", price: 1000, stock: 1 },
    { name: "Mobile Device", category: "Electronics", price: 700, stock: 4 },
    { name: "Shoes", category: "Clothing", price: 50, stock: 8 },
    { name: "T-shirt", category: "Clothing", price: 20, stock: 3 },
    { name: "Jacket", category: "Clothing", price: 100, stock: 5 },
    { name: "Pants", category: "Clothing", price: 45, stock: 2 },
    { name: "Shrek 1", category: "Books", price: 15, stock: 10 },
    { name: "Shrek 2", category: "Books", price: 15, stock: 5 },
    { name: "Shrek 3", category: "Books", price: 15, stock: 2 },
    { name: "Shrek 4", category: "Books", price: 15, stock: 1 }
];
console.log("Electronics items:");

storage.forEach(item => {
  if (item.category === "Electronics") {
    console.log("- " + item.name);
  }
});
console.log("Clothing items:");

storage.forEach(item => {
  if (item.category === "Clothing") {
    console.log("- " + item.name);
  }
});
console.log("Books items:");

storage.forEach(item => {
  if (item.category === "Books") {
    console.log("- " + item.name);
  }
});
let totalValue = 0;
storage.forEach(item => {
  totalValue += item.price * item.stock;
});
console.log("Total inventory value: $" + totalValue);
console.log("Items with sale discount:");
let found = false;
storage.forEach(item => {
  if (item.stock <= 5 && item.category !== "Books") {
    console.log("- " + item.name);
    found = true;
  }
});
if (!found) {
  console.log("No items qualify for discount.");
}