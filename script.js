var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


const downloadBtn = document.querySelector(".download-btn");
const fileLink = "file:///C:/Users/priyadarshini%20sahoo/Desktop/internship/portfolio/images/CV_2024071521411634.pdf";
function opentab(tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const initTimer = () =>{
    downloadBtn.innerHTML = "your file downloaded";
    location.href = fileLink;

}
downloadBtn.addEventListener("click". initTimer);