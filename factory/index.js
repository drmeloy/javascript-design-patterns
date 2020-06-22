const gadgetFactory = require('./gadgetFactory');

const myLaptop = gadgetFactory.createGadget('Laptop', {
  ram: 8,
  hdd: 256,
  name: "Dan's MacBook Pro"
});

const myTablet = gadgetFactory.createGadget('Tablet', {
  ram: 4,
  hdd: 128,
  name: "Dan's iPad",
  netowrk: '4G'
});

console.log(myLaptop);
console.log(myTablet);
