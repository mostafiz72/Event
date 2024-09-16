function changeBackground(){
    document.body.style.backgroundColor = "green";
}

// step:-02

const makeGreenBg = document.getElementById("makeGreen");

makeGreenBg.addEventListener("click", function makegreen(){
    document.body.style.backgroundColor = "tomato";
});

document.getElementById("yellow").addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
})