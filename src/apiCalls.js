// Your fetch requests will live here!
const fetchAPIcall = (data) => {
  fetch(`https://fitlit-api.herokuapp.com/api/v1/${data}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("error", error);
  });
}

console.log('I will be a fetch request!')

module.exports = {
  fetchAPIcall
}