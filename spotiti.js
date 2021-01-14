let audio_1 = document.getElementById("button_1");
let audio_2 = document.getElementById("button_2");
let audio_3 = document.getElementById("button_3");
let audio_4 = document.getElementById("button_4");

function Iplay(song) {
   
    document.querySelector("#audio").setAttribute('src',song);    
    document.querySelector("#audio").load();
    document.querySelector("#audio").play();
}

audio_1.addEventListener("click", function(){    
    Iplay("./media/NothingElseMatters.mp3");
});
audio_2.addEventListener("click", function(){    
    Iplay("./media/MasterOfPuppets.mp3");
});
audio_3.addEventListener("click", function(){    
    Iplay("./media/TheTrooper.mp3");
});
audio_4.addEventListener("click", function(){    
    Iplay("./media/DuHast.mp3");
});


