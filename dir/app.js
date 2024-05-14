// plan
/*
play functionality
shuffle functionality
add functionality
download functionality


user story also build algorithums
break problem in sub-problem
--problems--
1. have to add music dynamically
 steps 
1.1- first add songs to library dynamically
1.2- 


2. play button to "play" music
3. add music
4. download music
5. search music
6. add music from computer "same as 4th problem"
7. next and prievous song
8. play and pause function
9. music range function
10. mute function  or increase-decrease volume btn
*/

const libraryContainer = document.querySelector(".library-container")
const addingToQueue = document.querySelectorAll(".addingToQueue");
const musicQueue = document.querySelector(".music-queue")


const songs = [{
    artistName: "Ed Sheeran", 
    songName: "Perfect",
    songImg: "./images/img1.jpg",
    path: "./songs/Ed Sheeran - Perfect.mp3"
},{
    artistName: "Adele", 
    songName: "Skyfall",
    songImg: "./images/img2.png",
    path: "./songs/Adele - Skyfall.mp3"
},{
    artistName: "Ali Sethi x Shae Gill", 
    songName: "Perfect",
    songImg: "./images/img3.png",
    path: "./songs/Pasoori.mp3"
},{
    artistName: "Coldplay", 
    songName: "Perfect",
    songImg: "./images/img4.png",
    path: "./songs/Hymn For The Weekend.mp3"
},{
    artistName: "Diljit Dosanjh", 
    songName: "G.O.A.T.",
    songImg: "./images/img5.png",
    path: "./songs/G.O.A.T.mp3"
},{
    artistName: "Shakira", 
    songName: "Waka Waka",
    songImg: "./images/img6.png",
    path: "./songs/Waka-Waka.mp3"
},{
    artistName: "Shubh", 
    songName: "MVP",
    songImg: "./images/img7.png",
    path: "./songs/MVP.mp3"
},{
    artistName: "Post Malone", 
    songName: "I had some help",
    songImg: "./images/img8.png",
    path: "./songs/I-Had-Some-Help.mp3"
},{
    artistName: "Anoop Kumar", 
    songName: "Tujh Mei RabDikhta Hai",
    songImg: "./images/img9.png",
    path: "./songs/Tujh-Mei-Rab-Dikhta-Hai.mp3"
},{
    artistName: "Shreya Ghoshal & Arjit Singh", 
    songName: "Ve Kamleya",
    songImg: "./images/img10.png",
    path: "./songs/Ed Sheeran - Perfect.mp3"
},
]


const addSongsToLibrary = () => {
    for(let i = 0; i < songs.length; i++){ 
        libraryContainer.innerHTML += ` <div class="song-wrapper flex items-center m-5 cursor-pointer">
        <img src="${songs[i].songImg}" class="inline-block w-10 h-10 rounded-[50%]" alt="">
        <div class="song-info flex flex-col mx-5 ">
        <span class="song-title text-base">${songs[i].songName}</span>
        <span class="song-artist text-sm text-slate-400">${songs[i].artistName}</span>
        </div>`
    }
}

addSongsToLibrary()

// Select all song wrappers in the library
const songWrappers = document.querySelectorAll(".song-wrapper");
// Array to keep track of song names in the queue
let queuedSongs = [];

// Function to add a song to the queue
const addToQueue = (song) => {
    // Check if the song is already in the queue
    if (!queuedSongs.includes(song.songName)) {
        // Create a new song element
        const songElement = document.createElement('div');
        songElement.classList.add('song-wrapper', 'p-5', 'flex', 'items-center', "cursor-pointer");
        songElement.innerHTML = `
            <img src="${song.songImg}" class="inline-block w-10 h-10 rounded-[50%]" alt="">
            <div class="song-info flex flex-col mx-5 text-white">
                <span class="song-title text-lg font-semibold">${song.songName}</span>
                <span class="song-artist text-sm text-gray-500 font-medium">${song.artistName}</span>
            </div>
        `;
        // Append the song element to the music queue
        musicQueue.appendChild(songElement);
        // Add the song name to the queuedSongs array
        queuedSongs.push(song.songName);
    } 
};

// Add click event listener to each song wrapper
songWrappers.forEach(songWrapper => {
    songWrapper.addEventListener('click', () => {
        // Extract song details from the clicked song wrapper
        const songName = songWrapper.querySelector('.song-title').textContent;
        const artistName = songWrapper.querySelector('.song-artist').textContent;
        // Find the clicked song in the songs array
        const clickedSong = songs.find(song => song.songName === songName && song.artistName === artistName);
        // Add the clicked song to the queue
        console.log(clickedSong);
        addToQueue(clickedSong);
    });
});
