const unixNow = () => {
  const now = new Date();
  const unixTime = Math.floor(now.getTime() / 1000);
  return unixTime;
};

export default unixNow;
