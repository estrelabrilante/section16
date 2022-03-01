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

    //sending data to firebase by using ``
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        //PUT: ONE COACH PER USER
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
  async loadCoaches(context) {
    //load from firebase
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //...error
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
    context.commit('setCoaches', coaches);
  },
};
