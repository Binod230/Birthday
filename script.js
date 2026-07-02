
const CONFIG = {
    girlfriendName: "Rekha", // Change to her name
    nickname: "My Beautiful Princess",
    yourName: "Binod",

    relationshipDate: "2026-04-20T00:00:00",

    music: "music/audio.mp3",

    heroDescription: `Thank you for filling my life with love,
happiness, warmth, and endless beautiful memories.

Every day with you feels like a dream
I never want to wake up from.`,

    loveLetter: `Happy Birthday, Rekha ❤️

You are the most beautiful blessing in my life.

Thank you for loving me, supporting me, believing in me and making every ordinary day feel magical.

Every smile of yours makes my world brighter.

I promise to stand beside you through every happiness and every challenge.

I love you today, tomorrow and forever.

Happy Birthday Princess ❤️`
};

// =====================================
// LOADER
// =====================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2000);

    // Set page title
    document.title = `Happy Birthday ${CONFIG.girlfriendName} ❤️`;

    // Hero title
    const heroTitle = document.getElementById("heroTitle");
    if (heroTitle) {
        heroTitle.innerHTML = `Happy Birthday, ${CONFIG.girlfriendName} ❤️`;
    }

    // Hero description
    const heroDescription = document.getElementById("heroDescription");
    if (heroDescription) {
        heroDescription.innerText = CONFIG.heroDescription;
    }

    // Start typing effect
    setTimeout(typeWriter, 2500);

});

// =====================================
// SMOOTH SCROLL
// =====================================

const openBtn = document.getElementById("openHeart");

if (openBtn) {

    openBtn.addEventListener("click", () => {

        document.getElementById("letter").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// =====================================
// MUSIC
// =====================================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music) {
    music.src = CONFIG.music;
}

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

        } else {

            music.pause();

            musicBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

        }

    });

}

// =====================================
// TYPEWRITER
// =====================================

const letter = CONFIG.loveLetter;

const type = document.getElementById("typewriter");

let i = 0;

function typeWriter() {

    if (type && i < letter.length) {

        type.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    }

}

// =====================================
// RELATIONSHIP COUNTER
// =====================================

const relationshipDate = new Date(CONFIG.relationshipDate);

function updateCounter() {

    const now = new Date();

    let diff = now - relationshipDate;

    let seconds = Math.floor(diff / 1000);

    let minutes = Math.floor(seconds / 60);

    let hours = Math.floor(minutes / 60);

    let days = Math.floor(hours / 24);

    let months = Math.floor(days / 30);

    let years = Math.floor(months / 12);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months % 12;
    document.getElementById("days").textContent = days % 30;
    document.getElementById("hours").textContent = hours % 24;
    document.getElementById("minutes").textContent = minutes % 60;
    document.getElementById("seconds").textContent = seconds % 60;

}

updateCounter();

setInterval(updateCounter, 1000);

// =====================================
// FLOATING HEARTS
// =====================================

const container = document.getElementById("hearts-container");

function createHeart() {

    if (!container) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random();
    heart.style.animation = `floatHeart ${5 + Math.random() * 5}s linear forwards`;

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);