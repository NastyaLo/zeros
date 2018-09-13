module.exports = function getZerosCount(number) {
    let counter = 0;

    for (let i = 1; i <= number; i++) {
        let num = i;
        if(num%5 == 0) {
            counter++;
            num = num/5;

            while(num%5 == 0) {
                counter++;
                num = num/5;
            };
        };
    };

    return counter;
}
