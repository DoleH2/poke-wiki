export const formatNumber = (number, formatLength) => {
  if (!number) {
    return null;
  }
  let numberStr = number.toString();
  while (numberStr.length < formatLength) {
    numberStr = "0" + numberStr;
  }
  return numberStr;
};
