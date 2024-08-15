function validateEmail(email) {
  if (email.indexOf('@') === -1) return false;

  if (email[0] === '@' || email[email.length - 1] === '@') return false;

  const [localPart, domain] = email.split('@');

  if (domain.indexOf('.') === -1) return false;

  if (domain[0] === '.') return false;

  const domainExtension = domain.split('.')[1];

  if (domainExtension.length < 2) return false;

  if (email.length > 256) return false;

  return true;
}

console.log(validateEmail('john.doe@gmail.com'));
console.log(validateEmail('john@doe@gmail.com'));
console.log(validateEmail('john@gmail.c'));
console.log(validateEmail('john@.com'));
