let subscribers = {};

module.exports = {
  publish() {
    // method to publish an update
  },
  subscribe(event, callback) {
    // method to subscribe to an update
    if(!subscribers[event]){
      subscribers[event] = [];
    }
    subscribers[event].push(callback);
  }
};
