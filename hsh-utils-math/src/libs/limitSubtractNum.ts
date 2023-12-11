const limitSubtractNum = (
  minValue: number,
  subtractValue: number,
  num: number
) => {
  const result = num - subtractValue;
  return result < minValue ? minValue : result;
};

export default limitSubtractNum;
