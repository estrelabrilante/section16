export default {
  coachesGetter(state) {
    return state.coaches;
  },
  // checking if there is any coaches in list
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
