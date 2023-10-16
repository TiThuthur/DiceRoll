function roll() {
  console.log(
    fetch("https://api.random.org/json-rpc/4/invoke)", {
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
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  );
}

roll();
