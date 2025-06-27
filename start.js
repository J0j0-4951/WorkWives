function chooseOption(){
    startButton.style.top = "-100%";
    startingBackground.style.top = "0";
};

function goingBack(){
    startButton.style.top = "0";
    startingBackground.style.top ="200%";
}

document.getElementById('actualStartButton').addEventListener('click',chooseOption);
document.getElementById('startingBackground').addEventListener('click', goingBack);