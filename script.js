const age = function(number) {
    if (age >= 18){
        return 'Hello there';
    } else {
        return 'Hey kiddo';
    }
}

const theAge = function(number) {
    const yourAge = age(number);
    return yourAge;
}

console.log(theAge(15));



const VAT = function(number1, number2) {
    const sum = number1 / 100 * number2;
    return sum;
}

const VAT1 = function(number1, number2) {
    const withVat = VAT(number1, number2);
    return withVat;
}

console.log(VAT1(1000,121));



const VAT2 = function(number1, number2) {
    const sum = number1 / 100 * number2;
    const sum1 = sum / 121 * 21;
    return [sum, sum1]
}

const VAT3 = function(number1, number2) {
    const basePrice = VAT2(number1, number2);
    return basePrice;
}

console.log(VAT3(1000,121));

