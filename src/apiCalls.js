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
      console.error("error", error);
    });
};

module.exports = {
  fetchAPIcall,
};
