function isPrime(n) {
  if (n < 2) {
    return false;
  } 

  const square  = Math.sqrt(n);
  let i = 2;
  
  while (i <= square ) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

function factorial(n) {
  let i = 1;
  let result = 1;

  while(i <= n) {
    result = result * i;
    i++;
  }

  return result;
}

