'use strict';
const countTypesInArray = (lol) => {
  const counter = {};
  for (const element of lol) {
    const type = typeof element;
    const count = counter[type] || 0;
    counter[type] = count + 1;
  }
  return counter;
};
module.exports = { countTypesInArray };
