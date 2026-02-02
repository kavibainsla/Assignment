function oddevenelements(arr) {
  return arr.map(n => (n % 2 === 0 ? n * n : n));
}

console.log(oddevenelements([8, 9, 5, 3, 2]));