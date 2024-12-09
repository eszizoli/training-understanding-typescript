let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// in case unknown type is used, the typeof can be used
if (typeof userInput === 'string') {
  userName = userInput;
}

// never type can indicate that there is no return from function
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
