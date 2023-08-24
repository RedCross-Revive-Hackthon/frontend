const replaceMiddleChar = (input: string): string => {
  if (input.length % 2 === 0) {
    const middleIndex = input.length / 2 - 1;
    const firstPart = input.substring(0, middleIndex + 1);
    const secondPart = input.substring(middleIndex + 1);
    return firstPart + 'O' + secondPart;
  } else {
    return input;
  }
};

const originalString = '홍길동';
const modifiedString = replaceMiddleChar(originalString);
console.log(modifiedString);
