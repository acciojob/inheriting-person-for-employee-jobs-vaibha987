// complete this js code
function Person(name, age) {
	this.name=name
	this.age=age

	this.greet=function(){
		console.log(`Hello, my name is ${this.name}and I am ${this.age} years old.`)
	}
}

function Employee(name, age, jobTitle) {
Person.call(name,age,jobTitle)
this.jobTitle=jobTitle
this.jobGreet=function(){
	console.log(`Hello, my name is ${this.name},I am ${this.age} years old, and my job title is ${this.jobTitle}`)
}
	
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
const person = new Person('Alice', 30);
person.greet(); // "Hello, my name is Alice, I am 30 years old."
const employee = new Employee('Bob', 25, 'Software Engineer');
employee.jobGreet();// "Hello, my name is Bob, I am 25 years old, and my job title is Software Engineer."
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
