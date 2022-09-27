const valS = document.querySelector(".wrapper .t .times")
const valM = document.querySelector(".wrapper .t .timem")
const valH = document.querySelector(".wrapper .t .timeh")

function changeTimes(valS) {
    valS.innerHTML++

   
    // if (valS.innerHTML === 60) {
    //     valS.innerHTML = 0

    //     return changeTimes()
    // }
}
setInterval(changeTimes, 1000, valS)

function changeTimem(valM) {
    valM.innerHTML++
}
setInterval(changeTimem, 60000, valM)

function changeTimeh(valH) {
    valH.innerHTML++
}
setInterval(changeTimeh, 3600000, valH)


/* if (valS.innerHTML == 60) {
        valS.innerHTML = 0
    
    }
    if (valS.innerHTML <10){
        valS.innerHTML = '0' + valS.innerHTML++
    }
    console.log(valS);*/