let input = document.getElementById("input-productID");
let button = document.getElementById("button-search");
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");

async function getData(ID) {
  let promise = await fetch(`https://fakestoreapi.com/products/${ID}`);
  return await promise.json();
}

button.addEventListener("click", async () => {
  let idVal = input.value;
  let result = await getData(idVal);
  title.innerText = `${result.title}`;
  price.innerText = `${result.price}`;
  description.innerText = `${result.description}`;
});
