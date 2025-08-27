(()=>{
    
    const
    openNav = document.querySelector('.open-menu'),
    closeNav = document.querySelector('.close-menu'),
    navMenu = document.querySelector('.nav-links-container'),
    background = document.querySelector('.background'),
    mediaSize = 992;


    openNav.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);
    background.addEventListener("click", toggleMenu);


    function toggleMenu(){
        navMenu.classList.toggle('open');
        background.classList.toggle('active');
    }

    navMenu.addEventListener("click", (event) =>{

        let dropdownMenuBranch = null;
        if(event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize){
            event.preventDefault();
            dropdownMenuBranch = event.target.parentElement;
        }

        if(dropdownMenuBranch.classList.contains('active')){
            collapseDropDownMenu();
        }else{
            if(navMenu.querySelector('.dropdown-menu-branch.active')){
                collapseDropDownMenu();
            }
            dropdownMenuBranch.classList.add('active')
            const dropdownMenu = dropdownMenuBranch.querySelector('.dropdown-menus');
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        }

    })

    function collapseDropDownMenu(){
        document.querySelector('.dropdown-menu-branch.active .dropdown-menus').removeAttribute('style');
        document.querySelector('.dropdown-menu-branch.active').classList.remove('active');
        // background.classList.remove('active');

    } 
})()
