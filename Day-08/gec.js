var name = 'Tom';

function sayName() {
  console.log(this.name);
}

// GEC - Global Execution Context
// 1. Creation Phase -name undefined , tom() allocated memory
// 2. Execution Phase - name assigned with 'Tom' value, tom() function definition is assigned to it

// FEC - Function Execution Context
// when the function sayName() is invoked, a new execution context will be created for the function and the code inside the function will be executed.

// creation FEC - name undefined
// execution FEC - name assigned with 'Tom' value and console.log(this.name) will be executed and it will print 'Tom' in the console because this keyword will refer to the global object which is window in browser and global in nodejs and name variable is defined in the global scope.