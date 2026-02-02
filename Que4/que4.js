const shoppingCart = [
  { itemName: "Mac M4", itemPrice: 98000 },
  { itemName: "Iphone 17", itemPrice: 76000 },
  { itemName: "Airpods 131 pro", itemPrice: 1500 },
  { itemName: "iPad Pro 449", itemPrice: 48000 },
  { itemName: "Apple Watch 29", itemPrice: 50000 },
];

const sortedCart = shoppingCart.sort((a,b)=>a.itemPrice-b.itemPrice);
console.log(sortedCart);