const isValidBracketSequenece = (string) => {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let stack = [];

  for (let char of string) {
    if (brackets[char]) {
      stack.push(char);
    } else if (stack.length > 0 && brackets[stack[stack.length - 1]] === char) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValidBracketSequenece('()[]{}'));
console.log(isValidBracketSequenece('([{}])'));
console.log(isValidBracketSequenece('('));
console.log(isValidBracketSequenece('[(])'));
console.log(isValidBracketSequenece('{[}]'));
