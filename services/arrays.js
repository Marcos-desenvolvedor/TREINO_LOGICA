export function sumArr(array) {
  const Sum = array.reduce((acc, obj) => {
    return acc + obj;
  }, 0);

  return Sum;
}

export function readArr(arr) {
  const showNames = arr.map((name) => {
    console.log(name);
  });

  return showNames;
}
