function reverseNumber(h) {
    const revNumber = +Math.abs(h)
    .toString()
    .split('')
    .reverse()
    .join('');

    return h > 0 ? revNumber : -revNumber;
}
reverseNumber(12345);