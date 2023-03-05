function reverseString(str) {
  return str.split('').reverse().join('');
}

const reversedString = reverseString("hello world");
console.log(reversedString);