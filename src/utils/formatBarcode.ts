export default function formatBarcode(input: string): string {
  if (input.length !== 12) {
    throw new Error('Input must be a string of length 12');
  }

  const firstPart = input.slice(0, 2);
  const secondPart = input.slice(2, 4);
  const thirdPart = input.slice(4, 10);
  const fourthPart = input.slice(10);

  return `${firstPart}-${secondPart}-${thirdPart}-${fourthPart}`;
}
