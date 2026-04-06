console.log('Hello from spotify');
let songIndex=0;
let audioElement=new Audio('songs/hanuman_chalisa.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs=[
  {songName:"Tere Liye", filePath:"tereLiye.mp3",coverPath:"cover1.jpeg"},
  {songName:"Tere Liye", filePath:"tereLiye.mp3",coverPath:"cover1.jpeg"},
  {songName:"Tere Liye", filePath:"tereLiye.mp3",coverPath:"cover1.jpeg"},
  {songName:"Tere Liye", filePath:"tereLiye.mp3",coverPath:"cover1.jpeg"},
  {songName:"Tere Liye", filePath:"tereLiye.mp3",coverPath:"cover1.jpeg"}
]

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused ||  audioElement.currentTime===0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.add('fa-circle-play');
    masterPlay.classList.remove('fa-circle-pause');
    gif.style.opacity=0;
  }
})



// Listen to event
audioElement.addEventListener('timeupdate',()=>{
  // update seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})