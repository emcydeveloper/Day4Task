// ***************************************************************************************
// Creating HTTP request and collecting data from API

let getMainDivAPI = document.querySelector("#mainContainerAPI")
let createMainDiv = document.createElement("div");
let taskHeading = document.createElement("h1");
taskHeading.innerHTML = "Creating HTTP request and collecting Coutry name and its flag from API"
taskHeading.style.textAlign = "center";
createMainDiv.style.backgroundColor = "aqua";
getMainDivAPI.append(createMainDiv);
createMainDiv.appendChild(taskHeading);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.com/v2/all", false);
xhttp.send(null);
let getAPIData = JSON.parse(xhttp.responseText);

//   Loop to get flag link
for (data in getAPIData) {

  let flagLink = getAPIData[data].flag;
  let countryName = getAPIData[data].name;

//   console.log(flagLink);
let createImg = document.createElement("img");
let createBreak = document.createElement("br");
let createHeading = document.createElement("h3");
createHeading.style.textAlign = "center";
createHeading.style.marginBottom = "0";

createImg.setAttribute("src",flagLink);
createImg.style.display= "block";
createImg.style.marginLeft = "auto";
createImg.style.marginRight = "auto";
createImg.style.width = "50%";

createHeading.innerText = countryName;
// display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width: 50%;
createMainDiv.appendChild(createHeading);
createMainDiv.appendChild(createImg);
createMainDiv.appendChild(createBreak);
}
