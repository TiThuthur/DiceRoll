const button = document.getElementById("getRandomInteger-button");
let dice = document.querySelector(".dice");

const url = "https://api.random.org/json-rpc/4/invoke";

const message = {
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
};

// const getRandomInteger = async () => {
//   let response = await fetch(url, message).then();
//   let jsonResult = await response.json();
//   return jsonResult;
// };
// async function getRandomInteger() {
//   return await fetch("https://api.random.org/json-rpc/4/invoke", {
//     method: "POST",
//     body: JSON.stringify({
//       id: 42,
//       jsonrpc: "2.0",
//       method: "generateIntegers",
//       params: {
//         apiKey: "2b392703-9901-4918-89a2-f8f0d443cccf",
//         n: 1,
//         min: 1,
//         max: 6,
//       },
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//   const reponse = await reponse.json()
//   console.log(response)
//}

function makeResult(rollInteger) {
  switch (rollInteger) {
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
      console.log("erreur avec rollInteger: " + rollInteger);
      break;
  }
}

button.addEventListener("click", (event) => {
  dice.classList.remove("unactive");
  const randomInteger = fetch(url, message).then((response) => {
    return response.json();
  });
  console.log(randomInteger.PromiseResult);
  // makeResult(randomInteger);
});
let unactive = setTimeout(() => {
  dice.classList.add("unactive");
  clearTimeout(unactive);
}, 4000);
