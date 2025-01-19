let li = [...document.querySelectorAll("li")];
let div = [...document.querySelectorAll("div")];
let idDivA = document.getElementById("A");
let idDivAA = document.getElementById("AA");
let idDivAAA = document.getElementById("AAA");

li.forEach (function(liAll) {
    liAll.onclick = function() {
        li.forEach(function(liALL2) {
            liALL2.classList.remove ("tab-active");
        });
        div.forEach(function(divAll2) {
            divAll2.classList.remove ("active");
        });
        this.classList.add ("tab-active");
        
        if (this.classList.contains("tab-AAA")) {
            idDivAAA.classList.add("active");
        }
        if (this.classList.contains("tab-AA")) {
            idDivAA.classList.add("active");
        }
        if (this.classList.contains("tab-A")) {
            idDivA.classList.add("active");
        }
    }
});