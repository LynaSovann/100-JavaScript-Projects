const containerElement = document.getElementById("container");

containerElement.addEventListener("mousemove", (e) => {
    const xPos = e.offsetX;
    const yPos = e.offsetY;

    const imgEl = document.createElement("img");
    imgEl.src = "./img/star.png";
    imgEl.style.top = yPos + "px";
    imgEl.style.left = xPos + "px";
    containerElement.appendChild(imgEl);

    const size = Math.random()*100;
    imgEl.style.width = size + "px";
    imgEl.style.height = size + "px";

    setTimeout(() => {
        imgEl.remove();
    }, 6000);
});
