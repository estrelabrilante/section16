export default {
  async contactCoach(context, payload) {
    // data fetched from contactForm component
    const newRequest = {
      // id: new Date().toISOString(),
      //  data sent to firebase
      // coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    //sending data to firebase as well as store locally
    //special syntax : ${} //node:requests
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        //unique id generate automatically
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send');
      throw error;
    }
    //generated id from firebase it has a name field
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  //fetching data from firebase
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://findacoachwebapp-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
      //commit a mutation that receive this requests
      //requests as a  payload

      context.commit('setRequests', requests);
    }
  },
};
