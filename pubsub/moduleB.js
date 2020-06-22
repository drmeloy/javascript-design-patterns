const pubSub = require('./pubsub');
let subscription;

subscription = pubSub.subscribe("anEvent", data => {
  console.log(
    `"anEvent", was published with the following data: "${data.msg}".`
  );
  subscription.unsubscribe();
});
