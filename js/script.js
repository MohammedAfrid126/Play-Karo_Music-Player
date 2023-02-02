//Declaring Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let coverImage = document.getElementById("coverImage");

//Songs Array
let songs = [
    {songName: '01 - Nashe Si Chadh Gayi - 190Kbps', filePath: 'songs/1.mp3',cover : 'img/cover/1.jpg '},
    {songName: '02 - Galliyan - Ek Villain ( PagalWorld.com )', filePath: 'songs/2.mp3',cover : 'img/cover/2.jpg '},
    {songName: '03 - Hamari Adhuri Kahani (Title Song) Arijit Singh 190Kbps', filePath: 'songs/3.mp3',cover : 'img/cover/3.jpg '},
    {songName: '04 - Akh Lad Jave - Loveratri', filePath: 'songs/4.mp3',cover : 'img/cover/4.jpg '},
    {songName: '05 - Ijazat - One Night Stand (Arijit Singh) 190Kbps', filePath: 'songs/5.mp3',cover : 'img/cover/5.jpg '},
    {songName: '06 - Ishq Mubarak - Tum Bin 2 (Arijit Singh) 190Kbps', filePath: 'songs/6.mp3',cover : 'img/cover/6.jpg '},
    {songName: '07 - Mujhko Barsaat Bana Lo - Junooniyat - 190Kbps', filePath: 'songs/7.mp3',cover : 'img/cover/7.jpg '},
    {songName: '08 - Musafir (Atif Aslam) 190Kbps', filePath: 'songs/8.mp3',cover : 'img/cover/8.jpg '},
    {songName: '09 - Nazm Nazm - Bareilly Ki Barfi (Arko) 190Kbps', filePath: 'songs/9.mp3',cover : 'img/cover/9.jpg '},
    {songName: '10 - Ek Ladki Ko Dekha Toh Aisa Laga', filePath: 'songs/10.mp3',cover : 'img/cover/10.jpg '},
    {songName: '11 - Kesariya_320(PagalWorld.com.se)', filePath: 'songs/11.mp3',cover : 'img/cover/11.jpg '},
    {songName: '12 - Jhoome Jo Pathaan_320(PagalWorld.com.se)', filePath: 'songs/12.mp3',cover : 'img/cover/12.jpg '},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

// handling pause and play click
masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = "1";
        
    }else{
        audioElement.pause();
        coverImage.style = ""
        masterPlay.classList.add("fa-circle-play")
        masterPlay.classList.remove("fa-circle-pause")
        gif.style.opacity = "0";
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    console.log(audioElement.duration);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songIndex+1}.mp3`;
        coverImage.src = `img/cover/${songIndex+1}.jpg`;
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause");
    })
});


document.getElementById('nextSong').addEventListener('click',()=>{
    if (songIndex>=11) {
        songIndex = 0
    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    coverImage.src = `img/cover/${songIndex+1}.jpg`;
    coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
});


document.getElementById('previousSong').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex = 0
    }else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    coverImage.src = `img/cover/${songIndex+1}.jpg`;
    coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
});