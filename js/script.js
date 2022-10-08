console.log("Welcome to Spotify");

//Initilise the variables
let songindex=0;
let audioElement =new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
//Array or Objects for song lists
let songs=[
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Lovely",filepath:"songs/2.mp3",coverpath:"img/img2.png"},
    {songName:"Someone will love you better",filepath:"songs/3.mp3",coverpath:"img/img3.jpg"},
    {songName:"Stay",filepath:"songs/4.mp3",coverpath:"img/img4.png"},
    {songName:"Baila Conmigo",filepath:"songs/5.mp3",coverpath:"img/img5.jpg"},
    {songName:"Let Me Down Slowly",filepath:"songs/6.mp3",coverpath:"img/img6.jpg"},
    {songName:"Closer",filepath:"songs/7.mp3",coverpath:"img/img7.png"}
]

songItem.forEach((element,i)=> {
    console.log(element,i);
 element.getElementsByTagName("img")[0].src=songs[i].coverpath; 
 element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    
})

// handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;

}
})

//Timeupdate events
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log("Timeupdate");
//update SeekBar
progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
audioElement.currentTime= myprogressbar.value *audioElement.duration/100;
})