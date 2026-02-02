const container = document.getElementById("container");

const ul = document.createElement("ul");

const students = [
  { name: "kavi", marks: 95 },
  { name: "anmol", marks: 82 },
  { name: "raghu", marks: 98 }
];

students.forEach(student => {
  const li = document.createElement("li");
  li.textContent = `${student.name} – ${student.marks}`;
  li.style.backgroundColor = "#dbeafe";
  li.style.margin = "5px";
  li.style.padding = "8px";
  ul.appendChild(li);
});

container.appendChild(ul);