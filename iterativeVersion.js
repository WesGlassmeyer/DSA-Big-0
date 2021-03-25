function countSheep(num) {
  for (let i = 0; i < num; i++) {
    console.log(`${num - i}: Another sheep jump over the fence`);
  }
  console.log(`All sheep jumped over the fence`);
}

countSheep(3);

function powerCalculator(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return "Exponent should be >= 0";
  }
  let product = 1;
  for (let i = 0; i < exp; i++) {
    product *= base;
  }
  return product;
}

console.log(powerCalculator(10, 10));

function reverseString(string) {
  let newString = "";
  if (string.length === 0) {
    return "";
  } else {
    for (let i = 0; i < string.length; i++) {
      newString = string[i] + newString;
    }
  }
  return newString;
}

console.log(reverseString("abcdefg"));

function triNumSeq(n) {
  let output = 0;
  if (n <= 0) {
    return 0;
  } else {
    for (let i = 0; i < n; i++) {
      output += n - i;
    }
  }
  return output;
}

console.log(triNumSeq(9));

function splitter(str, separator) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== separator) {
      output += str[i];
    }
  }
  return output;
}

console.log(splitter("02/20/2020", "/"));

function fibSeq(num) {
  let output = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      output.push(0);
    } else if (i === 1) {
      output.push(1);
    } else {
      output.push(output[i - 1] + output[i - 2]);
    }
  }
  return output;
}

console.log(fibSeq(7));

function factorial(num) {
  let output = 1;
  for (let i = 1; i <= num; i++) {
    output *= i;
  }
  return output;
}

console.log(factorial(5));
