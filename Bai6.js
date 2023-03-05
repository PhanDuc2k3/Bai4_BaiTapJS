function decimalToBinary(decimalNumber) {
    let binaryNumber = "";
    while (decimalNumber > 0) {
      binaryNumber = (decimalNumber % 2) + binaryNumber;
      decimalNumber = Math.floor(decimalNumber / 2);//floor trả về số tự nhiên
    }
    return binaryNumber;
  }

console.log(decimalToBinary(16));
console.log(decimalToBinary(15));