function buildElement(type, config) {
  const newElement = document.createElement(type);
  const keys = Object.keys(config);

  keys.forEach((key) => {
    newElement[key] = config[key];
  });

  return newElement;
}

export default buildElement;
