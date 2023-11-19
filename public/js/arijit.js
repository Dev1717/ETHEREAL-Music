/*to playnthe music*/
const music = new Audio('audio/arijit/1.mp3');
//music.play();

const songs =[
    {
        id:'1',
        songName:`Naina Ashq Na Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/1.jpg"
    },
    {
        id:'2',
        songName:`Khairiyat <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/2.jpg"
    },
    {
        id:'3',
        songName:`Desh mere <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/3.jpg"
    },
    {
        id:'4',
        songName:`Dhokha <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/4.jpg"
    },
    {
        id:'5',
        songName:`Tera Yaar Hoon Me <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/5.jpg"
    },
    {
        id:'6',
        songName:`Chunar <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/6.jpg"
    },
    {
        id:'7',
        songName:`Galti Se Mistake <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/7.jpg"
    },
    {
        id:'8',
        songName:`Humari Adhuri Kahani <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/8.jpg"
    },
    {
        id:'9',
        songName:`Neki Ki Rah <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/9.jpg"
    },
    {
        id:'10',
        songName:`Hamdard <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/10.jpg"
    },
    {
        id:'11',
        songName:`Mere Yaara <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/11.jpg"
    },
    {
        id:'12',
        songName:`Nashe Si Chadh Gayi <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/12.jpg"
    },
    {
        id:'13',
        songName:`Ae Watan <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/13.jpg"
    },
    {
        id:'14',
        songName:`Agar Tum Sath Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/14.jpg"
    },
    {
        id:'15',
        songName:`Pachtaoge <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/15.jpg"
    },
    {
        id:'16',
        songName:`Mann Jogeya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/16.jpg"
    },
    {
        id:'17',
        songName:`Phir Bhi Tumko Chaunga <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/17.jpg"
    },
    {
        id:'18',
        songName:`Uska Hi Banana<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/18.jpg"
    },
    {
        id:'19',
        songName:`Mast Magan  <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/19.jpg"
    },
    {
        id:'20',
        songName:`Dekh Lena <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/20.jpg"
    },
    {
        id:'21',
        songName:`Dekha Hazaro Daffaa <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/21.jpg"
    },
    {
        id:'22',
        songName:`Phir Mohabbat <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/22.jpg"
    },
    {
        id:'23',
        songName:`Rahogi Meri <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/23.jpg"
    },
    {
        id:'24',
        songName:`Tumhe Kitna Pyaar Karte <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/24.jpg"
    },
    {
        id:'25',
        songName:`What Jhumka? <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/25.jpg"
    },
    {
        id:'26',
        songName:`Bulleya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:"img/arijit/26.jpg"
    }

] 

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id,songName,poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
      ${songName}
    </div>`;

    search_results.appendChild(card);

});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        
        if (input.value == 0) {
            search_results.style.display="none";
        } else {
            search_results.style.display="";
        }
    }
})


//search data end


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
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src =`audio/arijit/${index}.mp3`;
        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `audio/arijit/${index}.mp3`;

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
    music.src =`audio/arijit/${index}.mp3`;
        poster_master_play.src =`img/arijit/${index}.jpg`;
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
    music.src =`audio/arijit/${index}.mp3`;
        poster_master_play.src =`img/arijit/${index}.jpg`;
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

  
        music.src =`audio/arijit/${index}.mp3`;
        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.add('bi-pause-fill');
        masterPlay.classList.remove('bi-play-fill');
        download_music.href = `audio/arijit/${index}.mp3`;

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

      music.src =`audio/arijit/${index}.mp3`;
      poster_master_play.src =`img/arijit/${index}.jpg`;
      music.play();
      masterPlay.classList.add('bi-pause-fill');
      masterPlay.classList.remove('bi-play-fill');
      download_music.href = `audio/arijit/${index}.mp3`;

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

     music.src =`audio/arijit/${index}.mp3`;
     poster_master_play.src =`img/arijit/${index}.jpg`;
     music.play();
     masterPlay.classList.add('bi-pause-fill');
     masterPlay.classList.remove('bi-play-fill');
     download_music.href = `audio/arijit/${index}.mp3`;

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