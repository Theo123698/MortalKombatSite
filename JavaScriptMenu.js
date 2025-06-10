
 let num = 0

setInterval(function(){
    const cenario = document.getElementById('cenario');

    if (num == 0)
     cenario.style.backgroundImage = "URL('./Img Stages/The pit.jpg') ";
    else if(num == 1){
     cenario.style.backgroundImage = "";
     cenario.style.backgroundImage = "URL('./Img Stages/Portal.jpeg') ";
    }
    else if(num == 2){
         cenario.style.backgroundImage = "";
         cenario.style.backgroundImage = "URL('./Img Stages/Yang.jpeg') ";
    }
     else if(num == 3){
         cenario.style.backgroundImage = "";
         cenario.style.backgroundImage = "URL('./Img Stages/WARRIOR SHRINE.jpg') ";
    }
     else if(num == 4){
         cenario.style.backgroundImage = "";
         cenario.style.backgroundImage = "URL('./Img Stages/Deadpool.jpg') ";
    }
     else if(num == 5){
         cenario.style.backgroundImage = "";
         cenario.style.backgroundImage = "URL('./Img Stages/Armor.jpeg') ";
    }
    else if(num == 6){
         cenario.style.backgroundImage = "";
         cenario.style.backgroundImage = "URL('./Img Stages/ReptileMovieFight.jpeg') ";
    }
    else if(num == 7){
        cenario.style.backgroundImage = "";
        cenario.style.backgroundImage = "URL('./Img Stages/TopChicago.webp')"
    }
    else if(num == 8){
        cenario.style.backgroundImage = "";
        cenario.style.backgroundImage = "URL('./Img Stages/SoulChamber.webp')"
    }
    else if(num == 9){
        cenario.style.backgroundImage = "";
        cenario.style.backgroundImage = "URL('./Img Stages/Subway.webp')"
    }
    else if(num == 10){
        cenario.style.backgroundImage = "";
        cenario.style.backgroundImage = "URL('./Img Stages/Tumblr.webp')"
    }
    console.log(num)
    num ++
   
    
}, 3000);








