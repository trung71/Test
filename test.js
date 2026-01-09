const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

console.log(persons.map((p) => {
  return [p.firstname, p.lastname].join(" ");
}));


AAAAAAAAAAAAAAAAAA