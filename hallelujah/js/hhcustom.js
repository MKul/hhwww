function newsBoxTimer() {
    setTimeout(showNewsBox,2000);
}

function showNewsBox() {
    obNewsBox = document.getElementById("news-box-1");
    obNewsBox.style.visibility = "visible";
}

function closeNewsBox() {
    obNewsBox = document.getElementById("news-box-1");
    obNewsBox.style.visibility = "hidden";
}

window.onload = newsBoxTimer();