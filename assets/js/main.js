

    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");
    
    function openTab(tabName){
        for (var i = 0; i < tabLinks.length; i++) {
            tabLinks[i].classList.remove("active-link");
        }
    
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active-tab");
        }
    
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab");
    }


    var sidebar = document.getElementById("sidemenu");

function openMenu(){
    sidebar.style.right = "0";
}

function closeMenu(){
    sidebar.style.right = "-200px"
}


document.getElementById("openButton").addEventListener("click", openMenu);
document.getElementById("closeButton").addEventListener("click", closeMenu);