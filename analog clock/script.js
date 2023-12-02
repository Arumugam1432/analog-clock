let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes(); // Corrected method name
    let ss = date.getSeconds(); // Corrected method name
    
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`; // Corrected template literal
    min.style.transform = `rotate(${mRotation}deg)`; // Corrected template literal
    sec.style.transform = `rotate(${sRotation}deg)`; // Corrected template literal
}

setInterval(displayTime, 1000);
