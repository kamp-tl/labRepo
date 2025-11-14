let buttonEl = document.getElementById("button")
let textEl = document.getElementById("text")

buttonEl.addEventListener("click", () => {
    let current = getComputedStyle(textEl).color; 
if (current === "rgb(255, 0, 0)"){textEl.style.color="blue"}
else if (current === "rgb(0, 0, 255)"){textEl.style.color="green"}
else if (current === "rgb(0, 128, 0)"){textEl.style.color="red"}
}
)