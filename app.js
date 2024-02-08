let url = "https://catfact.ninja/fact";
let res = axios.get(url);
// console.log(res);
let h3 = document.querySelector("h3");
let button = document.querySelector("button");
// async function getCatFacts() {
//   let res = await axios.get(url);
//   console.log(res.data.fact);
//   p.innerText = res.data.fact;
// }

button.addEventListener("click", async () => {
  let res = await axios.get(url);
  console.log(res.data.fact);
  h3.innerText = res.data.fact;
});
