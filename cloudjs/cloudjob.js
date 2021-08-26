const chooseJobType = document.querySelector("[data-role='job-type']");
chooseJobType.addEventListener("click", function(e){
    e.preventDefault();
    const sibling = this.nextElementSibling;
    sibling.classList.toggle("active");
})
const filterBtn = document.querySelector(".filter");
const fltr__ct = document.querySelector(".fltr__ct");
const fltr__ct_bfr = document.querySelector(".fltr__ct_bfr");
filterBtn.addEventListener("click",function(){
    fltr__ct.classList.toggle("active");
    fltr__ct_bfr.classList.toggle("active");
});