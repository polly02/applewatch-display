// const valS = document.querySelector(".wrapper .clock .times")
// const valM = document.querySelector(".wrapper .clock .timem")
// const valH = document.querySelector(".wrapper .clock .timeh")

// function changeTimes(valS, valM, valH) {
//     valS.innerHTML++
//     if (valS.innerHTML == 60) { //c === не работает
//         valS.innerHTML = 0
//         valM.innerHTML++
//     }

//     if(valM.innerHTML == 60){
//         valM.innerHTML = 0
//         valH.innerHTML++
//     }

//     if(valH.innerHTML == 24){
//         valH.innerHTML = 0
//     }

//     if(valS.innerHTML < 10){
//         valS.innerHTML = "0" + valS.innerHTML++
//     }

//     if(valM.innerHTML < 10){
//         valM.innerHTML = "0" + valM.innerHTML++
//     }

//     if(valH.innerHTML < 10){
//         valH.innerHTML = "0" + valH.innerHTML++
//     }
// }
// setInterval(changeTimes, 1000, valS, valM, valH)

function clock() {
    const date = new Date(),
        hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    document.querySelector(".wrapper .clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(clock, 1000);

function data() {
    const data = new Date(),
        year = data.getFullYear()
    document.querySelector(".wrapper .data").innerHTML = "since. " + year;
}
setInterval(data)