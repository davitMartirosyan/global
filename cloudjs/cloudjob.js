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
const jbType = document.querySelector(".jb__typ");
const types = jbType.querySelectorAll("li a[data-role]");
const sbl = Array.prototype.slice.call(types);

types.forEach(type => {
    type.addEventListener("click", function(e){
        e.preventDefault();
        type.classList.add("active");
        for(let i=0; i<sbl.length; i++){
            if(sbl[i] !== type && sbl[i].classList.contains("active")){
                sbl[i].classList.remove("active");
                console.log(sbl[i])
            }
        }
        
    })
})