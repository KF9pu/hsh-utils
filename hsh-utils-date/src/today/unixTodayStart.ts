// 오늘 시작 날짜 UNIX
const unixTodayStart = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const unixTime = Math.floor(now.getTime() / 1000);
  return unixTime;
};

export default unixTodayStart;
