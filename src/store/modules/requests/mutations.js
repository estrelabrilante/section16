export default {
  addRequest(state, payload) {
    state.requests.push(payload);
    //push payload on this array
  },
  setRequests(state, payload) {
    //payload array of requests
    state.requests = payload;
  },
};
