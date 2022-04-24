$(document).ready(function(){
    $("#fade").fadeIn(4000);
    });


    $("#test").height($("grid-container1"))
    $(document).ready(function() {
        $("#rien").ready(function(){
        $("#slide").delay(2000).slideToggle("9000");})
    });

    // effet fade-in pour la couleur en background

    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.documentElement.scrollTop > 300){
            document.getElementById("changecolor").className="colorchanged";
        }
        else{
            document.getElementById("changecolor").className="";
        }
    
        if (document.documentElement.scrollTop > 50){
            document.getElementById("fade-title").className="opacity-title";
        }
        else{
            document.getElementById("fade-title").className="";
        }
    }