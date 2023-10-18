const button = document.getElementById("roll-button");
let dice = document.querySelector(".dice");

async function roll() {
  const promise = await fetch("https://api.random.org/json-rpc/4/invoke", {
    method: "POST",
    body: JSON.stringify({
      id: 42,
      jsonrpc: "2.0",
      method: "generateIntegers",
      params: {
        apiKey: "2b392703-9901-4918-89a2-f8f0d443cccf",
        n: 1,
        min: 1,
        max: 6,
      },
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const rollInterger = await promise.json();
  console.log(rollInterger.result.random.data[0]);
  return rollInterger.result.random.data[0];
}

function makeResult(rollInterger) {
  console.log(rollInterger);
  switch (rollInterger) {
    case 1:
      dice.classList.add("one");
      break;
    case 2:
      dice.classList.add("two");
      break;
    case 3:
      dice.classList.add("three");
      break;
    case 4:
      dice.classList.add("four");
      break;
    case 5:
      dice.classList.add("five");
      break;
    case 6:
      dice.classList.add("six");
      break;

    default:
      console.log("erreur");
      break;
  }
}

button.addEventListener("click", (event) => {
  dice.classList.remove("unactive");
  makeResult(roll());
});
dice.className.add("unactive");
