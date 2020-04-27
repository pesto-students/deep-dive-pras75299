function telephoneCheck(inputPhoneNumber) {
  const phoneNumberPattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  const pattern = new RegExp(phoneNumberPattern);
  return pattern.test(inputPhoneNumber);
}

export { telephoneCheck };
