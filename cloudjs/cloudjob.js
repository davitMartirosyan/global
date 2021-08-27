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
// jobs and freelance tabs
const jbType = document.querySelector(".jb__typ");
const types = jbType.querySelectorAll("li a[data-role]");
const sbl = Array.prototype.slice.call(types);

//jobs and freelance content
const jbFlCt = document.querySelector(".jb_fl_ct");
const ct = jbFlCt.querySelectorAll("div[data-role]");
const ctSbl = Array.prototype.slice.call(ct);

types[1].classList.add("active");

types.forEach(type => {

    if(type.classList.contains("active")){
        ct.forEach(cnt => {
            if(cnt.dataset.role == type.dataset.role){
                cnt.classList.add("active");
            }
        })
        
    }

    type.addEventListener("click", function(e){
        e.preventDefault();
        type.classList.add("active");

        ct.forEach(cnt => {
            if(cnt.dataset.role == type.dataset.role){
                cnt.classList.add("active");
                for(let j=0;j<ctSbl.length;j++){
                    if(ctSbl[j] !== cnt && ctSbl[j].classList.contains("active")){
                        ctSbl[j].classList.remove("active");
                    }
                }
            }
        })

        for(let i=0; i<sbl.length; i++){
            if(sbl[i] !== type && sbl[i].classList.contains("active")){
                sbl[i].classList.remove("active");
            }
        }
        
    })
})