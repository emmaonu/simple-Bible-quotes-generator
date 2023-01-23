let quoteEl = document.getElementById("quote");
let generateEl = document.getElementById("generate-el");
let verseEl = document.getElementById("verse");
let audioEl = document.getElementById("audio-el");
let toggleEl = document.getElementById("toggle-bar");
let navItemEl = document.querySelector(".nav-item");
// console.log(audioEl);

let quotes = [
  {
    quote:
      '"The Spirit of the LORD shall rest upon Him, The Spirit of Wisdom and understanding, The Spirit of counsel and might, The Spirit of knowledge and of the fear of the LORD"',
    verse: " Isaiah 11:2 NKJV",
  },
  {
    quote:
      '"If any of your lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him."',
    verse: " James 1:5 NKJV",
  },
  {
    quote:
      '"For wisdom is better than rubies, and all the things one may desire cannot be compared with her. "',
    verse: "Proverbs 8:11 NKJV",
  },
  {
    quote:
      '"Wisdom is the most valuable commodity-so buy it! Revelation-knowledge is what you need-so invest in it!"',
    verse: "Proverbs 4:7 TPT",
  },
  {
    quote:
      '"If you want to grow in wisdom spend time with the wise. Walk with the wicked and you will eventually become just like them."',
    verse: " Proverbs 13:20 TPT",
  },
  {
    quote:
      "'The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is understanding.'",
    verse: "Proverbs 9:10 NKJV",
  },
  {
    quote:
      "'When wisdom wins your heart and revelation breaks in, true pleasure enters your soul.'",
    verse: "Proverbs 2:10 TPT",
  },
  {
    quote: "'Blessed are those who find wisdom, those who gain understanding'",
    verse: "Proverbs 3:13 NIV",
  },
  {
    quote:
      "'Teach us to realize the brevity of life, so that we may grow in wisdom.'",
    verse: "Psalms 90:12 NLT",
  },
  {
    quote:
      "'The fear of the LORD is the beginning of wisdom; A good understanding have all those who do His commandments. His praise endures forever.'",
    verse: "Psalms 111:10 NKJV",
  },
  {
    quote:
      "'The LORD by wisdom founded the earth; by understanding He established the heavens.'",
    verse: "Proverbs 3:19 NKJV",
  },
  {
    quote:
      "'For wisdom is a defense as money is a defense, but the excellence of knowledge is that wisdom give life to those who have it.'",
    verse: "Ecclesiastes 7:12 NKJV NKJV",
  },
  {
    quote:
      "'For the wisdom of this world is foolishness with God. For it is written, 'He catches the wise in their own craftiness''",
    verse: "1 Corinthians 3:19 NKJV",
  },
  {
    quote:
      "'Do yourself a favour and love wisdom. Learn all you can, then watch your life flourish and prosper.'",
    verse: "Proverbs 19:8 TPT",
  },
  {
    quote:
      "' For the LORD gives wisdom; from His mouth come knowledge and understanding;'",
    verse: "Proverbs 2:6 NKJV",
  },
  {
    quote:
      "'How much better to get wisdom than gold! And to get understanding is to be chose rather than silver.'",
    verse: "Proverbs 16:16 NKJV",
  },
  {
    quote:
      "'Wisdom is better than weapon of war; but one sinner destroys much good'",
    verse: "Ecclesiastes 9:18 NKJV",
  },
  {
    quote:
      "'Wisdom is good with an inheritance, and profitable to those who see the sun.'",
    verse: "Ecclesiastes 7:11 NKJV",
  },
  {
    quote:
      "'However, we speak wisdom among those who are mature, yet not the wisdom of this age, not of the rulers of this age, who are coming to nothing.'",
    verse: "1 Corinthians 2:6 NKJV",
  },
  //   {
  //     quote: "''",
  //     verse: "",
  //   },
  //   {
  //     quote: "''",
  //     verse: "",
  //   },
];

console.log(quotes);

generateEl.addEventListener("click", () => {
  let randomScript = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = quotes[randomScript].quote;
  verseEl.innerText = quotes[randomScript].verse;

  //   audioEl.addEventListener("onclick", () => {
  //     let tts = new SpeechSynthesisUtterance();
  //     tts.text = quoteEl.innerText;
  //     window.speechSynthesis.speak(tts);
  //   });
});
function audioButton() {
  let tts = new SpeechSynthesisUtterance();
  tts.text = `${quoteEl.innerText} ${verseEl.innerText}`;
  window.speechSynthesis.speak(tts);
}

toggleEl.addEventListener("click", () => {
  navItemEl.classList.toggle("active");
  //   console.log("checking");
});

function cross(x) {
  x.classList.toggle("change");
}

console.log(quote);
console.log(generateEl);
