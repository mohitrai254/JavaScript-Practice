function throttle(fn, delay) {
  return function (...args) {
    document.getElementById("btn-search").disabled = true;
    setTimeout(() => {
      fn();
    }, delay);
  };
}

const myThrottle = throttle(() => {
  console.log("User clicked");
  document.getElementById("btn-search").disabled = false;
}, 3000);
