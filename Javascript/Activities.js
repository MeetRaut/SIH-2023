const gamesarray = [
  {
    title: "Fill-Color",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIif9cbCQXZv6QMfC3TJFx-K0lgwyrDLkJdo37FtODKL-wRWp1X2SlUVjCMWscwjiGvI&usqp=CAU",
    description:
      "Enjoy a coloring game where you get to fill in black-and-white drawings with various colors. It is a fun and creative way to spend your time.",
  },
  {
    title: "Connect the Dots",
    img: "https://tcf.admeen.org/game/4500/4419/400x246/connect-the-dots.jpg",
    description:
      "Try a Dot-to-dot game where you connect numbered dots in the right order to reveal a picture or shape. It's a simple yet satisfying puzzle challenge.",
  },
  {
    title: "Mazes",
    img: "https://www.shutterstock.com/image-illustration/maze-game-logo-labyrinth-entry-260nw-406331857.jpg",
    description:
      "Mazes can intrigue you. You will love navigating through a series of paths to reach the goal, trying to avoid dead ends and obstacles along the way.",
  },
  {
    title: "Word-Search",
    img: "https://www.wordsearch365.com/static/Assets/Game_Images/Icon/WordSearch_Android_App_Icon.png",
    description:
      "Word search games can be very relaxing for you. You will like searching for hidden words within a grid of letters.",
  },
];
const musicarray = [
  (music1 = {
    title: "Piano-Music",
    Audio: "../Audio/pianoMusic.mp3",
    description:
      "The slow, melodic tunes of piano music can help to lower the heart rate and blood pressure, which can create a calming effect on the body and mind. Listen to this piece of piano music by 'Keys of World'. ",
  }),

  (music2 = {
    title: "LoFi-Music",
    Audio: "../Audio/LoFiMusic.mp3",
    description:
      "Lo-fi music can reduce stress and enhance focus, resulting in quality study sessions. Lo-fi and other musical styles can help students reduce distractions while boosting brain activity. Listemn to this piece of LoFi music by 'Purrple Cats'. ",
  }),

  (music3 = {
    title: "Ambient-Music",
    Audio: "../Audio/RainAmbience.mp3",
    description:
      "Ambient music is a style of gentle, largely electronic instrumental music with no persistent beat, used to create or enhance a mood or atmosphere. Listen to this piece of ambient music that creates an ambience of rain and helps u relax.",
  }),
];
const paragraphs = [
  para1 =
  {
      title: "Para 1",
      Content: "The world is increasingly designed to depress us. Happiness isn't very good for the economy. If we were happy with what we had, why would we need more? How do you sell an anti-ageing moisturiser? You make someone worry about ageing. How do you get people to vote for a political party? You make them worry about immigration. How do you get them to buy insurance? By making them worry about everything. How do you get them to have plastic surgery? By highlighting their phys- ical flaws. How do you get them to watch a TV show? By making them worry about missing out. How do you get them to buy a new smartphone? By making them feel like they are being left behind to be calm becomes a kind of revolutionary act. To be happy with your own non-upgraded existence. To be comfortable with our messy, human selves, would not be good for business.",
      Author: "Matt Haig"
  },
  para2 =
  {
      title: "Para 2",
      Content: "I've learned that no matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow. I've learned that you can tell a lot about a person by the way he/she handles these three things: a rainy day, lost luggage, and tangled Christmas tree lights. I've learned that regardless of your relationship with your parents, you'll miss them when they're gone from your life. I've learned that making a 'living' is not the same thing as making a 'life'. I've learned that life sometimes gives you a second chance. I've learned that you shouldn't go through life with a catcher's mitt on both hands; you need to be able to throw something back. I've learned that whenever I decide something with an open heart, I usually make the right decision. I've learned that even when I have pains, I don't have to be one. I've learned that every day you should reach out and touch someone. People love a warm hug, or just a friendly pat on the back. I've learned that I still have a lot to learn. I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      Author: "Maya Angelou"
  },
  para3 =
  {
      title: "How to be Happy",
      Content: "Don't compare your actual self to a hypothetical self. Don't drown in a sea of what if's. Don't clutter your mind by imagining other versions of you, in parallel universes, where you made different decisions. The internet age encourages choice and comparison, but don't do this to. yourself. 'Comparison is the thief of joy,' said Theodore Roosevelt. You are you. The past is the past. The only way to make a better life is from inside the present. To focus on regret does nothing but turn that very present into another thing you will wish you did differently. Accept your own reality. Be human enough to make mistakes. Be human enough not to dread the future. Be human enough to be, well, enough. Accepting where you are in life makes it so much easier to be happy for other people without feeling terrible about yourself.",
      Author: "Matt Haig"
  },  
]
const videos = [
  video1 =
  {
      title: "The Psychology of Self Motivation",
      video:"7sxpKhIbr0E",
      description: "'The Psychology of Self-Motivation' by Scott Geller is a book that explains how people can find the motivation to do things on their own, without needing external rewards or pressure. It shows how you can inspire yourself to achieve your goals and make improvements in your life."},

  video2 = 
  {
      title: "How to Calm your Anxiety",
      video: "tEmt1Znux58",
      description: " A neuroscientist provides expert advice on how to effectively deal with anxiety. The talk offers actionable tips and insights rooted in neuroscience to help individuals better control and alleviate their anxiety for improved well-being"},

  video3 = 
  {
      title: "How to Get your Brain to Focus",
      video: "Hu4Yvq-g7_Y",
      description: " Chris Bailey's 'How to Get Your Brain to Focus' is a helpful guide that explains how to pay better attention to your tasks and get more done. It shares practical tips and easy-to-understand insights to help you stay on track and be more productive in your daily life."}
]

