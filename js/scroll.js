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
    $('#' + id).animate({opacity:1});
}
window.onscroll = () => {
    // Current scroll-Y value (px) 
    currentY = window.scrollY;
    if ((currentY > getEleY("call-to-action") - viewHeight) && activatedCallToAction == false) {
        activatedCallToAction = true;
        showEle('call-to-action');
        setTimeout(() => {showEle('register')}, 4000);
        for (counter in counters) {
            startCountRoll(counter);
        }
    }
    
};

