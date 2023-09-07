
localStorage.setItem("format12", "true");
document.getElementById("time").addEventListener("click", changeFormat12);
document.getElementById('time').innerHTML = getTime();
window.setInterval(function () {
    document.getElementById('time').innerHTML = getTime();
}, 1000)


function getTime() {
    const format = localStorage.getItem('format12') == "true" ? true : false;
    return new Date().toLocaleTimeString('en-US', {
        hour12: format,
    });
}
function changeFormat12() {
    const format = localStorage.getItem('format12') == "true" ? "false" : "true";
    localStorage.setItem("format12", format);
    document.getElementById('time').innerHTML = getTime();
}