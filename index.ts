interface Student {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: "Bob",
  age: 18,
});