const leftarrow = document.getElementById("left");
const rightarrow = document.getElementById("right");
const exit = document.querySelector(".exit");
const modal = document.getElementById("modal");
const games = document.getElementById("games");
const video = document.getElementById("video");
const books = document.getElementById("books");
const music = document.getElementById("music");

let translateYValue = 0;

games.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const pagesbody = document.createElement("div");
  pagesbody.classList.add("pages");
  modal.insertBefore(pagesbody, right);

  modal.classList.add("modalexit");
  document.body.appendChild(overlay);
  setTimeout(() => {
    const numberOfDivs = 4;
    for (let i = 0; i < numberOfDivs; i++) {
      const div = document.createElement("div");
      div.classList.add("page");
      div.innerHTML = `<h1>Game ${i + 1}<\h1>
        <img src="${gamesarray[i].img}" alt="" class="gamesimg">
        <h1 class="gametitle">${gamesarray[i].title}</h1>
<p class="gamedesc">${gamesarray[i].description}</p>
<button id="${gamesarray[i].title} " class="playit">Play the game</button>`;
      pagesbody.appendChild(div);
    }
  }, 1000);
});
video.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const pagesbody = document.createElement("div");
  pagesbody.classList.add("pages");
  modal.insertBefore(pagesbody, right);

  modal.classList.add("modalexit");
  document.body.appendChild(overlay);
  setTimeout(() => {
    const numberOfDivs = 4;
    for (let i = 0; i < numberOfDivs; i++) {
      const div = document.createElement("div");
      div.classList.add("page");
      div.innerHTML = `<h1 class="gametitle">${videos[i].title}</h1>
      <iframe 
      src="https://www.youtube.com/embed/${videos[i].video}" allowfullscreen>
      </iframe>
        
<p class="gamedesc">${videos[i].description}</p>`;
      pagesbody.appendChild(div);
    }
  }, 1000);
});
books.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const pagesbody = document.createElement("div");
  pagesbody.classList.add("pages");
  modal.insertBefore(pagesbody, right);

  modal.classList.add("modalexit");
  document.body.appendChild(overlay);
  setTimeout(() => {
    const numberOfDivs = 4;
    for (let i = 0; i < numberOfDivs; i++) {
      const div = document.createElement("div");
      div.classList.add("page");
      div.innerHTML = ` 
        <h1 class="gametitle">${paragraphs[i].title}</h1>
<p class="gamedesc">${paragraphs[i].Content}</p>
<p>Author:${paragraphs[i].Author}</p>`;
      pagesbody.appendChild(div);
    }
  }, 1000);
});
music.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  const pagesbody = document.createElement("div");
  pagesbody.classList.add("pages");
  modal.insertBefore(pagesbody, right);

  modal.classList.add("modalexit");
  document.body.appendChild(overlay);
  setTimeout(() => {
    const numberOfDivs = 4;
    for (let i = 0; i < numberOfDivs; i++) {
      const div = document.createElement("div");
      div.classList.add("page");
      div.innerHTML = `<h1>Music ${i + 1}<\h1>
        <img src="${musicarray[i].img}" alt="" class="gamesimg">
        <h1 class="gametitle">${musicarray[i].title}</h1>
<p class="gamedesc">${musicarray[i].description}</p>
<div class="player">
<button class="volume-up">&uarr;</button>
<button id="${musicarray[i].title}" class="playit">Play</button>
<button id="${musicarray[i].title}" class="pause">Pause</button>
<button class="volume-down">&darr;</button>
</div>
<div>
</div>`
      pagesbody.appendChild(div);
    }
  }, 1000);
});

