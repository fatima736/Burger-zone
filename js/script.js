window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 )
    {
        document.getElementById("navbar").classList.add("bg-dark", "shadow");
    }
    else{
        document.getElementById("navbar").classList.remove("bg-dark", "shadow");
    }
    }
