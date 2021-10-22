
const seconds = document.querySelector(".sec")
const minutes = document.querySelector(".minutes")
const hours = document.querySelector(".hours")

function tiktak() {
    let getSec = new Date().getSeconds();
    let getMinute = new Date().getMinutes();
    let getHour = new Date().getHours();

    seconds.style.transform = `rotate(${180 + (getSec * 6)}deg)`
    minutes.style.transform = `rotate(${180 + (getMinute * 6)}deg)`
    hours.style.transform = `rotate(${180 + (getHour * 30)}deg)`

    console.log(`rotate(${180 + (getHour * 30)}deg))`)
}

setInterval(tiktak, 1000)