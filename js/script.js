var hour = 6; 
var min = 0;  

function upHourClick(id)
{ 
    ++hour; 
    if (hour >= 24) {
        hour = 0;
    }
    if (hour < 10) {
        id.innerHTML = "0" + String(hour);
    }
    else {
        id.innerHTML = String(hour);
    }
}

function upMinClick(id) { 
    ++min; 
    if (min >= 59) {
        min = 0;
    }
    if (min < 10) {
        id.innerHTML = "0" + String(min);
    }
    else {
        id.innerHTML = String(min);
    }
}

function downHourClick(id) {
    --hour;
    if (hour < 0) {
        hour = 23;
    }
    if (hour < 10) {
        id.innerHTML = "0" + String(hour);
    }
    else {
        id.innerHTML = String(hour);
    }
}

function downMinClick(id) {
    --min;
    if (min < 0) {
        min = 59;
    }
    if (min < 10) {
        id.innerHTML = "0" + String(min);
    }
    else {
        id.innerHTML = String(min);
    }
}

var temp = 23;
function upTempClick(id){
    id.innerHTML = temp ++;
    if (temp > 30){
        temp = 10;
    }
}
function downTempClick(id){
    id.innerHTML = temp --;
    if (temp < 10){
        temp = 30;
    }
}

var bright = 80;
function upBrightClick(id){
    console.log(id);
    id.innerHTML = bright += 10;
    if (bright > 90){
        bright = 0;
    }
}
function downBrightClick(id){
    id.innerHTML = bright -= 10;
    if (bright < 20){
        bright = 110;
    }
}

$(document).ready(function(){
    
    $(".drop-down").click(function(){
        $(this).parents('.box').find('.device-settings').toggle(100);
    });
    
    $(".pop-up").click(function(){
        $(".modal").show(30);
    });
    
    $(".add-schedule").click(function(){
        $(".modal").show(30);
    });
    
    $(".modal-close").click(function(){
        $(".modal").hide(30);
    });
    $(".ok").click(function(){
        $(".modal").hide(30);
    });
    $(".schedule-pin").click(function(){
        $(".schedule-pin").toggleClass("schedule-pin-active");
    });
});