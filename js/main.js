var i = 1;
// document.getElementById("btnClick").onclick = function () {
    

// };
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var nav = document.getElementById("myNav");
    nav.classList.toggle("dark-mode");
    var navlink = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navlink.length; i++) {
        navlink[i].classList.toggle("dark-mode");
        
    }
    var welcome = document.getElementById("welcome");
    welcome.classList.toggle("dark-mode");
    
    var welcomeChild = document.querySelectorAll("h3.feature-titel");
    for (let i = 0; i < welcomeChild.length; i++) {
        welcomeChild[i].classList.toggle("dark-mode");
    }

    var grids = document.getElementById("grids");
    grids.classList.toggle("dark-mode2");

    var grids_item = document.querySelectorAll(".content-main-top");
    for (let i = 0; i < grids_item.length; i++) {
        grids_item[i].classList.toggle("dark-mode2");
        
    }
    var grids_item2 = document.querySelectorAll(".content-main-top li");
    for (let i = 0; i < grids_item2.length; i++) {
        grids_item2[i].classList.toggle("dark-mode");
        
    }

    var grids_item3 = document.querySelectorAll(".content-main-top h4 a");
    for (let i = 0; i < grids_item3.length; i++) {
        grids_item3[i].classList.toggle("dark-mode");
        
    }

    var stats = document.getElementById("stats");
    stats.classList.toggle("dark-mode");

    var stats_counter = document.querySelectorAll(".counter span,.counter p");
    for (let i = 0; i < stats_counter.length; i++) {
        stats_counter[i].classList.toggle("dark-mode");
        
    }

    var customer = document.getElementById("customer");
    customer.classList.toggle("dark-mode");

    var main2 = document.getElementById("team2");
    main2.classList.toggle("dark-mode");

    var main2_text = document.querySelectorAll("#team2 h5.member a");
    for (let i = 0; i < main2_text.length; i++) {
        main2_text[i].classList.toggle("dark-mode");
    }
    
    var about2 = document.querySelector(".w3l-about-2");
    about2.classList.toggle("dark-mode");

    var right_side = document.querySelector(".right-side");
    right_side.classList.toggle("dark-mode");

    var right_side2 = document.querySelector(".right-side h4");
    right_side2.classList.toggle("dark-mode");

    
    if (i === 1) {
        var moon = document.querySelector(".mode-container i.fa-sun");
        moon.style = "display:block;color:blue;";
        var sun = document.querySelector(".mode-container i.fa-moon");
        sun.style = "display:none";
        i = 0;
    } else {
        var moon = document.querySelector(".mode-container i.fa-sun");
        moon.style = "display:none;";
        var sun = document.querySelector(".mode-container i.fa-moon");
        sun.style = "display:block;color:blue;";

        i = 1;
    }
}