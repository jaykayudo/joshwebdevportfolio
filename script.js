var wrapper = document.getElementById("wrapper")
function scrolleffect(){
    var wrapper = document.getElementById("wrapper")
    let scrolls = document.getElementsByClassName("scroll-effect")

    for(var a = 0; a < scrolls.length; a++){
        var wrapperHeight = wrapper.clientHeight
        if (window.innerWidth < 600){
            wrapperHeight = window.innerHeight
        }
        var revealtop = scrolls[a].getBoundingClientRect().top;
        var revealbottom = scrolls[a].getBoundingClientRect().bottom;
        if(revealtop < wrapperHeight - 150){
            scrolls[a].classList.add('scroll-in');
        }
        else{
            scrolls[a].classList.remove('scroll-in')
        }

        if(revealbottom < 150){
            scrolls[a].classList.remove('scroll-in')   
        }
    }
   
}

function addSticky(){
    var wrapper = document.getElementById("wrapper")
    var firstSection = document.getElementById("first-section");
    var nav = document.getElementById("nav");

    var revealtop = firstSection.getBoundingClientRect().top;
    if (revealtop < 0){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky")
    }
    
    if (window.innerWidth < 600){
        nav.classList.toggle("sticky",window.scrollY > 0)
    }
}

$("#tabs").tabs();

function activeNav(){
    var wrapper = document.getElementById("wrapper")
    var sectionNavs = document.getElementsByClassName("nav-link")
    var sections = document.getElementsByClassName("scroll-effect")
    for(var x = 0; x < sectionNavs.length; x++){
        var revealnavbottom = sections[x].getBoundingClientRect().bottom
        var revealnavtop = sections[x].getBoundingClientRect().top
        if (revealnavbottom <= wrapper.clientHeight){
            sectionNavs[x].classList.add("active-nav")
        }
        if(revealnavbottom <= 0){
            sectionNavs[x].classList.remove("active-nav")
        }
        if(revealnavbottom > wrapper.clientHeight){
         sectionNavs[x].classList.remove("active-nav")
        }

        

    }    

}

wrapper.addEventListener("scroll",scrolleffect)
wrapper.addEventListener("scroll",addSticky)
window.addEventListener("scroll",scrolleffect)
window.addEventListener("scroll",addSticky)
wrapper.addEventListener("scroll",activeNav)