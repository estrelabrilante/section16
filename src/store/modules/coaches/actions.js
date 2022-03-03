export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      // id:new Date().toISOString(),
      // id: 'c3',
      // id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    // fetch return a promise
    //Node: coaches
    //sending data to firebase by using `` and ${}
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        //PUT: ONE COACH PER USER // POST is not used here as add a new every time
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      //error...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    //shouldUpdate is false

    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    // otherwise shouldUpdate is true and load again from firebase.
    //load from firebase (GET)
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/coaches.json
      `
    );
    const responseData = await response.json();
    if (!response.ok) {
      //...technical error or response is okay error
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    //mutation setCoaches
    context.commit('setCoaches', coaches);
    //mutations setFetchTimeStamp
    //no payload needed
    context.commit('setFetchTimeStamp');
  },
};
