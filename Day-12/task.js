```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```
// output: Not provided

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```
// output: 1

// function outerCount() {
//     let count = 0;


// . Given an object with deeply nested properties, extract name, company, and address.city using destructuring
```js
const person = {
  name: "jack",
  company: {
    name: "le",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```
// output: name: jack, company: le, city: Bangalore





```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
```