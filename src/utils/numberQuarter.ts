function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function splitNumberToEqualSum(targetSum: number): number[] {
  const numbers: number[] = [];
  let remainingSum = targetSum;

  for (let i = 0; i < 3; i++) {
    const randomMin = Math.max(1, Math.floor(remainingSum * 0.05)); // 최소값 설정
    const randomMax = Math.floor(remainingSum * 0.4); // 최대값 설정
    const randomNumber = getRandomInt(randomMin, randomMax);
    numbers.push(randomNumber);
    remainingSum -= randomNumber;
  }

  numbers.push(remainingSum);

  return numbers;
}
