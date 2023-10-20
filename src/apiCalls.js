// Your fetch requests will live here!
const fetchAPIcall = (data) => {
  return fetch(`https://fitlit-api.herokuapp.com/api/v1/${data}`)
  .then((response) => {
    if(!response.ok) {
      throw new Error("Error");
    } 
    return response
    // console.log(response.json())
  })
  .then((data) => {
    return data.json();
  })
  .catch((error) => {
    console.error("error", error);
  });
}

console.log('I will be a fetch request!')

module.exports = {
  fetchAPIcall
}