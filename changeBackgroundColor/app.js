const button = document.querySelector(".btn");

button.addEventListener("click", changeBackgrounColor);
let isStuff = false;

function changeBackgrounColor(e) {
    e.preventDefault();

    let color = [["#C36A2D", "#FDA65D", "#D1E8E4", "#A2D2FF", "#FEE440", "#082032"], ["black", "green", "grey", "purple", "red", "silver"]]

    let randomColor = Math.floor(Math.random() * color[0].length);
    let randomColor2 = Math.floor(Math.random() * color[1].length);
    document.body.style.backgroundColor = isStuff == false ? color[0][randomColor] : color[1][randomColor2]
    isStuff = !isStuff
}