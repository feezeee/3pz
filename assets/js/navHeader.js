var navHeaderAdapt = document.querySelector(".navigation__adapt__popup");
var openNavHeaderBtn = document.getElementById("navigationNavOpen");
var closeNavHeaderBtn = document.getElementById("navigationNavClose");
    
openNavHeaderBtn.onclick = function ()
{  
    navHeaderAdapt.classList.add('active');
}
closeNavHeaderBtn.onclick = function ()
{  
    navHeaderAdapt.classList.remove('active');
}