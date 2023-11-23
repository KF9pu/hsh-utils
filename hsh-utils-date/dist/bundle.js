'use strict';

// 현재 시간 UNIX
const unixNow = () => {
    const now = new Date();
    const unixTime = Math.floor(now.getTime() / 1000);
    return unixTime;
};

// 오늘 시작 날짜 UNIX
const unixTodayStart = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const unixTime = Math.floor(now.getTime() / 1000);
    return unixTime;
};

// 내일 시작 날짜 UNIX
const unixTomorrowStart = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const unixTime = Math.floor(tomorrow.getTime() / 1000);
    return unixTime;
};

exports.unixNow = unixNow;
exports.unixTodayStart = unixTodayStart;
exports.unixTomorrowStart = unixTomorrowStart;
