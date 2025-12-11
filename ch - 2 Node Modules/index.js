const { add, sub, mul } = require('./modules/math.js');

console.log(add(80, 20)); // 100
console.log(sub(50, 40)); // 10
console.log(mul(35, 10)); // 350

const students = {
    name: "jenish bhagat",
    age: 24,
    course: "Manegment"
}

// let name = students.name;
// let age = students.age;
// let course = students.course;

const array = [111, 222, 333, "Jay Swaminarayan", 92.85, false];

let { name, age, course } = students;

let [a, b, c, d, e, f] = array;

console.log(name);
console.log(age);
console.log(course);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
