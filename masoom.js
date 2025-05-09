console.log("Welcome to masoom sharma");

// Initialize the Variables
let songIndex = 10;
let audioElement = new Audio('11.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let  masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Pistol Bole Gi", filePath: "11.mp3", coverPath: "11.jpeg"},
    {songName: "32 Ke Fire", filePath: "12.mp3", coverPath: "12.jpeg"},
    {songName: "Warning ", filePath: "13.mp3", coverPath: "13.jpeg"},
    {songName: "Danda Deniya", filePath: "14.mp3", coverPath: "14.jpeg"},
    {songName: "1987", filePath: "15.mp3", coverPath: "15.jpeg"},
    {songName: "1800 Shooter", filePath: "16.mp3", coverPath: "16.jpeg"},
    {songName: "Moj", filePath: "17.mp3", coverPath: "17.jpeg"},
    {songName: "Sharp Shooter", filePath: "18.mp3", coverPath: "18.jpeg"},
    {songName: "60 Mukadme - Masoom Sharma", filePath: "19.mp3", coverPath: "19.jpeg"},
    {songName: "Marda Pe Case", filePath: "20.mp3", coverPath: "20.jpeg"},
    {songName: "Matak Matak", filePath: "21.mp3", coverPath: "21.jpeg"},
    {songName: "Bhirad Ladgi", filePath: "22.mp3", coverPath: "22.jpeg"},
    {songName: "Davai", filePath: "23.mp3", coverPath: "23.jpeg"},
    {songName: "Tuition Badmashi Kaa", filePath: "24.mp3", coverPath: "24.jpeg"},
    {songName: "Byah ke Lawenge - Masoom Sharma", filePath: "25.mp3", coverPath: "25.jpeg"},
    {songName: "Bateu Haryane Te - Masoom Sharma", filePath: "26.mp3", coverPath: "26.jpeg"},
    {songName: "Ram Ne Lootegi - Masoom Sharma", filePath: "27.mp3", coverPath: "27.jpeg"},
    {songName: "Baitha Balad Kade Laat Maar Ke Thaya Na Karte", filePath: "28.mp3", coverPath: "28.jpeg"},
    {songName: "Blender - Masoom Sharma", filePath: "29.mp3", coverPath: "29.jpeg"},
    {songName: "2 Khatole - Masoom Sharma", filePath: "30.mp3", coverPath: "30.jpeg"},
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
        songIndex = parseInt(e.target.id)-10;
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
    if(songIndex>=29){
        songIndex = 10
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
    if(songIndex<=10){
        songIndex = 10
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
