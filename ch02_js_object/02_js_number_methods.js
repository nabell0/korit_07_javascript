let x = 10.656;
// toFixed()
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(5));

// toPrecision()
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));

// parseInt()
console.log.apply(parseInt('-10')); // 결과 값 :  -10
console.log.apply(parseInt('-12.33')); // 결과 값 : -12
console.log.apply(parseInt('10')); // 결과 값 : 10
console.log.apply(parseInt('12.33')); // 결과 값 :  12
console.log.apply(parseInt('10 20 30')); // 결과 값 : 10
console.log.apply(parseInt('10 years')); // 결과 값 : 10
console.log.apply(parseInt('years 10')); // 결과 값 : NaN

// NaN : Not a Number