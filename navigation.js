function openNavigationBar(){
    navigationChoices.style.left = "0px";
    navigationOverlay.style.display = "block";
};

function closeNavigationBar(){
    navigationChoices.style.left = "-250px";
    navigationOverlay.style.display = "none";
}

document.getElementById('openNavigation').addEventListener('click',openNavigationBar);
document.getElementById('navigationOverlay').addEventListener('click',closeNavigationBar);