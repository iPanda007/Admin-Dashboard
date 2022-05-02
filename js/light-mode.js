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