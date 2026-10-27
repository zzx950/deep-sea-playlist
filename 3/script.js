const songs = [
  { name: "Counting Stars", artist: "OneRepublic", language: "英文歌單" },
  { name: "Hotel California", artist: "Eagles", language: "英文歌單" },
  { name: "Take Five", artist: "Dave Brubeck", language: "英文歌單" },
  { name: "Shape of You", artist: "Ed Sheeran", language: "英文歌單" },
  { name: "Back in Black", artist: "AC/DC", language: "英文歌單" },
  { name: "如果月亮按時醒來", artist: "告五人", language: "中文歌單" },
  { name: "So What", artist: "Miles Davis", language: "英文歌單" }
];

const songList = document.getElementById("song-list");
const songCount = document.getElementById("song-count");

function renderSongs(selectedLanguage = "", searchQuery = "") {
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredSongs = songs.filter((song) => {
    const matchesLanguage = !selectedLanguage || song.language === selectedLanguage;
    const searchableText = `${song.name} ${song.artist}`.toLocaleLowerCase();
    return matchesLanguage && searchableText.includes(normalizedQuery);
  });

  songList.innerHTML = "";
  songCount.textContent = filteredSongs.length;

  filteredSongs.forEach((song) => {
    const li = document.createElement("li");
    li.className = "song-item";

    const info = document.createElement("div");
    info.className = "song-info";

    const track = document.createElement("div");
    track.className = "track";

    const dolphin = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    dolphin.classList.add("track-icon");
    dolphin.setAttribute("viewBox", "0 0 48 48");
    dolphin.setAttribute("aria-hidden", "true");
    dolphin.setAttribute("focusable", "false");

    const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
    tail.setAttribute("d", "M12 24c-3-2-5-5-7-9 1 6 2 9 6 11-4 3-6 6-7 11 5-3 8-6 11-10Z");

    const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
    body.setAttribute("d", "M11 25c6-8 15-12 24-10 4 1 7 3 10 5l3 2-4 2c-4 2-8 1-12-1-2 2-3 5-2 8-5-1-8-4-10-8-4 2-8 3-13 3l4-4-5 1Z");

    const fin = document.createElementNS("http://www.w3.org/2000/svg", "path");
    fin.setAttribute("d", "M23 15c2-3 3-6 2-9 4 2 7 5 8 10-4-1-7-1-10-1Z");

    dolphin.append(tail, body, fin);
    track.appendChild(dolphin);

    const meta = document.createElement("div");
    meta.className = "song-meta";

    const name = document.createElement("span");
    name.className = "song-name";
    name.textContent = song.name;

    const artist = document.createElement("span");
    artist.className = "song-artist";
    artist.textContent = song.artist;

    meta.appendChild(name);
    meta.appendChild(artist);
    info.appendChild(track);
    info.appendChild(meta);

    const genre = document.createElement("span");
    genre.className = "song-genre";
    genre.textContent = song.language;

    li.appendChild(info);
    li.appendChild(genre);
    songList.appendChild(li);
  });

  if (filteredSongs.length === 0) {
    const emptyState = document.createElement("li");
    emptyState.className = "empty-state";
    emptyState.textContent = "找不到符合的歌曲或歌手";
    songList.appendChild(emptyState);
  }
}

function filterSongs() {
  const selectedLanguage = document.getElementById("genre-select").value;
  const searchQuery = document.getElementById("song-search").value;
  renderSongs(selectedLanguage, searchQuery);
}

renderSongs();
