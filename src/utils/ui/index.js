import css from "./utils/css";
import buildElement from "./utils/buildElement";
import stringBuilder from "./utils/stringBuilder";
import getStatClass from "./utils/getStatClass";

const ui = (() => {
  const timeButtons = Array.from(document.querySelectorAll(`.${css.btn}`));
  const dashboard = document.querySelector(`.${css.dashboard}`);
  let activeButton = document.querySelector(`.${css.activeBtn}`);

  function removeCurrentStats() {
    const stats = Array.from(document.querySelectorAll(`.${css.statCard}`));

    stats.forEach((element) => {
      element.remove();
    });
  }

  function setNewActiveButton(newButton) {
    activeButton.classList.toggle(css.activeBtn);
    activeButton = newButton;
    newButton.classList.add(css.activeBtn);
  }

  function getTimeframe() {
    return activeButton.getAttribute("data-timeframe");
  }

  function setupTimeHandlers(cb) {
    timeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        if (activeButton !== this) {
          setNewActiveButton(this);

          const timeframe = getTimeframe();
          cb(timeframe);
        }
      });
    });
  }

  function addStatCard(stat) {
    const { title } = stat;
    const { current, previous } = stat.times;

    const timeString = stringBuilder.buildTime(current);
    const previousString = stringBuilder.buildPrevious(
      getTimeframe(),
      previous
    );
    const statClass = getStatClass(title);

    const statCard = buildElement("div", {
      className: `${css.statCard} ${statClass}`,
    });

    const statHead = buildElement("div", {
      className: css.statHead,
    });

    const statBody = buildElement("div", {
      className: css.statBody,
    });

    const statHeading = buildElement("h2", {
      className: css.statHeading,
      textContent: title,
    });

    const statControls = buildElement("button", {
      className: css.statControls,
      textContent: "Open Controls",
    });

    const statTime = buildElement("span", {
      className: css.statTime,
      textContent: timeString,
    });

    const statPrevious = buildElement("span", {
      className: css.statPrevious,
      textContent: previousString,
    });

    statCard.append(statHead);
    statCard.append(statBody);

    statBody.append(statHeading);
    statBody.append(statControls);
    statBody.append(statTime);
    statBody.append(statPrevious);

    dashboard.append(statCard);
  }

  function addStats(json) {
    json.forEach((activity) => {
      addStatCard(activity);
    });
  }

  function updateStats(json) {
    removeCurrentStats();
    addStats(json);
  }

  return { setupTimeHandlers, addStats, updateStats, getTimeframe };
})();

export default ui;
