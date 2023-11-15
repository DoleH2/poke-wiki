
export const formatNumber = (number, formatLength) => {
    let numberStr = number.toString();
    while (numberStr.length < formatLength) {
        numberStr = '0' + numberStr;
    }
    return numberStr;
}