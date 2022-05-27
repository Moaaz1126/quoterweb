function load() {
    let img = document.querySelector(".random")
    RunAnm()
    setTimeout(Request, 400);
    setTimeout(SetEle, 800);
    setTimeout(CloseAnm, 1000)
    img.style.marginTop = "0px";
}
function update() {
    Request()
    RunAnm()
    setTimeout(SetEle, 1500);
    setTimeout(CloseAnm, 2000)
}
let jsDate = ""
function Request() {
    let myRequest = new XMLHttpRequest() 
    myRequest.open("GET", "https://api.adviceslip.com/advice");
    myRequest.send();
    myRequest.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) { 
            jsDate = JSON.parse(this.responseText);
        }
    }
}
function SetEle() {
    let span = document.querySelector("span")
    let p = document.querySelector("p")
    span.textContent = `ADVICE #${jsDate.slip.id}`
    p.textContent = jsDate.slip.advice
}
function RunAnm() {
    let img = document.querySelector(".random")
    img.style.animation = "random 1s alternate infinite"
}
function CloseAnm() {
    let img = document.querySelector(".random")
    img.style.animation = ""
}