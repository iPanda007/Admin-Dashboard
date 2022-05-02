$(".sidebar-btn").click(function (){
    $(".sidebar").animate({marginLeft:0});
});
$(".hide-sidebar-btn").click(function (){
    $(".sidebar").animate({marginLeft: "-100%"});
});
function go(url) {
setTimeout(function (){
    location.href =`${url}`;
},500);
}
$(function () {
    $('[data-toggle="popover"]').popover();
});

$(".maximize-btn").click(function () {
    let current =  $(this).closest(".card")
  current.toggleClass("full-screen-card")

    if (current.hasClass("full-screen-card")){
         $(this).html(`<i class="feather-minimize-2 item-icon"></i>`);
    }else {
   $(this).html(`<i class="feather-maximize-2 item-icon"></i>`);
    }
});



let screenHeight = $(window).height();
let currentMenuHeight= $(".nav-menu .active").offset().top;

if (currentMenuHeight > screenHeight*0.8){
 $('.sidebar').animate({
     scrollTop:currentMenuHeight-150
 },1000)
}
// var myElement = document.getElementById('scroll');
// new SimpleBar(myElement, { autoHide: true,
//
// });
// let myScroll = document.getElementById('sidebar');
// new SimpleBar(myScroll,{ autoHide: true,
//
// })
let count = 0;
let modeIcon = document.getElementById("modeIcon")
function changeMode() {
    if (count==0){
        count =1
        document.body.classList="light-body"
        modeIcon.innerHTML =`<span>  <i class="feather-cloud-lightning   "></i> Dark Mode </span>`

    }else {
        count=0
        document.body.classList =""
        modeIcon.innerHTML = `<span>  <i class="feather-cloud-lightning   "></i> Light Mode</span>`


    }

};