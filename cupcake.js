
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

function addImage() {

const selectedVaule = document.getElementById('PinkFrosting').value;
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