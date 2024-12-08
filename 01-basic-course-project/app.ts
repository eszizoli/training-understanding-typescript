function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5,12));

// function as type
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // ERROR
// combineValues = 5; // ERROR

console.log(combineValues(8, 8));

// callback function
function addHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addHandler(10, 20, (result) => {
  console.log(result);
});

addHandler(2, 3, printResult);
