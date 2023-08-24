const hideName = (input?: string): string => {
  if (!input) return '';
  const firstPart = input.substring(0, 1);
  const secondPart = input.substring(2);
  console.log(secondPart);
  return firstPart + 'O' + secondPart;
};

export default hideName;
