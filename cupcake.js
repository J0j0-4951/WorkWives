
//changes cupcake based on the selected value
function changeImage() {

const selectedVaule = document.getElementById('CupcakeFlavor').value;
const images = document.getElementById('cupcakeImage');

   if (selectedVaule === 'EmptyLiner')
    {cupcakeImage.src = 'images/EmptyLiner.PNG';}

     else if (selectedVaule === 'MediumRareCupcake')

        {cupcakeImage.src = 'images/MediumRareCupcake.PNG';}

            else if (selectedVaule === 'ChocoCupcake')
                {cupcakeImage.src = 'images/ChocoCupcake.PNG';  }

            else if (selectedVaule === 'VanillaCupcake')

        {cupcakeImage.src = 'images/VanillaCupcake.PNG';}

   
}


//buttons
//frosting
function addPinkFrosting(color) {
    const frostingImage = document.getElementById("pinkFrostingImage");

    if (color === 'PinkFrosting') {
        frostingImage.src = 'images/PinkFrosting.PNG';

        frostingImage.style.display = 'block';
      
    }
}

    function addBlueFrosting(color) {
    const frostingImage = document.getElementById("blueFrostingImage");

    if (color === 'BlueFrosting') {
        frostingImage.src = 'images/BlueFrosting.PNG';
    }
        frostingImage.style.display = 'block';
    }


    function addOrangeFrosting(color) {
    const frostingImage = document.getElementById("orangeFrostingImage");

    if (color === 'OrangeFrosting') {
        frostingImage.src = 'images/OrangeFrosting.PNG';
    }
        frostingImage.style.display = 'block';
    }
//toppings
    function addBlueberries(color) {
  const toppingImage = document.getElementById("blueberry");

    if (color === 'Blueberries') {
        toppingImage.src = 'images/Blueberries.PNG';
    }
        toppingImage.style.display = 'block';
    }


     function addCherryWaffer(color) {

          const toppingImage = document.getElementById("cherrywaffer");

    if (color === 'CherryWaffer') {
        toppingImage.src = 'images/CherryWaffer.PNG';
    }
        toppingImage.style.display = 'block';
    }
        
     function addChocolate2(color) {

          const toppingImage = document.getElementById("chocolate");

    if (color === 'Chocolate2') {
        toppingImage.src = 'images/Chocolate2.PNG';
    }
       toppingImage.style.display = 'block';
    }
        
    