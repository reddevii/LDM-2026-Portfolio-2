document.addEventListener('DOMContentLoaded', function () {
  //Welcome back to my code. I have updated basically...everything. I wanted to make a more professional-looking portfolio, so I revamped everything in HTML, CSS, and JavaScript. I am very pleased with the outcome. I had some difficulties in some areas, but otherwise, I think this is a functional and fun portfolio. // 
  
  //Rotating image gallery on home page. It auto-rotates, but you can also manually rotate it by pressing the previous and next buttons at the bottom. The gallery is to have a small glimspe into the first semester as an IDM student. //
  const imageContainerEl = document.querySelector('.image-container');
  const prevEl = document.getElementById('Prev');
  const nextEl = document.getElementById('Next');

 //This is for running the gallery when all of its elements are loaded on the page. It also includes the rotation angle and timeout.//
  if (imageContainerEl && prevEl && nextEl) {
    let x = 0;
    let timer;

    //This is the update setting that controls the gallery's rotation and restarts its rotation.//
    function updateGallery() {
      imageContainerEl.style.transform = 'perspective(1000px) rotateY(' + x + 'deg)';
      //3 seconds.//
      timer = setTimeout(function () {
        x -= 45;
        updateGallery();
      }, 3000);
    }

//This is to rotate it backwards when you hit the previous button--which stops the rotation on click.//
    prevEl.addEventListener('click', function () {
      x += 45;
      clearTimeout(timer);
      updateGallery();
    });

    //Same thing but for the next button--forward.//
    nextEl.addEventListener('click', function () {
      x -= 45;
      clearTimeout(timer);
      updateGallery();
    });

    updateGallery();
  }

 /* My playlist on the about page. The story is, I tried using the Spotify API as you mentioned previously, but it wouldn't work! I tried for hours, and I even created a Spotify Developer profile. It wouldn't load, so I tried connecting to Spotify through a third-party called Last.fm, but it still wouldn't work. So, it was a little disappointing, but I made it look better, and I fixed the JSON file.
What this does is load the data from the JSON and uses the next, previous, and shuffle buttons. I am currently adding MP3 files downloaded from the internet. If you are reading this and haven't seen them yet, however, I can only get downloads for some songs, so it is taking longer than I thought. I will have to change each one with the downloads I can get. */

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

const audio = new Audio(); //for the audio mp3 downloads//
let songs = [];
let currentSongIndex = 0;
let isPlaying = false;

//current song info//
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

function playSong() {  //this is for the play button to make sure it works when clicked and plays the audio.//
  audio.play();
  isPlaying = true;
  updatePlayIcon();
}

function pauseSong() { //same thing but for the pause button.//
  audio.pause();
  isPlaying = false;
  updatePlayIcon();
}

function togglePlayPause() {
  if (!audio.src) return;
  isPlaying ? pauseSong() : playSong();
}

//moves to next song and does a loop when finished.//
function nextSong() {
  if (!songs.length) return;
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  renderSong();
  playSong(); //auto-play when skipping
}

//moves to the previous song and loops to the end if you go back far enough.//
function prevSong() {
  if (!songs.length) return;
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  renderSong();
  playSong(); //auto-play when skipping
}

//random song shuffle//
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

//pretty self-explanatory--buttons prev, next, play/pause, shuffle for music.//
prevBtn?.addEventListener('click', prevSong);
nextBtn?.addEventListener('click', nextSong);
shuffleBtn?.addEventListener('click', shuffleSong);
playPauseBtn?.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong); //once the song ends, it will automatically go to the next song.//

//fetch the data from the music.json file
fetch('music.json')
  .then(res => res.json())
  .then(data => {
    songs = data.songs || [];
    renderSong();
  })
  .catch(function () {}); //if the json cant load it will fail.//

  //Light and dark mode! This one is funny because I have a white-and-black portfolio with orange accents, so the white parts change to black or a dark brown.//
  var body = document.body;
  var toggle = document.getElementById('theme-toggle');

  //changes the little icon depending on whether you are on light or dark mode.//
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

  //default to light theme//
  var saved = localStorage.getItem('theme');
  var initial = saved === 'dark' ? 'dark' : 'light';

  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(initial === 'dark' ? 'dark-mode' : 'light-mode');
  setIcon(initial);

  //toggles the mode when you click the button.//
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

 //When I first made this portfolio, I didn't realise that when you click into another page, the orange highlight didn't follow to that page on the nav bar and only stayed on home, so I changed that.//
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

//This is my portfolio quiz in my projects page. It had 7 multiple-choice questions and a next button. Once you are finished, your score will pop up.//
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

  //connects it to the HTML//
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  if (!questionElement || !answerButtons || !nextButton) return;

  let currentQuestionIndex = 0;  //the current question youre on//
  let score = 0;  //tracks correct answers//

  //starts/restarts the quiz after you finish it//
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
    questionElement.textContent = questionNo + ". " + currentQuestion.question;  //does the question and numbers them//

    //button for each possible answer//
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

    //reveals correct answer and stops buttons//
    Array.from(answerButtons.children).forEach(function (button) {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });

    //next button//
    nextButton.style.display = "block";
  }

//final score and the next button becomes play again//
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

//validation for my contact form.//
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

  if (nameInput.value.trim() === "") { //name validation//
    messages.push("Name is required");
  }

  const email = emailInput.value.trim(); //email validation//
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    messages.push("Please enter a valid email address");
  }

  if (messageInput.value.trim().length < 10) { //this is so that I get actual written responses to email and not one-word messages.//
    messages.push("Message must be at least 10 characters");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", "); //if validation fails, it will show (hopefully) an error message and not send the message.//
    errorElement.classList.add("show");
    statusElement.textContent = "";
    return;
  }

  //shows sending status//
  errorElement.innerText = "";
  errorElement.classList.remove("show");
  statusElement.textContent = "Sending…";

  try { 
    //this is for submitting the form through a fetch function. If the server has an error, it will treat it as a failure. And if you succeed, then you'll get a success message.//
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
      "Something went wrong. Please try again";
  }
});
