export default {
  //all request
  // requests(state) {
  //   return state.requests;
  // },
  // request where our id = coachId
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    return state.requests.filter((req) => req.coachId === coachId);
  },
  //all request in our state
  // hasRequests(state) {
  //   //   True if there is at least one request
  //   return state.requests && state.requests.length > 0;
  // },
  //filtered request(request getter here)
  hasRequests(state, getters) {
    //   True if there is at least one request
    return getters.requests && getters.requests.length > 0;
  },
};
