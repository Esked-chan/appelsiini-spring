// The number of drops we want to have
var nbDrop = 600;

function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}
function createRain() {
    for (i = 1; i < nbDrop; i++) {
        var dropLeft = randRange(0, 2600); // change the range if you want for the rain to spread to full screen
        var dropTop = randRange(-1000, 1400);

        $('.rain').append('<div class="drop" id="drop' + i + '"></div>'); // appending the rain drops to the empty rain section in html-file
        $('#drop'+ i).css('left', dropLeft);
        $('#drop'+ i).css('top', dropTop);
    }
}

$(document).ready(function() {
    createRain(); // start the rain animation when the document is loaded
});