"use strict";
/*    
      Author: Vanlal Vena
      Date: 04/17/2024

      Filename: vehicle.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes
make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}
// Event handler to modify the content of the Trim selection list
// when the Model selection list changes
model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

function showAll(selectList) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
      let option = options[i];
      option.style.display = "block";
   }
}

function filterSelect(selectList, category) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
      let option = options[i];
      if (option.className === category) {
          option.style.display = "block";
      } else {
          option.style.display = "none";
      }
   }
}
// Add an onclick event handler for the selectVehicle button
selectVehicle.onclick = function () {
    let selectedMake = make.value;
    let selectedModel = model.value;
    let selectedTrim = trim.value;
   let vehicleText = selectedMake + " " + selectedModel + " " + selectedTrim;
   
    vehicle.textContent = vehicleText;
  };

/*
// Add an onclick event handler for the selectVehicle button
selectVehicle.onclick = function() {
    
    let make = document.getElementById("makeSelect").value;
    let model = document.getElementById("modelSelect").value;
    let trim = document.getElementById("trimSelect").value;
    let vehicleText = make + " " + model + " " + trim;
    document.getElementById("vehicle").textContent = vehicleText;
   };
    //vehicle.textContent = vehicleText;
*/