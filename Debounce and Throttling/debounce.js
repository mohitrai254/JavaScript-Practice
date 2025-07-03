let counter = 0;
function getData() {
  console.log("Function called ", counter++);
}

function debounce(callback, delay) {
  let timer;
  // Why ...args is passed even I am executing only callback
  // You can skip (...args) if you're 100% sure your callback never needs arguments. But — it's usually added as a best practice for future-proofing and flexibility.
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}

const myDebounce = debounce(getData, 1000);
