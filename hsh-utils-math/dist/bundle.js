'use strict';

const limitAddNum = (maxValue, addValue, num) => {
    const result = num + addValue;
    return result > maxValue ? maxValue : result;
};

const limitSubtractNum = (minValue, subtractValue, num) => {
    const result = num - subtractValue;
    return result < minValue ? minValue : result;
};

exports.limitAddNum = limitAddNum;
exports.limitSubtractNum = limitSubtractNum;
