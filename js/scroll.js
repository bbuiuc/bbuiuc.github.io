// Viewport height
let viewHeight = window.innerHeight;

//record state of #call-to-action
let activatedCallToAction = false;
let currentY = 0;
function updateViewHeight() {
    viewHeight = window.innerHeight;
}
function getEleY(id) {
    return document.getElementById(id).offsetTop;
}
function showEle(id) {
    console.log(id);
    $('#'+id).fadeIn(2000);
}
window.onscroll = () => {
    // Current scroll-Y value (px) 
    currentY = window.scrollY;
    if ((currentY > getEleY("call-to-action") - viewHeight) && activatedCallToAction == false) {
        activatedCallToAction = true;
        $('#call-to-action').animate({opacity:1});
        for (counter in counters) {
            startCountRoll(counter);
        }
    }
    
};

