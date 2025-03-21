let sfx = new Audio('buttonclicked.mp3')
let devmenucookie = 'alert("change your cookie clicker name to <asaysopensesame>, it doesnt have to be <a> specifically")'
let cookieclickerset = 'Game.cookies = Number(prompt("How many cookeis"))'
let favichangescript = 'document.querySelector("head > link:nth-child(4)").href = prompt("Favicon, copy image url/address")'
let titlechanger = 'document.querySelector("head > title").innertext = prompt("Title?")'
let invinc = "Runner.prototype.gameOver = function(){console.log('Death avoided (the count is inacurate)')}"
let setSpeed = "Runner.instance_.setSpeed(Number(prompt('What speed')))"
function btnclicked(whatbtn) {
    sfx.play()
    console.log("Copied" + whatbtn)
    if (whatbtn === "speedsetterr") {
        navigator.clipboard.writeText(setSpeed)
    }
    if (whatbtn === "invinc") {
        navigator.clipboard.writeText(invinc)
    }
    if (whatbtn === "titlechanger") {
        navigator.clipboard.writeText(titlechanger)
    }
    if (whatbtn === "favichangerrrr") {
        navigator.clipboard.writeText(favichangescript)
    }
    if (whatbtn === "cookieclicker") {
        navigator.clipboard.writeText(cookieclickerset)
    }
    if (whatbtn === "cookieclickerdevmenu") {
        navigator.clipboard.writeText(devmenucookie)
    }
}