'use strict';

const unixNow = () => {
    const now = new Date();
    const unixTime = Math.floor(now.getTime() / 1000);
    return unixTime;
};

exports.unixNow = unixNow;
