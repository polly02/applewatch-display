class ApplewatchDisplay{
    constructor() {
        setInterval(this.clock, 1000);
        setInterval(this.data)
    }
    
    clock() {
        const date = new Date(),
            hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
        document.querySelector(".wrapper .clock").innerHTML = hours + ":" + minutes + ":" + seconds;
    }
   

    data() {
        const data = new Date(),
            year = data.getFullYear()
        document.querySelector(".wrapper .data").innerHTML = "since. " + year;
    }
   
}
    
const applewatchDisplay = new ApplewatchDisplay()
