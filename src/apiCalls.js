// Your fetch requests will live here!
fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
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



console.log('I will be a fetch request!')

fetch("https://fitlit-api.herokuapp.com/api/v1/users")
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



fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
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