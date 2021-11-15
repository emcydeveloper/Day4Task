// ***************************************************************************************
// comparetwoJSON
// comparetwoJSON();
// function comparetwoJSON() {
  var obj1 = { name: "Person 1", age: 5 };
  var obj2 = { age: 5, name: "Person 1" };

  let outputDiv = document.createElement("div");
  let getMainDiv = document.querySelector("#mainContainer");
  getMainDiv.append(outputDiv);

  keys1 = Object.keys(obj1);
  keys2 = Object.keys(obj2);
  output =
    keys1.length === keys2.length &&
    Object.keys(obj1).every((key) => obj1[key] == obj2[key]);
  let code = document.createElement("p");
  code.innerHTML = `The source code will be: <br> keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]); <br> With an Output as: ${output}`;
  outputDiv.appendChild(code);
// }
// ***************************************************************************************

