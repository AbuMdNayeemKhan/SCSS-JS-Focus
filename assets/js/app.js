let focus = document.getElementById("focus");
let focusHalfWidth = focus.offsetWidth/2;

document.onmousemove = function(i){
    focus.style.left = i.pageX - focusHalfWidth + "px";
    focus.style.top = i.pageY - focusHalfWidth + "px";
}