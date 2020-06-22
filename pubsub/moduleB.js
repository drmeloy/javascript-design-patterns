const pubSub = require('./pubsub');

pubSub.subscribe("anEvent", data => {
  console.log(
    `"anEvent", was published with the following data: "${data.msg}".`
  );
});
