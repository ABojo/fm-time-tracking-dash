import api from "./utils/api/index";
import ui from "./utils/ui/index";

function loadStats() {
  const activeTimeframe = ui.getTimeframe();
  const statData = api.getTimeframeData(activeTimeframe);

  ui.addStats(statData);
}

function setupTimeSwitcher() {
  ui.setupTimeHandlers((timeframe) => {
    const data = api.getTimeframeData(timeframe);
    ui.updateStats(data);
  });
}

loadStats();
setupTimeSwitcher();
