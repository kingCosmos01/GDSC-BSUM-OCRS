
const popUpBox = document.getElementById("popUpBox");
const closeBtn = document.getElementById("closeBtn");

setInterval(function(){
    popUpBox.style.display = show();
}, 9000);

function show() {
    return "block";
}

setTimeout(function(){
    popUpBox.style.display = hide();
}, 9000);

function hide()
{
    return "none";
}

// close popUpBox
closeBtn.addEventListener('click', ()=>{
    popUpBox.style.display = hide();
});