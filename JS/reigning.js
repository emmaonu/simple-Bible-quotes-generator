let quoteEl = document.getElementById("quote");
let generateEl = document.getElementById("generate-el");
let verseEl = document.getElementById("verse");
let toggleEl = document.getElementById("toggle-bar");
let navItemEl = document.querySelector(".nav-item");
console.log(verse);

let quotes = [
  {
    quote:
      '"Behold, a king will reign in righteousness, And prince will rule justice. ”',
    verse: "Isaiah 32:1 NKJV",
  },
  {
    quote: '"The LORD reigns forever and ever”',
    verse: "Exodus 15:18 NIV",
  },
  {
    quote:
      "“so that as sin reigned in death, even so grace might reign through righteousness to eternal life through Jesus Christ our Lord ”",
    verse: "Romans 5:21 NKJV",
  },
  {
    quote:
      '"You are already full! You are already rich! You have reigned as kings without us - and indeed I could wish you did reign, that we also might reign with you!"',
    verse: "1 Corinthians 4:8 NKJV",
  },
  {
    quote: '"God reigns over the nations; God sits on His holy throne.”',
    verse: "Psalms 47:8 NKJV",
  },
  {
    quote:
      '"If you want to reign in life, do not sit on your hands. Instead, work hard at doing what is right, for the slacker will end up working to make someone else succeed."',
    verse: "Proverbs 12:24 TPT",
  },
  {
    quote:
      '"The LORD shall reign forever - Your God, O Zion, to all generations. Praise the LORD”',
    verse: "Psalms 146:10 NKJV",
  },
  {
    quote: '"For He must reign till He has put all enemies under His feet.”',
    verse: "1 Corinthians 15:25 NKJV",
  },
  {
    quote:
      '"For if by the one man offense death reigned through the one, much more those who receive abundance of grace and of the gift of righteousness will reign in life through the One, Jesus Christ."',
    verse: "Romans 5:17 NKJV",
  },
  {
    quote:
      '"The LORD said to my Lord, "Sit at My right hand, Till I make your enemies Your footstool"',
    verse: "Psalms 110:1 NKJV",
  },
  {
    quote:
      '"If we endure, We shall also reign with Him. If we deny Him, He will also deny us."',
    verse: "2 Timothy 2:12 NKJV",
  },
  {
    quote:
      '"And have made us kings and priest to our God; And we shall reign on the earth"',
    verse: "Revelation 5:10 NKJV",
  },
  {
    quote:
      '"The LORD reigns, He is clothed with majesty; The LORD is clothed, He has girded Himself with strength. Surely the world is established, so that it cannot be moved."',
    verse: "Psalms 93:1 NKJV",
  },

  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
  // {
  //     quote:'',
  //     verse: ""
  // },
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
