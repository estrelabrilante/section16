export default {
  registerCoach(state, payload) {
    // push payload as new coach
    // payload is form data
    state.coaches.push(payload);
  },
  //all coaches fetched from firebase
  setCoaches(state, payload) {
    //payload == list of coaches
    state.coaches = payload;
  },
};
