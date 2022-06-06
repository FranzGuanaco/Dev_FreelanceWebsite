$(document).ready(function(){  /* titre */
    $("#fade").fadeIn(3000);
    });


   
    $(document).ready(function() {
        $("#rien").ready(function(){
        $("#slide").delay(2000).slideToggle("9000");})
        
    }); 

    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() <= 40){
                $("#bouge").slideToggle("9000"); }}); });


 window.onscroll = function() {myFunction()};
    function myFunction() {
            if (document.documentElement.scrollTop > 200 ){
                        document.getElementById("changecolor").className="colorchanged"; /* changement de background color */
                        document.getElementById("circleBase").className = "move"; /* avancement de la bille */
                    }
            
            if (document.documentElement.scrollTop > 600){
                        document.getElementById("circleBase").className = "move_more"; /* la bille avance plus */
                    }
            if (document.documentElement.scrollTop < 300){
                        document.getElementById("changecolor").className="colorchanged2"; /* changement de background couleur et remontant */
                        
                    }
            
            if ((document.documentElement.scrollHeight < 300) && (document.documentElement.scrollHeight > 600)){
                        document.getElementById("circleBase").className = "back"; /* la bille recul */
                    }
                
            if (document.documentElement.scrollTop > 40){
                        document.getElementById("fade-title").className="opacity-title"; 
                    }
            else{
                document.getElementById("fade-title").className="";
                    }
                }