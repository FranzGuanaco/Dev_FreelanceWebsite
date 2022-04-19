$(document).ready(function(){

    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#fade").fadeIn(4000);
    });


    $("#test").height($("grid-container1"))
    $(document).ready(function() {
        $("#rien").ready(function(){
        $("#slide").delay(2000).slideToggle("9000");})
    });

    window.onscroll = function() {myFunction()};
    function myFunction() {
        if (document.documentElement.scrollTop > 44){
            document.getElementById("changecolor").className="colorchanged";
        }
        else{
            document.getElementById("changecolor").className="";
        }
    }