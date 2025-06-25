// counts scoops
let scoopCount = 0;
//counts toppings when i eventually add them
// let toppingCount = 0;

//adds scoop to cone

function addScoop(Strawberry.png) {
    const containter = document.getElementById("icecreamContainer");
    const scoop = document.createElement("img");
    scoop.src = 'Images/${Srawberry.png}'; //image source set
    scoop.classList.add("scoop");
//makes scoop go higher than the last one i think
    scoop.style.bottom = '${100 + scoopCount * 40}px';
//exiles scoop into different container gasp
    containter.appendChild(scoop);
    //increase scoop count
    scoopCount++;
}

//toppings when i get to it
