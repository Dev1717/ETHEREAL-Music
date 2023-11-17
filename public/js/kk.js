/*to playnthe music*/
const music = new Audio('audio/kk/1.mp3');

//music.play();

const songs =[
    {
        id:'1',
        songName:`abhi abhi <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'2',
        songName:`sajde <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'3',
        songName:`tum ho mera pyar <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'4',
        songName:`kaisi yeh pyas <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'5',
        songName:`kaise mujhe <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'6',
        songName:`jeena isika <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'7',
        songName:`khuda tune <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'8',
        songName:`dil tod ke <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'9',
        songName:`o meri jaan<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'10',
        songName:`o meri jaan repress <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'11',
        songName:`khel khel main <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'12',
        songName:`yaara re<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'13',
        songName:`yeh nasha <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'14',
        songName:`pahle ke jaisa<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'15',
        songName:`dil aaj kal <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'16',
        songName:`kabhi aayene pe<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'17',
        songName:`meri maa <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'18',
        songName:`o sanaam<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'19',
        songName:`pyar ke pal  <br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'20',
        songName:`sanson ke<br>
        <div class="subtitle">kk </div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'21',
        songName:`trippy trippy <br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'22',
        songName:`chand mera <br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'23',
        songName:`mahi ve<br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'24',
        songName:`o janiya <br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'25',
        songName:`o meri jaan <br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    },
    {
        id:'26',
        songName:`yaroon dosti<br>
        <div class="subtitle">kk</div>`,
        poster:"img/kk/1.jpg"
    }
] 

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');



masterPlay.addEventListener('click',()=>{
   if(music.paused || music.currentTime <=0){
    music.play();
    wave.classList.add('active2');
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-fill');


   }else{
    music.pause();
    wave.classList.remove('active2');
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');

   }
});

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105,.0)';
    })
}
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}


let index=0;
let poster_master_play = document.getElementById('poster_master_play');

let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src =`audio/kk/${index}.mp3`;
        poster_master_play.src =`img/kk/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `audio/kk/${index}.mp3`;

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');

    });
})





let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr= music.currentTime;
    let music_dur = music.duration;

    let min1= Math.floor(music_dur / 60);
    let sec1= Math.floor(music_dur % 60);

    if(sec1<10){
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =  `${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})

//for volume

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value >0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a= vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})


//for back and forward

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src =`audio/kk/${index}.mp3`;
        poster_master_play.src =`img/kk/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
})

//forward

next.addEventListener('click',()=>{
    index++;
    if(index >  Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src =`audio/kk/${index}.mp3`;
        poster_master_play.src =`img/kk/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
});



















//for scrolling songs 
let left_popsong = document.getElementById('left_popsong');
let rigth_popsong = document.getElementById('rigth_popsong');
let pop_song = document.getElementsByClassName('pop_song')[0];


rigth_popsong.addEventListener('click',()=>{
    pop_song.scrollLeft +=600;
});
left_popsong.addEventListener('click',()=>{
    pop_song.scrollLeft -=600;
});

//scrolling artist
let left_scrolls  = document.getElementById('rigth_scrolls');
let rigth_scrolls = document.getElementById('left_scrolls');
let item = document.getElementsByClassName('item')[0];


left_scrolls.addEventListener('click',()=>{
    item.scrollLeft +=600;
});
rigth_scrolls.addEventListener('click',()=>{
    item.scrollLeft -=600;
});






let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch (a) {
       case "next":
           shuffle.classList.add('bi-arrow-repeat');
           shuffle.classList.remove('bi-music-note');
           shuffle.classList.remove('bi-shuffle');
           shuffle.innerHTML = 'repeat';
           break;

        case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;    
    }
});




const next_music = () =>{
      if (index == songs.length){
        index = 1;
      }else{
        index++;
      }

  
        music.src =`audio/kk/${index}.mp3`;
        poster_master_play.src =`img/kk/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `audio/kk/${index}.mp3`;

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName}=elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active2');
}

const repeat_music = () =>{
   
     index;

      music.src =`audio/kk/${index}.mp3`;
      poster_master_play.src =`img/kk/${index}.jpg`;
      music.play();
      masterPlay.classList.add('bi-pause-fill');
      masterPlay.classList.remove('bi-play-fill');
      download_music.href = `audio/kk/${index}.mp3`;

      let songTitles = songs.filter((els)=>{
          return els.id == index;
      });
      songTitles.forEach(elss =>{
          let {songName}=elss;
          title.innerHTML = songName;
          download_music.setAttribute('download',songName);
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active2');
}

const random_music = () =>{
   
    if (index == songs.length){
        index = 1;
      }else{
         index =Math.floor((Math.random()*songs.length) + 1); 
      }

     music.src =`audio/kk/${index}.mp3`;
     poster_master_play.src =`img/kk/${index}.jpg`;
     music.play();
     masterPlay.classList.add('bi-pause-fill');
     masterPlay.classList.remove('bi-play-fill');
     download_music.href = `audio/kk/${index}.mp3`;

     let songTitles = songs.filter((els)=>{
         return els.id == index;
     });
     songTitles.forEach(elss =>{
         let {songName}=elss;
         title.innerHTML = songName;
         download_music.setAttribute('download',songName);
     });

     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105,105,105,.1)";
     makeAllplays();
     el.target.classList.remove('bi-play-circle-fill');
     el.target.classList.add('bi-pause-circle-fill');
     wave.classList.add('active2');
}

music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'next':
             next_music();
             break;

        case 'random':
             random_music();
             break;
    
    }
});