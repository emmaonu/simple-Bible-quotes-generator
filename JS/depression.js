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
      '"The LORD is near to those who have a broken heart and saves such as have a contrite spirit."',
    verse: "Psalms 34:18 NKJV",
  },
  {
    quote:
      "“Peace I leave with you; my peace I give you. I do not give you as the word gives. Do not let your hearts be troubled and do not be afraid.”",
    verse: "John 14:27 NIV",
  },
  {
    quote:
      '"Pour out all your worries and stress upon him and leave them there, for he always tenderly cares for you."',
    verse: "1 Peter 5:7 TPT",
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
      '"Be anxious for nothing, but in everything by prayer and supplication with thanksgiving, let your requests be made known to God, and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus."',
    verse: "Philippians 4:6-7 NKJV",
  },
  {
    quote:
      '"Comes to Me, all you who labor and are heavy laden, and I will give you rest."',
    verse: "Matthew 11:28 NKJV",
  },
  {
    quote:
      '"And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, not crying. There shall be no more pain, for the former things have passed away."',
    verse: "Revelation 21:4 NKJV",
  },
  {
    quote:
      '"You have turned for me my mourning into dancing; You have put off my sackcloth and clothed me with gladness,"',
    verse: "Psalms 30:11 NKJV",
  },
  {
    quote:
      '"Why are you cast down, O my soul? and why are you disquieted within me? Hope in God; for I shall yet praise Him, the help of my countenance and my God."',
    verse: "Psalms 42:11 NKJV",
  },
  {
    quote:
      "'So here's what I've learned through it all: Leave all your cares and anxieties at the feet of the Lord, and measureless grace will strengthen you'",
    verse: "Psalms 55:22 TPT",
  },
  {
    quote:
      '"Even if my father and mother abandon me, the LORD will hold me close."',
    verse: "Psalms 27:10 NLT",
  },
  {
    quote:
      '"Though we experience every kind of pressure, we are not crushed. At times we do not know what to do, but quitting is not an option."',
    verse: "2 Corinthians 4:8 TPT",
  },
  {
    quote:
      '"But those who wait on the LORD shall renew their strength; they shall mount up with wings like eagles, they shall run and not be weary, they shall walk and not faint."',
    verse: "Isaiah 40:31 NKJV",
  },
  {
    quote:
      '"My fellow believers, when it seems as though you are facing nothing but difficulties, see it as an invaluable opportunity to experience the greatest joy that you can!"',
    verse: "James 1:2 TPT",
  },
  {
    quote:
      '"Wait on the LORD, Be of good courage and He shall strengthen your heart; wait I say, on the LORD."',
    verse: "Psalms 27:14 NKJV",
  },
  {
    quote:
      '"In the multitude of my anxieties within me, your comfort delight my soul."',
    verse: "Psalms 91:19 NKJV",
  },
  {
    quote:
      '"Therefore you now have sorrow but I will see you again and your heart will rejoice and joy no one will take from you."',
    verse: "John 16:22 NKJV",
  },
  {
    quote: '"He heals the brokenhearted and binds up their wounds."',
    verse: "Psalms 147:3 NKJV",
  },
  {
    quote:
      '"Keep your thoughts continually fixed on the all that is authentic and real, honorable and admirable, beautiful and respectful, pure and holy, merciful and kind. And fasten your thoughts on every glorious work of God, praising him always."',
    verse: "Philippians 4:8 TPT",
  },
  {
    quote: '"God is our refuge and strength, a very present help in trouble."',
    verse: "Psalms 46:1 NKJV",
  },
  {
    quote:
      '"For I know the though that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope."',
    verse: "Jeremiah 29:11 NKJV",
  },
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
console.log(quote);
console.log(generateEl);
