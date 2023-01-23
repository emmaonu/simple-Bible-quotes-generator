let quoteEl = document.getElementById("quote");
let generateEl = document.getElementById("generate-el");
let verseEl = document.getElementById("verse");
let toggleEl = document.getElementById("toggle-bar");
let navItemEl = document.querySelector(".nav-item");
console.log(verse);

// let menuBtn = document.getElementById("menuBtn");
// let navBar = document.getElementById("navBar");

let quotes = [
  {
    quote:
      '"Before they call I will answer; while they are still speaking I will hear "',
    verse: "Isaiah 65:24 NIV",
  },
  {
    quote:
      "“Peace I leave with you; my peace I give you. I do not give you as the word gives. Do not let your hearts be troubled and do not be afraid.”",
    verse: "John 14:27 NIV",
  },
  {
    quote: '"The LORD will fight for you, and you shall hold your peace."',
    verse: "Exodus 14:14 NKJV",
  },

  {
    quote:
      '"For God has not given us a spirit of fear, but of power and of love and of a sound mind."',
    verse: " 2 Timothy 1:7 NKJV",
  },

  {
    quote:
      '"For I consider that the suffering of this present time are not worthy to be compared with the glory which shall be revealed in us."',
    verse: "Romans 8:18 NKJV",
  },
  {
    quote:
      '"And we know that all things work together for good to those who love God, to those who are the called according to His purpose."',
    verse: "Romans 8:28 NKJV",
  },
  {
    quote:
      '"For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor present nor things to come nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord."',
    verse: " Romans 8:38 NKJV",
  },
  {
    quote:
      '"Therefore I tell you, do not worry about your life, what you will eat or drink or about your body, what you will wear. Is not life more than food, and the body more than clothes?"',
    verse: "Matthew 6:25 NIV",
  },

  {
    quote:
      '"You are of God, little Children, and have overcome them, because He who is in you is greater than he who is in the world."',
    verse: "1 John 4:4 NKJV",
  },

  {
    quote: '"The LORD is on my side; I will not fear. What can man do to me?"',
    verse: "Psalms 118:6 NKJV",
  },
  {
    quote:
      '"He who dwells in the secret place of the Most High Shall abide under the shadow of the Almighty"',
    verse: "Psalm 91:1 NKJV",
  },
  {
    quote:
      '"There  is no fear in love, but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love."',
    verse: "1 John 4:18 NKJV",
  },
  {
    quote:
      "'But in the day that i'm afraid, I lay all my fears before you and trust in you with all my heart.'",
    verse: "Psalms 56:3 TPT",
  },
  {
    quote:
      '"I sought the LORD, and He heard me and delivered me from all my fears."',
    verse: "Psalms 34:4 NKJV",
  },
  {
    quote:
      '"This is my command be strong and courageous! do not be afraid or discouraged. For the LORD your God is with you wherever you go"',
    verse: "Joshua 1:9 NLT",
  },
  {
    quote:
      '"The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction."',
    verse: "Proverbs 1:7 NLT",
  },
  {
    quote:
      '"Fear not, for I am with you, be not dismayed, for I am your God. I will strengthen you, yes, I will help you, I will uphold you with My righteous right hand."',
    verse: "isaiah 41:10 NKJV",
  },
  {
    quote:
      '"Be strong and of good courage, do not fear not be afraid of them, for the LORD your God, He is the One who goes with you. He will not leave you nor forsake you."',
    verse: "Deuteronomy 23:4 NKJV",
  },
  {
    quote:
      '"Yea, though I walk through the valley of the shadow of death, I will fear no evil; for you are with me; your rod and your staff, they comfort me."',
    verse: "Psalms 23:4 NKJV",
  },
  {
    quote: '"The LORD is on my side; I will not fear. What can man do to me?"',
    verse: "Psalms 118:6 NKJV",
  },
  {
    quote:
      '"The LORD is my light and my salvation; Whom shall I fear? The LORD is the strength of my life; of whom shall I be afraid?"',
    verse: "Psalms 27:1 NKJV",
  },
  {
    quote:
      "'For I hold you by your right hand - I, the LORD your God. and I say to you, Don't be afraid. I am here to help you.'",
    verse: "Isaiah 41:13 NLT",
  },
  {
    quote:
      '"For you did not receive the spirit of bondage again to fear, but you received the Spirit of adoption by whom we cry our "Abba, Father""',
    verse: "Romans 8:15 NKJV",
  },
  {
    quote:
      "'God, you're such a safe and powerful place to find refuge! You're a proven help in time of trouble more than enough and always available whenever I need you.'",
    verse: "Psalms 46:1 TPT",
  },
  {
    quote:
      '"Though an army may encamp against me, My heart shall not fear, though way may rise against me, in this I will be confident."',
    verse: "Psalms 27:3 NKJV",
  },
  {
    quote:
      '"Do not be afraid of sudden terror, nor of trouble from the wicked when it comes;"',
    verse: "Proverbs 3:25 NKJV",
  },
  {
    quote:
      '"You shall not be afraid of the terror by night, Nor of the arrow that files by day, Nor of the pestilence that walks in darkness, Nor of the destruction that lays waste at Noonday."',
    verse: "Psalms 91:5-6 NKJV",
  },
  {
    quote:
      '"And do not fear those who kill the body but cannot kill the soul. But rather fear Him who is able to destroy both soul and body in hell."',
    verse: "Matthew 10:28 NKJV",
  },
  {
    quote:
      '"You shall tread upon the lion and the cobra, the young lion and the serpent you shall trample underfoot. "Because he has set his love upon Me, I will set him on high, because he has known My name.""',
    verse: "Psalms 91:13-14 NKJV",
  },
  {
    quote:
      '"When you lie down, you will not be afraid; Yes, you will lie down and your sleep will be sweet."',
    verse: "Proverbs 3:24 NKJV",
  },
  {
    quote:
      '"So, do not ever be afraid, dearest friends! Your loving Father joyously gives you his kingdom with all its promises!"',
    verse: "Luke 12:32 TPT",
  },
  {
    quote:
      '"But even if you happen to suffer for doing what is right, you will have the joyful experience of the blessing of God. and do not be intimidated or terrified by those who would terrify you."',
    verse: "1 Peter 3:14 TPT",
  },
  {
    quote:
      '"Say to those who are fearful-hearted, "Be strong, do not fear! Behold, your God will come with vengeance, with the recompense of God; He will come and save you.""',
    verse: "Isaiah 35:4 NKJV",
  },
  //   {
  //     quote: '""',
  //     verse: "",
  //   },
  //   {
  //     quote: '""',
  //     verse: "",
  //   },
  //   {
  //     quote: '""',
  //     verse: "",
  //   },
  //   {
  //     quote: '""',
  //     verse: "",
  //   },
];

console.log(quotes);

generateEl.addEventListener("click", () => {
  let randomScript = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = quotes[randomScript].quote;
  verseEl.innerText = quotes[randomScript].verse;
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
console.log(quote);
console.log(generateEl);
