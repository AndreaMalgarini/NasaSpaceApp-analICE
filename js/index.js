window.app = {};

$(document).ready(function () {
    window.buttonplay = $("#play_button");
    window.menu = $("#sidebar");
    window.content = $("#content");

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    window.buttonplay.on("click", function () {
        window.buttonplay.fadeOut(100);
        document.getElementById("homepage").style.display = "flex";
      
        VideoPlayArt();
        VideoPlayAntart();
    })

    $("#artic").on("click", function () {
        $(".menu-nav").removeClass("active");
        $("#artic").addClass("active");
        $(".menu-div").fadeOut();
        $("#artic_div").fadeIn();
        document.getElementById("artic_div").style.display = "block";
        artic();
    });

    $("#home").on("click", function () {
        $(".menu-nav").removeClass("active");
        $("#home").addClass("active");
        $(".menu-div").fadeOut();
        $("#home_div").fadeIn();
        document.getElementById("home_div").style.display = "block";
        VideoPlayArt();
        VideoPlayAntart();
    });

    $("#antartic").on("click", function () {
        $(".menu-nav").removeClass("active");
        $("#antartic").addClass("active");
        $(".menu-div").fadeOut();
        $("#antartic_div").fadeIn();
        document.getElementById("antartic_div").style.display = "block";
        antartic();
    });

    $("#people").on("click", function () {
        $(".menu-nav").removeClass("active");
        $("#people").addClass("active");
        $(".menu-div").fadeOut();
        $("#people_div").fadeIn();
        document.getElementById("people_div").style.display = "block";
    });
    $("#about").on("click", function () {
        $(".menu-nav").removeClass("active");
        $("#about").addClass("active");
        $(".menu-div").fadeOut();
        $("#about_div").fadeIn();
        document.getElementById("about_div").style.display = "block";
    })
});

function artic(){
    var valY = document.getElementById("valY").value;
    var valM = document.getElementById("valM").value;
    document.getElementById("range_art_year").innerHTML = valY;
    if(valM==1){
         document.getElementById("range_art_month").innerHTML = "January";
    }
   
    document.getElementById("img_art_maps").src = "N_" + valY + valM + ".jpg";
    document.getElementById("img_art_graphs").src = "N_" + valY + valM + ".jpg";
}

function showValY(newVal) {
    document.getElementById("range_art_year").innerHTML = newVal;
    //document.getElementById("img_art_maps").src = newVal + ".jpg";
}

function showValM(newVal) {
    var valY = document.getElementById("valY").value;
    var valM = document.getElementById("valM").value;
    var newHtml;
    switch (newVal) {
        case "1":
            newHtml = "January";
            break;
        case "2":
            newHtml = "February";
            break;
        case "3":
            newHtml = "March";
            break;
        case "4":
            newHtml = "April";
            break;
        case "5":
            newHtml = "May";
            break;
        case "6":
            newHtml = "June";
            break;
        case "7":
            newHtml = "July";
            break;
        case "8":
            newHtml = "August";
            break;
        case "9":
            newHtml = "September";
            break;
        case "10":
            newHtml = "Octuber";
            break;
        case "11":
            newHtml = "November";
            break;
        case "12":
            newHtml = "December";
            break;

    }

    document.getElementById("range_art_month").innerHTML = newHtml;
    document.getElementById("img_art_maps").src = newVal + ".jpg";
    document.getElementById("img_art_graphs").src = newVal + ".jpg";
}


function antartic(){
    var valY = document.getElementById("valY_ant").value;
    var valM = document.getElementById("valM_ant").value;
    document.getElementById("range_antart_year").innerHTML = valY;
    if(valM==1){
         document.getElementById("range_antart_month").innerHTML = "January";
    }
   
    document.getElementById("img_antart_maps").src = "N_" + valY + valM + ".jpg";
    document.getElementById("img_antart_graphs").src = "N_" + valY + valM + ".jpg";
}

function showValY_ant(newVal) {
    document.getElementById("range_antart_year").innerHTML = newVal;
    //document.getElementById("img_art_maps").src = newVal + ".jpg";
}

function showValM_ant(newVal) {
    var valY = document.getElementById("valY_ant").value;
    var valM = document.getElementById("valM_ant").value;
    
    var newHtml;
    switch (newVal) {
        case "1":
            newHtml = "January";
            break;
        case "2":
            newHtml = "February";
            break;
        case "3":
            newHtml = "March";
            break;
        case "4":
            newHtml = "April";
            break;
        case "5":
            newHtml = "May";
            break;
        case "6":
            newHtml = "June";
            break;
        case "7":
            newHtml = "July";
            break;
        case "8":
            newHtml = "August";
            break;
        case "9":
            newHtml = "September";
            break;
        case "10":
            newHtml = "Octuber";
            break;
        case "11":
            newHtml = "November";
            break;
        case "12":
            newHtml = "December";
            break;

    }

    document.getElementById("range_antart_month").innerHTML = newHtml;
    document.getElementById("img_antart_maps").src = newVal + ".jpg";
    document.getElementById("img_antart_graphs").src = newVal + ".jpg";
}

function VideoPlayArt(){
     var vid = document.getElementById("video_artic");
     vid.removeAttribute("controls");
     vid.autoplay = true;
     vid.load();
}

function VideoPlayAntart(){
     var vid = document.getElementById("video_antartic");
     vid.removeAttribute("controls");
     vid.autoplay = true;
     vid.load();
}