const colors = ["green", "red", "blue", "rgba(133,122,200)", "#f1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumnber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumnber() {
    return Math.floor(Math.random() * colors.length);
}
