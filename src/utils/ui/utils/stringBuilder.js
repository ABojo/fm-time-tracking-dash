const stringBuilder = (() => {
  const previousStrings = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  function buildTime(hours) {
    return `${hours}hrs`;
  }

  function buildPrevious(timeframe, hours) {
    return `${previousStrings[timeframe]} - ${buildTime(hours)}`;
  }

  return { buildTime, buildPrevious };
})();

export default stringBuilder;
