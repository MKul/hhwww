function newsBoxTimer() {
    setTimeout(showNewsBox,2000);
}

function showNewsBox() {
    if(getCookie("lastNewsBoxShow")==""){
        obNewsBox = document.getElementById("news-box-1");
        obScreenDimmer = document.getElementById("screen-dimmer-1");
        obNewsBox.style.visibility = "visible";
        obScreenDimmer.style.visibility = "visible";
        obNewsBox.style.opacity = 0.9;
        obScreenDimmer.style.opacity = 0.8;
    }
}

function closeNewsBox() {
    if(getCookie("lastNewsBoxShow")==""){
        setCookie("lastNewsBoxShow","123",10*60*1000)
    }
    obNewsBox = document.getElementById("news-box-1");
    obScreenDimmer = document.getElementById("screen-dimmer-1");
    obNewsBox.style.visibility = "hidden";
    obScreenDimmer.style.opacity = 0;
    setTimeout(hideBackgroud,1000);

}

function hideBackgroud() {
obScreenDimmer = document.getElementById("screen-dimmer-1");
    obScreenDimmer.style.visibility = "hidden";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, extime_ms) {
    var d = new Date();
    d.setTime(d.getTime() + (extime_ms));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

window.onload = newsBoxTimer();