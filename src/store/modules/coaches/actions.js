export default {
  registerCoach(context, payload) {
    const coachData = {
      // id:new Date().toISOString(),
      // id: 'c3',
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    context.commit('registerCoach', coachData);
  },
};
