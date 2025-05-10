console.log("Welcome to DJ YADAV");

// Initialize the Variables
let songIndex = 01;
let audioElement = new Audio('31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
   
    {songName: "Solid Body ", filePath: "31.mp3", coverPath: "31.jpeg"},
    {songName: "Moka_Soka", filePath: "32.mp3", coverPath: "32.jpeg"},
    {songName: "Moto", filePath: "33.mp3", coverPath: "33.jpeg"},
    {songName: "Suthri Si Chori", filePath: "34.mp3", coverPath: "34.jpeg"},
    {songName: "Husband_Bawla", filePath: "35.mp3", coverPath: "35.jpeg"},
    {songName: "Bhang_Ka_Barota", filePath: "36.mp3", coverPath: "36.jpeg"},
    {songName: "Soldier", filePath: "37.mp3", coverPath: "37.jpeg"},
    {songName: "Tik_Tok", filePath: "38.mp3", coverPath: "38.jpeg"},
    {songName: "Uncle", filePath: "39.mp3", coverPath: "39.jpeg"},
    {songName: "Love_You_Moto", filePath: "40.mp3", coverPath: "40.jpeg"},
    {songName: "Kamar_Teri_Left_Right_Halle", filePath: "41.mp3", coverPath: "41.jpeg"},
    {songName: "Bahu_Kale_K", filePath: "42.mp3", coverPath: "42.jpeg"},
    {songName: "Fauji", filePath: "43.mp3", coverPath: "43.jpeg"},
    {songName: "Bhabhi", filePath: "44.mp3", coverPath: "44.jpeg"},
    {songName: "Kaliya_Murad", filePath: "45.mp3", coverPath: "45.jpeg"},
    {songName: "Mehnga_Perfume", filePath: "46.mp3", coverPath: "46.jpeg"},
    {songName: "Olha Mein Patola", filePath: "47.mp3", coverPath: "47.jpeg"},
    {songName: "Lamba Lamba Ghunghat - Ajay Hooda", filePath: "48.mp3", coverPath: "48.jpeg"},
    {songName: "Age Gap - Ajay Hooda", filePath: "49.mp3", coverPath: "49.jpeg"},
    {songName: "Patange - Ajay Hooda ", filePath: "50.mp3", coverPath: "50.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id)-30;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=49){
        songIndex = 01
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=30){
        songIndex = 30
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