leftarrow.addEventListener("click", () => {
  const pages = document.querySelectorAll(".page");
  const maxTranslateY = -(pages.length - 1) * 100;

  if (translateYValue < 0) {
    translateYValue += 100;
    translateYValue = Math.min(0, translateYValue); // Ensure it doesn't go beyond the first page
    pages.forEach((p, i) => {
      p.style.transform = `translateY(${translateYValue}%)`;
    });
  }
});

rightarrow.addEventListener("click", () => {
  const pages = document.querySelectorAll(".page");
  const maxTranslateY = -(pages.length - 1) * 100;

  if (translateYValue > maxTranslateY) {
    translateYValue -= 100;
    translateYValue = Math.max(maxTranslateY, translateYValue); // Ensure it doesn't go beyond the last page
    pages.forEach((p, i) => {
      p.style.transform = `translateY(${translateYValue}%)`;
    });
  }
});
exit.addEventListener("click", () => {
  modal.classList.remove("modalexit");
  const overlayElement = document.body.querySelector(".overlay");

  if (overlayElement) {
    overlayElement.remove();
  }
  setTimeout(() => {
    const elementsToRemove = Array.from(modal.children).filter(
      (child) => child !== exit && child !== rightarrow && child !== leftarrow
    );
    elementsToRemove.forEach((element) => modal.removeChild(element));
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("modal");
  let audioElement = null; 
  let currentVolume = 1.0;

  modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('playit')) {
      const index = Array.from(modal.querySelectorAll('.playit')).indexOf(event.target);
      const audioSrc = musicarray[index].Audio;

      if (audioElement && !audioElement.paused) {
        audioElement.pause();
      }
      audioElement = new Audio(audioSrc);
      audioElement.volume = currentVolume;
      audioElement.play();
    } else if (event.target.classList.contains('pause')) {
      if (audioElement && !audioElement.paused) {
        audioElement.pause();
      }
    } else if (event.target.classList.contains('volume-up')) {
      if (audioElement) {
        currentVolume = Math.min(currentVolume + 0.1, 1.0);
        audioElement.volume = currentVolume;
      }
    } else if (event.target.classList.contains('volume-down')) {
      if (audioElement) {
        currentVolume = Math.max(currentVolume - 0.1, 0.0);
        audioElement.volume = currentVolume;
      }
    }
  });
});

