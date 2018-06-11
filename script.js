var aantalOgen = 1;
var aantalOgenOld = 0;
var number = 0;
var repeatCount = 1;

function randomBetween(low, high) {
    number = low + Math.floor(Math.random() * (high - low + 1));
    return number;
}

function changeFile(id, source) {
    document.getElementById(id).src = source;
}

function readFromHTML(id) {
    return document.getElementById(id).innerHTML;
}

function writeToHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function dobbel() {
    aantalOgen = randomBetween(1, 6);
    if (aantalOgen === aantalOgenOld) {
        repeatCount++;
        writeToHTML('repeatCount', repeatCount + "x");
    }
    else {
        if(readFromHTML('repeatCount') !== 1){
            repeatCount = 1;
            writeToHTML('repeatCount', repeatCount + "x");
        }
        changeFile('dobbelsteen', "images/" + aantalOgen + ".png");
        aantalOgenOld = aantalOgen;
    }
}