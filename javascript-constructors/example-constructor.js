function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof ExampleConstructor);
let newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor:', newExampleConstructor);
console.log('instance of newExampleConstructor:', newExampleConstructor instanceof ExampleConstructor);
