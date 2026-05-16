var name = 'Tom';

function tom() {
   console.log(this.name + ' Runs');
}

// Invoke the function tom()
tom();

// allocate memory for name variable and assign value 'Tom' to it
//name will be initialized with undefined and then assigned with 'Tom' value
// allocate memory for tom function and assign the function definition to it

//execution context will be created for the global code and the code will be executed line by line

//function execution context 
// when the function tom() is invoked, a new execution context will be created for the function and the code inside the function will be executed