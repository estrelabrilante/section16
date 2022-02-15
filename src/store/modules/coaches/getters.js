export default {
  coachesGetter(state) {
    return state.coaches;
  },
  // checking if there is any coaches
  hasCoaches() {
    return state.coaches && state.coaches.length > 0;
  },
};
