const adviceContainer = document.querySelector(".text");
const idContainer = document.querySelector(".span");
const getAdvice = document.querySelector(".dice");
const toggle = document.querySelector(".loads");
let loaders = false;
async function fetchAdvice() {
  loaders = true;
  console.log({ loaders });
  loaders ? toggle.classList.add("preloader") : "";
  const response = await fetch("https://api.adviceslip.com/advice");
  const movies = await response.json();

  console.log({ movies });
  const advice = movies["slip"]["advice"];
  const advId = movies["slip"]["id"];

  loaders = "false";
  loaders ? toggle.classList.remove("preloader") : "";
  console.log("state:", loaders);
  return { advice, advId };
}

diceBtn.addEventListener("click", fetchAdvice);

getAdvice.addEventListener("click", async () => {
  dataValue = await fetchAdvice();
  console.log({ dataValue });
  idContainer.innerHTML = `${dataValue?.advId}`;
  adviceContainer.innerHTML = `${dataValue?.advice}`;
});
