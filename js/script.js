console.log("Welcome to Spotify");

//Initilise the variables
let songindex=0;
let audioElement =new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar= document.getElementById('myprogessbar');
let gif= document.getElementById('gif');

//Array or Objects for song lists
let songs=[
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"},
    {songName:"Let Me Love You",filepath:"songs/1.mp3",coverpath:"img/img1.jpg"}
]

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
audioElement.addEventListener('timeupdate' ,()=>{
    console.log("Timeupdate");
})

//audioElement.play();