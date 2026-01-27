export function sumArr(array) {
  const Sum = array.reduce((acc, obj) => {
    return acc + obj;
  }, 0);

  return Sum;
}

export function readArr(arr) {
  // const showNames = arr.map((name) => {
  //   console.log(name);
  // });

  for (const name of arr) {
    console.log(name);
  }
}

export function onlyPairs(arr) {
  const apenasPares = arr.filter((n) => n % 2 === 0);

  return apenasPares;
}

export function largestNumber(arr) {
  let BigNumber = arr[0];

  for (let i = 0; i <= arr.length; i++) {
    const num = arr[i];
    if (num > BigNumber) {
      BigNumber = num;
    }
  }
  return BigNumber;
}
