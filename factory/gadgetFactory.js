const Laptop = require('./laptop');
const Tablet = require('./tablet');

const gadget = { Laptop, Tablet };

const createGadget = (type, attributes) => {
  const GadgetType = gadget[type];
  return new GadgetType(attributes);
}

module.exports = createGadget;
