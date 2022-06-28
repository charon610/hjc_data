let car = {
    name: "tesla",
    color: ["red", "blue", "green"],
  };
  
  for (let key in car) {
    console.log(key);
  }
  
  console.log("enumerable false");
  Object.defineProperty(car, "name", {
    value: "tesla upgrade",
    enumerable: false,
  });
  
  for (let key in car) {
    console.log(key);
  }