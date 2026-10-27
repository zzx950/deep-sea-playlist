const songs = [
  { name: "Counting Stars", artist: "OneRepublic", language: "英文歌單" },
  { name: "Hotel California", artist: "Eagles", language: "英文歌單" },
  { name: "Take Five", artist: "Dave Brubeck", language: "英文歌單" },
  { name: "Shape of You", artist: "Ed Sheeran", language: "英文歌單" },
  { name: "Back in Black", artist: "AC/DC", language: "英文歌單" },
  { name: "如果月亮按時醒來", artist: "告五人", language: "中文歌單" },
  { name: "So What", artist: "Miles Davis", language: "英文歌單" }
];

function addSongs(titles, language, artists = {}) {
  titles.trim().split("\n").forEach((title) => {
    const name = title.trim();
    if (!name) return;

    const existingSong = songs.find(
      (song) =>
        song.language === language &&
        song.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (existingSong) {
      if (artists[name]) existingSong.artist = artists[name];
      return;
    }

    songs.push({ name, artist: artists[name] || "", language });
  });
}

addSongs(
  `Lose Control
Billie Jean
Snooze
Crazy
Is There Someone Else?
It's My Life
You Give Love a Bad Name
Have A Nice Day
Last Man Standing
I Fall Apart
Better Now
Circles
Love Yourself
Photograph
Counting Stars
Apologize
Unstoppable
Numb
In the End
Fear for Nobody
Free Loop
Medieval
Fast Cars & Superstars
Creep
Come As You Are
Something In The Way
Free Bird
Carry On Wayward Son
Fake Plastic Trees
No Surprises
Sweet Child O' Mine
Crazy Train
Pour Some Sugar On Me
golden hour
Back In Love
All Over You
My Favourite Clothes
After the Sun
Strawberry Blossom
In My Head
Why
Thinkin Bout You
Virgin Mary
What's the deal
M.I.A.
drunk
WANTCHU
summer
skeletons
2 soon
Payphone
Can’t Take My Eyes off You
Night
Way Down We Go
Teeth
Next To Me
Come and Get Your Love
Birds
Easily
Bye Bye Bye
Birds Of A Feather
Sunday Morning
Wake Me up When September Ends
The Other Side Of Paradise
Off My Face
Attention
act v there goes another vase
this is what slow dancing feels like
beggin
Annabelle's Homework
Nothin Like Us
Always
Who Knows
Demons
Rearrange My World
Saturday Night
Airport Bar
Hollywoods Bleeding
Mary Had A Little Lamb
Immortals
Natural
Believer
The Phoenix
Highway to Hell
Back In Black
Bohemian Rhapsody
Smells Like Teen Spirit
Radioactive
Thunder`,
  "英文歌單"
);

addSongs(
  `Die For You
Starboy
Is There Someone Else?
After Hours
Popular
Best Friends
Reminder
Blinding Lights
I Feel It Coming
Earned It
A Lonely Night
Niagara Falls
Pray For Me
Timeless
Creepin'
Baptized In Fear
The Hills
Call Out My Name
Can't Feel My Face
Hurt You
False Alarm`,
  "英文歌單",
  {
    "Die For You": "The Weeknd",
    Starboy: "The Weeknd",
    "Is There Someone Else?": "The Weeknd",
    "After Hours": "The Weeknd",
    Popular: "The Weeknd",
    "Best Friends": "The Weeknd",
    Reminder: "The Weeknd",
    "Blinding Lights": "The Weeknd",
    "I Feel It Coming": "The Weeknd",
    "Earned It": "The Weeknd",
    "A Lonely Night": "The Weeknd",
    "Niagara Falls": "The Weeknd",
    "Pray For Me": "The Weeknd",
    Timeless: "The Weeknd",
    "Creepin'": "The Weeknd",
    "Baptized In Fear": "The Weeknd",
    "The Hills": "The Weeknd",
    "Call Out My Name": "The Weeknd",
    "Can't Feel My Face": "The Weeknd",
    "Hurt You": "The Weeknd",
    "False Alarm": "The Weeknd"
  }
);

addSongs(
  `雀台
山阴路的夏天
午夜恰恰
未知设想
情勒
终于说出口
如果月亮按时醒来
坏蛋
MC来了
米店
直到我
哀人
玫瑰教堂
离开
豁达下午茶
过程
来吧占领我的无私
科学家
主动
乖乖
艾蜜莉
爱我的站左边
热铁皮房顶的夏天
大女人
不可能错过你
雨燕
秋日苦难
吕梦江`,
  "中文歌單"
);

addSongs(
  `红
安静
天天
江南
心墙
一口
瘦子
征服
传奇
红颜
迷宫
搁浅
遇见
后来
流沙
爱错
她说
离歌
底细
剪爱
遗憾
味道
领悟
囚鸟
保留
眼色
浴室
怀珠
水星记
我们俩
花田错
后视镜
爱爱爱
春风吹
找自己
二十二
青花瓷
发如雪
Melody
第一滴泪
依然爱你
普通朋友
小镇姑娘
逝去的爱
黑色幽默
一路向北
风往北吹
海阔天空
阿楚姑娘
千里之外
烟花易冷
特别的人
开始懂了
需要人陪
袖手旁观
夜夜夜夜
爱很简单
其实都没有
最长的电影
没那么简单
背对背拥抱
我真的需要
火烧的寂寞
像疯了一样
爱就一个字
如果云知道
贝加尔湖畔
给自己的歌
三个人的晚餐
当爱已成往事
如果你也听说
三十岁的女人
乌兰巴托的夜
去北极忘记你
流着泪说分手
飞机场的10:30
白天不懂夜的黑
因为单身的缘故
为你我受冷风吹
不必在乎我是谁
她来听我的演唱会
我的世界一直下雨`,
  "中文歌單"
);

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

    meta.appendChild(name);
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
