function PrimeNum(n) {
    const arrPrime = [1, 2, 3];

    for (let i = 5; i < n; i += 2) {
        let isPrime = true;
        for (let j = 3; j < ((i + 1) / 2); j += 2) {

            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arrPrime.push(i);
        }
    }
    return arrPrime;
}
module.exports = { PrimeNum }