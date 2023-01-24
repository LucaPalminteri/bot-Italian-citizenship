let bookCitizenshipBtn = document.getElementsByTagName("a")[24]

// let date = new Date()
// const {log, clear} = console
// setInterval(()=> {
//     clear()
//     date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     log(`${hours}:${minutes}:${seconds}`)
//     if(hours == 20 && minutes == 0 && seconds == 0) {
//         bookCitizenshipBtn.click()
//     }
// },1000)

//#################################################################

const URL = 'https://prenotami.esteri.it/Services/Booking/554'

let date = new Date()
const {log, clear} = console
setInterval(()=> {
    clear()
    date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    log(`${hours}:${minutes}:${seconds}`)
    if(hours == 20 && minutes == 0 && seconds == 0) {
        window.location = URL
    }
},1000)