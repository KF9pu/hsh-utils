export default function shuffleArray(arr: Array<any>) {
  const arrLength = arr.length;
  const result = [];

  const rendomNums: any[] = [];
  for (const item of arr) {
    let randomNum = Math.floor(Math.random() * arrLength);
    while (rendomNums.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * arrLength);
    }
    result.push(arr[randomNum]);
  }

  return result;
}
