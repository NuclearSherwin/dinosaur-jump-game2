var dinosaur = document.getElementById("dinosaur");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if (dinosaur.classList == "animate") { return }
    dinosaur.classList.add("animate");
    setTimeout(function() {
        dinosaur.classList.remove("animate");
    }, 900)
}

var checkDead = setInterval(function() {
    let dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 30 && blockLeft > -30 && dinosaurTop >= 324) {
        block.style.animation = "none";
        alert("Game over. Your score is: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter / 100);
    }
}, 10)