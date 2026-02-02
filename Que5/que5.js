const users = [
  { id: 1, name: "Ankit", isActive: true, membership: "premium" },
  { id: 2, name: "Rohan", isActive: false, membership: "premium" },
  { id: 3, name: "Nayani", isActive: true, membership: "basic" },
  { id: 4, name: "Priyanka", isActive: true, membership: "premium" },
  { id: 5, name: "Sunita", isActive: false, membership: "basic" }
];

function getPremiumActiveUsers(users) {
  return users.filter(
    user => user.isActive && user.membership === "premium"
  );
}

console.log(getPremiumActiveUsers(users));
