export default function shuffleArray(arr: Array<any>) {
  const arrLength = arr.length;
  const result = [];

  const randomNums: any[] = [];
  for (const item of arr) {
    let randomNum = Math.floor(Math.random() * arrLength);
    while (randomNums.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * arrLength);
    }
    result.push(arr[randomNum]);
    randomNums.push(randomNum);
  }

  return result;
}
