console.log('Hello from spotify');
let songIndex=0;
let audioElement=new Audio('songs/song1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs=[
  {songName:"Hanuman Chalisa", filePath:"songs/song1.mp3",coverPath:"cover1.webp"},
  {songName:"Tere Liye", filePath:"songs/song2.mp3",coverPath:"cover2.jpeg"},
  {songName:"Kabhi jo badal barse", filePath:"songs/song3.mp3",coverPath:"cover3.jpg"},
  {songName:"Amplifier", filePath:"songs/song4.mp3",coverPath:"cover4.jpeg"},
  {songName:"Abhi na jao", filePath:"songs/song5.mp3",coverPath:"cover5.jpg"},
  {songName:"aap ki nazron", filePath:"songs/song6.mp3",coverPath:"cover6.jpg"},
  {songName:"Yeh shaam mastani", filePath:"songs/song7.mp3",coverPath:"cover7.jpeg"},
  {songName:"Mujhko barsat banalo", filePath:"songs/song8.mp3",coverPath:"cover8.jpg"},
  {songName:"Sanam Teri Kasam", filePath:"songs/song9.mp3",coverPath:"cover9.jpg"},
  {songName:"Phir Mohabbat", filePath:"songs/song10.mp3",coverPath:"cover10.jpg"}
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


let songItems = Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByTagName("span")[0].innerText = songs[i].songName; 
});


/* finction that reset all icons to play */
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

// Add click listener to each small play icons
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => { 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        
        // Update audio source and play
        audioElement.src = `songs/song${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        
        // Sync master play button and GIF
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        
        // Update song title in the bottom bar
        document.querySelector('.songTitle').innerText = songs[songIndex].songName;
    })
})