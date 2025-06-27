function makeIceCream() { //makeicecream button function, 
  const container = document.getElementById("containerType").value; /*Picking cone*/ 
  const flavor = document.getElementById("flavor").value; //pick flavor function
  const toppingCheckboxes = document.querySelectorAll("input[type='checkbox']"); //user input for toppings
  const toppings = [];

  toppingCheckboxes.forEach(cb => { //when each box is checked, there is an output of a topping
    if (cb.checked) {
      toppings.push(cb.value);
    }
  });

  const visual = document.getElementById("iceCreamVisual"); /*An outpu of a visual when an icecream visual is selected*/ 
  visual.innerHTML = "";

  // Shows cones, using the folder images and the items under the choose cones
  const containerImg = document.createElement("img");
  containerImg.src = `ImagesJ/${container}.png`;
  containerImg.alt = container;
  visual.appendChild(containerImg);

  // Shows flavors, using the folder images and the items under the choose flavors
  const flavorImg = document.createElement("img");
  flavorImg.src = `ImagesJ/${flavor}.png`;
  flavorImg.alt = flavor;
  visual.appendChild(flavorImg);

  // Shows toppings, using the folder images and the items under the choose toppings.
  toppings.forEach(t => {
    const toppingImg = document.createElement("img");
    toppingImg.src = `ImagesJ/${t}.png`;
    toppingImg.alt = t;
    visual.appendChild(toppingImg);
  });
}

// Attach event listeners only when DOM is loaded
//makes sure that make ice cream button works
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("makeBtn").addEventListener("click", makeIceCream);
  
// makes sure the the reset button works
  document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("iceCreamVisual").innerHTML = "";
    document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
  });
});
