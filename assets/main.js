document.addEventListener('DOMContentLoaded', function () {
  const imageContainerEl = document.querySelector('.image-container');
  const prevEl = document.getElementById('Prev');
  const nextEl = document.getElementById('Next');

  if (imageContainerEl && prevEl && nextEl) {
    let x = 0;
    let timer;

    function updateGallery() {
      imageContainerEl.style.transform = 'perspective(1000px) rotateY(' + x + 'deg)';
      timer = setTimeout(function () {
        x -= 45;
        updateGallery();
      }, 3000);
    }

    prevEl.addEventListener('click', function () {
      x += 45;
      clearTimeout(timer);
      updateGallery();
    });

    nextEl.addEventListener('click', function () {
      x -= 45;
      clearTimeout(timer);
      updateGallery();
    });

    updateGallery();
  }

 const songImage = document.getElementById('song-image');
const songName = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const songGenre = document.getElementById('song-genre');
const songMeta = document.getElementById('song-meta');

const prevBtn = document.getElementById('prev-song');
const nextBtn = document.getElementById('next-song');
const shuffleBtn = document.getElementById('shuffle-song');
const playPauseBtn = document.getElementById('playpause-song');

const playIcon = playPauseBtn?.querySelector('i');

const audio = new Audio();
let songs = [];
let currentSongIndex = 0;
let isPlaying = false;

function renderSong() {
  if (!songs.length) return;

  const song = songs[currentSongIndex];

  songImage.src = song.cover;
  songName.textContent = song.title;
  songArtist.textContent = song.artist;
  songGenre.textContent = song.genre;
  songMeta.textContent = `${currentSongIndex + 1} / ${songs.length}`;

  audio.src = song.audio;
  audio.load();

  isPlaying = false;
  updatePlayIcon();
}

function updatePlayIcon() {
  if (!playIcon) return;
  playIcon.className = isPlaying ? 'bx bx-pause' : 'bx bx-play';
}

function playSong() {
  audio.play();
  isPlaying = true;
  updatePlayIcon();
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayIcon();
}

function togglePlayPause() {
  if (!audio.src) return;
  isPlaying ? pauseSong() : playSong();
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  renderSong();
  playSong();
}

function prevSong() {
  currentSongIndex =
    (currentSongIndex - 1 + songs.length) % songs.length;
  renderSong();
  playSong();
}

function shuffleSong() {
  if (songs.length <= 1) return;
  let nextIndex = currentSongIndex;
  while (nextIndex === currentSongIndex) {
    nextIndex = Math.floor(Math.random() * songs.length);
  }
  currentSongIndex = nextIndex;
  renderSong();
  playSong();
}

prevBtn?.addEventListener('click', prevSong);
nextBtn?.addEventListener('click', nextSong);
shuffleBtn?.addEventListener('click', shuffleSong);
playPauseBtn?.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong);

fetch('/music.json')
  .then(res => res.json())
  .then(data => {
    songs = data.songs || [];
    renderSong();
  })
  .catch(() => {});

  var body = document.body;
  var toggle = document.getElementById('theme-toggle');

  function setIcon(mode) {
    if (!toggle) return;
    var icon = toggle.querySelector('i');
    if (!icon) return;
    if (mode === 'dark') {
      icon.classList.remove('bx-moon');
      icon.classList.add('bx-sun');
    } else {
      icon.classList.remove('bx-sun');
      icon.classList.add('bx-moon');
    }
  }

  var saved = localStorage.getItem('theme');
  var initial = saved === 'dark' ? 'dark' : 'light';

  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(initial === 'dark' ? 'dark-mode' : 'light-mode');
  setIcon(initial);

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        setIcon('light');
      } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        setIcon('dark');
      }
    });
  }

  var navLinks = document.querySelectorAll('.navbar a');
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var file = href.split('/').pop();
    if (file === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
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
      question: "What is my current program?",
      answers: [
        { text: "MSc in Human Computer Interaction", correct: false },
        { text: "MA in Graphic Design", correct: false },
        { text: "MSc in Computer Science", correct: false },
        { text: "MSc in Interactive Digital Media", correct: true }
      ]
    },
    {
       question: "What do my feature projects have in common?",
        answers: [
            { text: "They are featured", correct: false },
            { text: "Nothing", correct: false },
            { text: "They all focus on AR/XR/multimedia/coding (coming soon...)", correct: true },
            { text: "They are all blog stories", correct: false }
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
      question: "What accent color is in my website?",
        answers: [
            { text: "Purple", correct: false },
            { text: "Orange", correct: true },
            { text: "Yellow", correct: false },
            { text: "Pink", correct: false }
        ]
    },
    {
       question: "Which social media platform is linked to my website?",
        answers: [
            { text: "Instagram", correct: false },
            { text: "Facebook", correct: false },
            { text: "TikTok", correct: false },
            { text: "LinkedIn", correct: true }
        ]
    },
    {
       question: "Are you excited to see the impact I can make?",
        answers: [
            { text: "Very excited", correct: true },
            { text: "Thrilled", correct: true },
            { text: "Extremely eager", correct: true },
            { text: "Totally", correct: true }
        ]
    }
  ];

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  if (!questionElement || !answerButtons || !nextButton) return;

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    showQuestion();
  }

  function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(function (answer) {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);

      if (answer.correct) {
        button.dataset.correct = "true";
      }

      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
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
    questionElement.textContent = "You scored " + score + "/" + questions.length + ".";
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });

  startQuiz();
});


const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorElement = document.getElementById("form-error");
const statusElement = document.getElementById("form-status");
const countElement = document.getElementById("message-count");
let messageCount = Number(localStorage.getItem("messageCount")) || 0;

if (countElement) {
  countElement.textContent = messageCount;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let messages = [];

  if (nameInput.value.trim() === "") {
    messages.push("Name is required");
  }

  const email = emailInput.value.trim();
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    messages.push("Please enter a valid email address");
  }

  if (messageInput.value.trim().length < 10) {
    messages.push("Message must be at least 10 characters");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
    errorElement.classList.add("show");
    statusElement.textContent = "";
    return;
  }

  errorElement.innerText = "";
  errorElement.classList.remove("show");
  statusElement.textContent = "Sending…";

  try { 
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error("Form submission failed");

    statusElement.textContent = "Your message was sent.";
    form.reset();

    messageCount++; 
    localStorage.setItem("messageCount", messageCount);
    countElement.textContent = messageCount;
  } catch (err) {
    console.error(err);
    statusElement.textContent =
      "Something went wrong. Please try again.";
  }
});
