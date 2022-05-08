$(document).ready(function(){  /* titre */
    $("#fade").fadeIn(3000);
    });


    $("#test").height($("grid-container1"))
    $(document).ready(function() {
        $("#rien").ready(function(){
        $("#slide").delay(2000).slideToggle("9000");})
    }); 


           
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() <= 40){
                $("#bouge").slideToggle("9000"); }}); });

        

    // effet fade-in pour la couleur en background

    window.onscroll = function() {myFunction()};
    function myFunction() {
        if ((document.documentElement.scrollTop > 300 ) && (document.documentElement.scrollTop < 310 )){
            document.getElementById("changecolor").className="colorchanged"; /* changement de background color */
            document.getElementById("circleBase").className = "move"; /* avancement de la bille */
        }

        if ((document.documentElement.scrollTop > 900 ) && (document.documentElement.scrollTop < 2000 )) {
            document.getElementById("circleBase").className = "move_more"; /* avancement de la bille */
         }
         
         else if ((document.documentElement.scrollTop < 2000 ) && (document.documentElement.scrollTop > 900 )){
            document.getElementById("circleBase").className = "back_more"; 
         }

        if (document.documentElement.scrollTop < 300){
            document.getElementById("changecolor").className="colorchanged2"; /* changement de background couleur et remontant */
            document.getElementById("circleBase").className = "back";
        }
    
        if (document.documentElement.scrollTop > 40){
            document.getElementById("fade-title").className="opacity-title"; 
        }
        else{
            document.getElementById("fade-title").className="";
        }
    }


    