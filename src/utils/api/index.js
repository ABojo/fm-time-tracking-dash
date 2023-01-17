import json from "./utils/data.json";

const api = (() => {
  function getTimeframeData(timeframe) {
    const data = json.map((obj) => {
      return {
        title: obj.title,
        times: obj.timeframes[timeframe],
      };
    });

    return data;
  }

  return { getTimeframeData };
})();

export default api;
