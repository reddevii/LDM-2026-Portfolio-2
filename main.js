"use strict";

document.addEventListener("DOMContentLoaded", function () {
  initialiseTheme();
  initialiseMusicPlayer();
  initialiseNavigation();
  initialiseQuiz();
  initialiseContactForm();
});

/* =========================================================
   LIGHT AND DARK MODE
   ========================================================= */

function initialiseTheme() {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) {
    return;
  }

  const icon = toggle.querySelector("i");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const shouldUseDarkMode =
    savedTheme === "dark" ||
    (savedTheme === null && prefersDark);

  document.body.classList.toggle("dark-mode", shouldUseDarkMode);
  document.body.classList.toggle("light-mode", !shouldUseDarkMode);

  updateThemeButton();

  toggle.addEventListener("click", function () {
    const darkModeIsActive = document.body.classList.contains("dark-mode");
    const nextModeIsDark = !darkModeIsActive;

    document.body.classList.toggle("dark-mode", nextModeIsDark);
    document.body.classList.toggle("light-mode", !nextModeIsDark);

    localStorage.setItem(
      "portfolio-theme",
      nextModeIsDark ? "dark" : "light"
    );

    updateThemeButton();
  });

  function updateThemeButton() {
    const darkModeIsActive = document.body.classList.contains("dark-mode");

    toggle.setAttribute(
      "aria-label",
      darkModeIsActive ? "Switch to light mode" : "Switch to dark mode"
    );

    if (icon) {
      icon.className = darkModeIsActive ? "bx bx-sun" : "bx bx-moon";
    }
  }
}

/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initialiseNavigation() {
  const navigationLinks = document.querySelectorAll(".navbar a");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  navigationLinks.forEach(function (link) {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) {
      return;
    }

    const linkedFile = href.split("/").pop().split("#")[0];
    link.classList.toggle("active", linkedFile === currentFile);
  });
}

/* =========================================================
   MUSIC PLAYER
   music.json stays in the main project folder
   ========================================================= */

