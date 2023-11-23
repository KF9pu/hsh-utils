// 내일 시작 날짜 UNIX
const unixTomorrowStart = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const unixTime = Math.floor(tomorrow.getTime() / 1000);
  return unixTime;
};

export default unixTomorrowStart;
