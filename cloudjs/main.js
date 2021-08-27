let partnersScrollContent = document.querySelector(".partners-Y");
let partners = partnersScrollContent.querySelectorAll(".partner");
let partnersArr = []
partners.forEach((partner,index) =>{partnersArr[index] = partner;});
let counter = partnersArr.length;
partnersScrollContent.style.width = counter * 100+"px";
let contactForm = document.getElementById("contactUs");
contactForm.addEventListener("submit", (evt) => {
    evt.preventDefault(0)    
});
let mobileMenu = document.querySelector(".mobile-menuBtn");
mobileMenu.addEventListener("click", ()=>{
    let menu = document.querySelector(".mobile__menu");

    menu.classList.toggle("active");
})
const playVideoBtn = document.querySelector(".play");
const containerNarrow = document.querySelector('.container-narrow');
playVideoBtn.addEventListener("click",function(){
    containerNarrow.style.display = "flex";
    document.body.style.overflow = "hidden";
    const link = "https://www.youtube.com/embed/0S5eA4Im4O8";
    containerNarrow.innerHTML = ` <iframe width="1280" height="720" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    containerNarrow.addEventListener("click",(e) =>{
        e.target.style.display = "none";
        e.target.innerHTML = "";
        document.body.style.overflow = "visible";
    })
});
let serviceControl = document.querySelector(".service-control");
let serviceControlClientRect = serviceControl.getBoundingClientRect();
let scrolable = serviceControl.querySelector(".scrolable");
let scrolableClientRect = scrolable.getBoundingClientRect();
let sliderBtns = document.querySelectorAll(".sd-btn");

let type;
let offset = 0;
sliderBtns.forEach(sliderBtn  => {
    if(serviceControlClientRect.width < scrolableClientRect.width){
    sliderBtn.addEventListener("click",function(){
        if(this.dataset.role === "r"){
            type = "r";
            scrolableClientRect = scrolable.getBoundingClientRect();
            if(scrolableClientRect.right > serviceControlClientRect.right){
                offset += 382;
                scrolable.style.transform = `translateX( ${-offset}px)`;
                console.log(scrolableClientRect.right)
                console.log(serviceControlClientRect.right)
            }else if(scrolableClientRect.right <= serviceControlClientRect.right){
                scrolableClientRect = scrolable.getBoundingClientRect();
                offset = 0;
                scrolable.style.transform = `translateX( ${offset}px)`;
            }
        }else{
            type = "l";
            if(offset > 0){
                offset = offset - 382;
                scrolable.style.transform = `translateX( ${-offset}px)`;
            }
        }
        
    })
    }else{
        console.log("do something");
    }
})