function initialiseMusicPlayer() {
  const songImage = document.getElementById("song-image");
  const songName = document.getElementById("song-name");
  const songArtist = document.getElementById("song-artist");
  const songGenre = document.getElementById("song-genre");
  const songMeta = document.getElementById("song-meta");
  const previousButton = document.getElementById("prev-song");
  const nextButton = document.getElementById("next-song");
  const shuffleButton = document.getElementById("shuffle-song");
  const playPauseButton = document.getElementById("playpause-song");

  if (
    !songImage ||
    !songName ||
    !songArtist ||
    !songGenre ||
    !songMeta ||
    !previousButton ||
    !nextButton ||
    !shuffleButton ||
    !playPauseButton
  ) {
    return;
  }

  const audio = document.getElementById("music-audio") || new Audio();
  const playIcon = playPauseButton.querySelector("i");

  let songs = [];
  let currentSongIndex = 0;
  let isPlaying = false;

  fetch("./music.json")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Music data could not be loaded.");
      }

      return response.json();
    })
    .then(function (data) {
      songs = normaliseSongs(data);

      if (!songs.length) {
        throw new Error("No songs were found in music.json.");
      }

      renderSong();
    })
    .catch(function (error) {
      console.error(error);
      songName.textContent = "Music unavailable";
      songArtist.textContent = "Check music.json";
      songGenre.textContent = "";
      songMeta.textContent = "";
    });

  previousButton.addEventListener("click", function () {
    if (!songs.length) {
      return;
    }

    currentSongIndex =
      (currentSongIndex - 1 + songs.length) % songs.length;

    renderSong();
    playSong();
  });

  nextButton.addEventListener("click", function () {
    if (!songs.length) {
      return;
    }

    currentSongIndex = (currentSongIndex + 1) % songs.length;
    renderSong();
    playSong();
  });

  shuffleButton.addEventListener("click", function () {
    if (songs.length <= 1) {
      return;
    }

    let nextIndex = currentSongIndex;

    while (nextIndex === currentSongIndex) {
      nextIndex = Math.floor(Math.random() * songs.length);
    }

    currentSongIndex = nextIndex;
    renderSong();
    playSong();
  });

  playPauseButton.addEventListener("click", function () {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

  audio.addEventListener("ended", function () {
    if (!songs.length) {
      return;
    }

    currentSongIndex = (currentSongIndex + 1) % songs.length;
    renderSong();
    playSong();
  });

  audio.addEventListener("play", function () {
    isPlaying = true;
    updatePlayIcon();
  });

  audio.addEventListener("pause", function () {
    isPlaying = false;
    updatePlayIcon();
  });

  function normaliseSongs(data) {
    const rawSongs = Array.isArray(data)
      ? data
      : Array.isArray(data.songs)
        ? data.songs
        : [];

    return rawSongs
      .map(function (song, index) {
        return {
          title: song.title || song.name || `Song ${index + 1}`,
          artist: song.artist || "Unknown artist",
          genre: song.genre || "",
          cover: normaliseImagePath(song.cover || song.image || ""),
          audio: normaliseAudioPath(song.audio || song.src || song.file || "")
        };
      })
      .filter(function (song) {
        return Boolean(song.audio);
      });
  }

  function normaliseImagePath(path) {
    if (!path) {
      return "./assets/images/music-reliquia.jpg";
    }

    if (
      path.startsWith("http://") ||
      path.startsWith("https://") ||
      path.startsWith("./") ||
      path.startsWith("../") ||
      path.startsWith("/")
    ) {
      return path;
    }

    if (path.startsWith("assets/")) {
      return `./${path}`;
    }

    return `./assets/images/${path}`;
  }

  function normaliseAudioPath(path) {
    if (!path) {
      return "";
    }

    if (
      path.startsWith("http://") ||
      path.startsWith("https://") ||
      path.startsWith("./") ||
      path.startsWith("../") ||
      path.startsWith("/")
    ) {
      return path;
    }

    if (path.startsWith("assets/")) {
      return `./${path}`;
    }

    return `./assets/audio/${path}`;
  }

  function renderSong() {
    const song = songs[currentSongIndex];

    if (!song) {
      return;
    }

    pauseSong();

    songImage.src = song.cover;
    songImage.alt = `${song.title} cover`;
    songName.textContent = song.title;
    songArtist.textContent = song.artist;
    songGenre.textContent = song.genre;
    songMeta.textContent = `${currentSongIndex + 1} / ${songs.length}`;

    audio.src = song.audio;
    audio.load();
  }

  async function playSong() {
    if (!audio.src) {
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error("The song could not be played.", error);
      isPlaying = false;
      updatePlayIcon();
    }
  }

  function pauseSong() {
    audio.pause();
  }

  function updatePlayIcon() {
    playPauseButton.setAttribute(
      "aria-label",
      isPlaying ? "Pause song" : "Play song"
    );

    if (playIcon) {
      playIcon.className = isPlaying ? "bx bx-pause" : "bx bx-play";
    }
  }
}

/* =========================================================
   PORTFOLIO QUIZ
   ========================================================= */

function initialiseQuiz() {
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  if (!questionElement || !answerButtons || !nextButton) {
    return;
  }

  const questions = [
    {
      question: "Which university did I graduate from?",
      answers: [
        { text: "Kansas State University", correct: true },
        { text: "University of Kansas", correct: false },
        { text: "University of Michigan", correct: false },
        { text: "Ohio State University", correct: false }
      ]
    },
    {
      question: "What is my current programme?",
      answers: [
        { text: "MSc in Human Computer Interaction", correct: false },
        { text: "MA in Graphic Design", correct: false },
        { text: "MSc in Computer Science", correct: false },
        { text: "MSc in Interactive Digital Media", correct: true }
      ]
    },
    {
      question: "Where do I currently live?",
      answers: [
        { text: "Busan, South Korea", correct: false },
        { text: "Overland Park, Kansas", correct: false },
        { text: "Dublin, Ireland", correct: true },
        { text: "Kansas City, Kansas", correct: false }
      ]
    },
    {
      question: "What accent colour is used on my website?",
      answers: [
        { text: "Purple", correct: false },
        { text: "Orange", correct: true },
        { text: "Yellow", correct: false },
        { text: "Pink", correct: false }
      ]
    },
    {
      question: "Which social platform is linked on my website?",
      answers: [
        { text: "Instagram", correct: false },
        { text: "Facebook", correct: false },
        { text: "TikTok", correct: false },
        { text: "LinkedIn", correct: true }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
  }

  function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent =
      `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(function (answer) {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.className = "btn";

      if (answer.correct) {
        button.dataset.correct = "true";
      }

      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }

  function selectAnswer(event) {
    const selectedButton = event.currentTarget;
    const isCorrect = selectedButton.dataset.correct === "true";

    selectedButton.classList.add(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      score += 1;
    }

    Array.from(answerButtons.children).forEach(function (button) {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }

      button.disabled = true;
    });

    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score}/${questions.length}.`;
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
  }

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
  }

  nextButton.addEventListener("click", function () {
    if (nextButton.textContent === "Play Again") {
      startQuiz();
      return;
    }

    currentQuestionIndex += 1;

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });

  startQuiz();
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

function initialiseContactForm() {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorElement = document.getElementById("form-error");
  const statusElement = document.getElementById("form-status");

  if (
    !form ||
    !nameInput ||
    !emailInput ||
    !messageInput ||
    !errorElement ||
    !statusElement
  ) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const errors = [];
    const email = emailInput.value.trim();

    if (!nameInput.value.trim()) {
      errors.push("Name is required");
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address");
    }

    if (messageInput.value.trim().length < 10) {
      errors.push("Message must be at least 10 characters");
    }

    if (errors.length) {
      errorElement.textContent = errors.join(", ");
      errorElement.classList.add("show");
      statusElement.textContent = "";
      return;
    }

    errorElement.textContent = "";
    errorElement.classList.remove("show");
    statusElement.textContent = "Sending…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      statusElement.textContent = "Your message was sent.";
      form.reset();
    } catch (error) {
      console.error(error);
      statusElement.textContent = "Something went wrong. Please try again.";
    }
  });
}