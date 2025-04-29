import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Front-end: connected to the chat channel!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Front-end: disconnected to the chat channel!");
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Front-end: received data from the chat channel: ", data);
  }
});
