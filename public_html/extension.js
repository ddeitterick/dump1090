// -----------------------------------------------------
//
// This file is so users can modify how the page acts
// without diving to deep in the code.  This way we can
// also try out or hold custom code for ourselves and
// not check it into the repo.
//
// There is a div id'ed as plane_extension for use with
// this javascript file.
// -----------------------------------------------------

function extendedInitalize() {
	// Write your initalization here
	// Gets called just before the 1-sec function call loop is setup
        displayTime();
}

function extendedPulse() {
	// This will get called every second after all the main functions
}

function displayTime() {
        time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var UtcHours = time.getUTCHours();
        if (hours < 12) {
            timeOfDay = "AM";
        } else {
            timeOfDay = "PM";
        }
        if (hours > 12) {
            twelveHours = hours - 12;
        } else {
            twelveHours = hours;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        var html = '';
        html += '<table width="100%">';
        html += '<tr><td>Local Time: ' + hours + ":" + minutes + ":" + seconds + " / " + twelveHours + ":" + minutes + ":" + seconds + " " + " " + timeOfDay;
        html += '</td></tr>';
        html += '<tr><td>UTC Time: ' + UtcHours + ":" + minutes + ":" + seconds;
        html += '</td></tr>';
        html += '</table>';
        document.getElementById('time').innerHTML = html;
        setTimeout('displayTime()',1000);
}