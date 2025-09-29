const songs = [
  "Lana Del Rey - Brooklyn Baby.mp3",
  "Lana Del Rey - Chemtrails Over The Country Club.mp3",
  "Lana Del Rey - White Mustang.mp3",
  "Lana Del Rey - Young and Beautiful.mp3",
  "Lord Huron - The Night We Met.mp3",
  "Lana Del Rey - Fishtail (Audio).mp3",
  "Lana Del Rey - Music to Watch Boys to.mp3",
  "Lana Del Rey - Cola.mp3",
  "Lana Del Rey - Sad Girl.mp3",
  "Lana Del Rey - Video Games.mp3",
  "Lana Del Rey - Cherry.mp3",
  "Lana Del Rey - Venice Bitch.mp3",
  "Lana Del Rey - Ultraviolence.mp3",
  "Lana Del Rey - Say Yes To Heaven.mp3",
  "Lana Del Rey - Love Song.mp3",
  "Lana Del Rey - Art Deco.mp3",
  "Lana Del Rey - Cinnamon Girl.mp3",
  "Lana Del Rey - Margaret (Audio) ft. Bleachers.mp3",
  "Lana Del Rey - Ride.mp3",
  "Lana Del Rey - Black Beauty.mp3",
  "Old Money.mp3",
  "Lana Del Rey - Paris, Texas (Audio) ft. SYML.mp3",
  "Lana Del Rey - Doin' Time.mp3",
  "Lana Del Rey - Diet Mountain Dew.mp3",
  "Salvatore.mp3",
  "Lana Del Rey - Living Legend (Official Audio).mp3",
  "Honeymoon.mp3",
  "Swan Song.mp3",
  "Freak (Audio) - Lana Del Rey.mp3",
  "Religion.mp3",
  "Pretty When You Cry.mp3",
  "Money Power Glory.mp3",
  "Marshmello & Anne-Marie - FRIENDS (Music Video) OFFICIAL FRIENDZONE ANTHEM.mp3",
  "The Neighbourhood - Sweater Weather (Official Video).mp3",
  "One Of The Girls.mp3",
  "Starboy.mp3",
  "Blinding Lights.mp3",
  "End of Beginning.mp3",
  "Artic Monkeys - I Wanna Be Yours.mp3",
  "Renegade.mp3",
  "Britney Spears - Toxic (Official HD Video).mp3",
  "yung kai - blue (official music video).mp3",
  "Espresso.mp3",
  "Lady Gaga, Bruno Mars - Die With A Smile (Lyrics).mp3",
  "Please Please Please.mp3",
  "Taylor Swift - Daylight (Official Audio).mp3",
  "Sickick - Mind Games (Lyrics).mp3",
  "Ariana Grande - Into You (Official Video).mp3",
  "Ariana Grande - positions (official video).mp3",
  "SZA - Kill Bill (Official Video).mp3",
  "Modern Talking - Cheri Cheri Lady (OfficialVideo).mp3",
  "Collide (feat. Tyga).mp3",
  "Under The Influence.mp3",
  "Harleys In Hawaii.mp3",
  "Marshmello, Jonas Brothers - Slow Motion (Official Lyric Video).mp3",
  "Bad Girls Like You.mp3",
  "PUSH 2 START.mp3",
  "Water.mp3",
  "Make You Mine.mp3",
  "Strangers.mp3",
  "the cutest pair.mp3",
  "Oxlade feat. Camila Cabello.mp3",
  "MAGIC! - Rude (Lyrics).mp3",
  "Justin Bieber - Confident.mp3",
  "Justin Bieber - Company (Lyrics).mp3",
  "The Weeknd - I Was Never There.mp3",
  "I ADORE U .mp3",
  "Chris Brown & Young Thug - Go Crazy (Lyrics).mp3",
  "Lauv - I Like Me Better [Official Video].mp3",
  "Lauv - I Like Me Better [Official Video].mp3",
  "Christina Aguilera - Genie In A Bottle (Official Video).mp3",
  "Ariana Grande - the boy is mine (lyric visualizer).mp3",
  "The Neighbourhood - Softcore (Lyrics).mp3",
  "HYBS - Tip Toe.mp3",
  "we fell in love in october.mp3",
  "New West - Those Eyes (Lyrics).mp3",
  "Eyedress & Dent May - Something About You.mp3",
  "Ariana Grande - God is a woman (Lyric Video).mp3",
  "Charlie Puth - We Don't Talk Anymore.mp3",
  "Ariana Grande - thank u, next (Official Lyric Video).mp3",
  "Shoti - LDR - Sped Up.mp3",
  "Chase Atlantic - Moonlight (Lyrics).mp3",
  "Camila Cabello - Havana (Lyrics) ft. Young Thug.mp3",
]
const playlistDiv = document.getElementById('playlist');
const audioPlayer = document.getElementById('audioPlayer');
const searchInput = document.getElementById('searchInput');

function renderSongs(filter = "") {
  playlistDiv.innerHTML = "";
  songs
    .filter(song => song.toLowerCase().includes(filter.toLowerCase()))
    .forEach(song => {
      const div = document.createElement("div");
      div.className = "song";
      div.innerText = song.replace(".mp3", "").replace(/-/g, " ");
      div.onclick = () => {
        audioPlayer.src = `songs/${song}`;
        audioPlayer.play();
      };
      playlistDiv.appendChild(div);
    });
}

searchInput.addEventListener("input", () => {
  renderSongs(searchInput.value);
});

renderSongs();
