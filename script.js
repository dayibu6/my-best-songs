let box = document.getElementById("box");
let pos = 0;
let direction = 1;

function animate() {
    if (pos > 300 || pos < 0) direction *= -1;
    pos += direction * 2;
    box.style.left = pos + "px";
    requestAnimationFrame(animate);
}

animate();
