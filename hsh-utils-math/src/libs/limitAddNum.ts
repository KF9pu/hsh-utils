const limitAddNum = (maxValue: number, addValue: number, num: number) => {
  const result = num + addValue;
  return result > maxValue ? maxValue : result;
};

export default limitAddNum;
