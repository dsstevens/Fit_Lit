// Your fetch requests will live here!
const fetchAPIcall = (data) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${data}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
    });
};

const postHydrationData = (userID, date, numOunces) => {
  return fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userID,
      date,
      numOunces
    }),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      // FORM HAS MISSING INFO
      if (response.status === 422) {
        throw new Error('The form is missing 1 or more pieces of information.');
      // NETWORK ERROR
      } else if (response.status >= 500) {
        throw new Error(
        `There has been a network error: ${response.status} ${response.statusText}. Please refresh the page or try again later.`,
        );
      } else {
      // ALL OTHER ERRORS
        throw new Error(
        `There has been an error: ${response.status} ${response.statusText}`,
        );
      }
    }
  })
}
   
module.exports = {
  fetchAPIcall,
  postHydrationData
};
