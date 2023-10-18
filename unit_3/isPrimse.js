function printPrimeNum() {
    console.log(1);
    console.log(2);
    console.log(3);
    for (let i = 5; i < 1000; i += 2) {
        let isPrime = true;
        for (let j = 3; j < ((i + 1) / 2); j += 2) {

            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log("this is a Prime number => " + i);
        }
    }
}
printPrimeNum()

