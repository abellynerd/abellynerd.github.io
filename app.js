const procv = document.getElementById("procv") ;
const acacv = document.getElementById("acacv") ;
const dprocv = document.getElementById("procv-display") ;
const dacacv = document.getElementById("acacv-display") ;

procv.addEventListener("click", function(event) {
    dprocv.style.display = "block" ;
    dacacv.style.display = "none" ;
    procv.classList.add("cv-toggled") ;
    procv.classList.remove("cv-toggle") ;
    acacv.classList.remove("cv-toggled") ;
    acacv.classList.add("cv-toggle") ;
});

acacv.addEventListener("click", function(event) {
    dacacv.style.display = "block" ;
    dprocv.style.display = "none" ;
    acacv.classList.add("cv-toggled") ;
    acacv.classList.remove("cv-toggle") ;
    procv.classList.remove("cv-toggled") ;
    procv.classList.add("cv-toggle") ;
});