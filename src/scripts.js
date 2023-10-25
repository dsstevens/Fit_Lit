import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/banner.png";
import { fetchAPIcall } from "./apiCalls";
import { updateDom } from "./domUpdates";

// // EVENT LISTENERS
window.addEventListener("load", function () {
  Promise.all([
    fetchAPIcall("activity"),
    fetchAPIcall("users"),
    fetchAPIcall("sleep"),
    fetchAPIcall("hydration"),
  ]).then((allData) => {
    updateDom(allData);
  });
});
