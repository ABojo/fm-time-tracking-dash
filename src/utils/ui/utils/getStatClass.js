import css from "./css";

const getStatClass = (() => {
  const classMap = {
    work: css.statWork,
    play: css.statPlay,
    study: css.statStudy,
    exercise: css.statExercise,
    social: css.statSocial,
    "self care": css.statCare,
  };

  return function (title) {
    return classMap[title.toLowerCase()];
  };
})();

export default getStatClass;
