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
      '"Fight the good fight of faith, lay hold on eternal life, to which you were also called and have confessed the good confession in the presence of many witnesses."',
    verse: " 1 Timothy 6:12 NKJV",
  },
  {
    quote:
      '"Let no one despise your youth but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity."',
    verse: " 1 Timothy 4:12 NKJV",
  },
  {
    quote:
      '"But the path of the just is like the shining sun, That shines ever brighter unto the perfect day. "',
    verse: "Proverbs 4:18 NKJV",
  },
  {
    quote:
      '"And it is impossible to please God without faith. Anyone who wants to come to him must believe that God exists and that he rewards those who sincerely seek him."',
    verse: "Hebrews 11:6 NLT",
  },
  {
    quote:
      '"For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast."',
    verse: " Ephesians 2:8-9 NKJV",
  },
  {
    quote:
      "'Now faith brings our hopes into reality and becomes the foundation needed to acquire the things we long for. It is all the evidence required to prove what is still unseen'",
    verse: "Hebrews 11:1 TPT",
  },
  {
    quote:
      "'By faith we understand that the worlds were framed by the word of God, so that the things which are seen were not made of things which are visible.'",
    verse: "Hebrews 11:3 NKJV",
  },
  {
    quote:
      "'Then Jesus told them, I tell you the truth, if you have faith and don't doubt, you can do things like this and much more. You can even say to this mountain, May you be lifted up and thrown into the sea, and it will happen.'",
    verse: "Matthew 21:21 NLT",
  },
  {
    quote:
      "'looking unto Jesus, the author and finisher of our faith, who for the joy that was set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God.'",
    verse: "Hebrews 12:2 NKJV",
  },
  {
    quote:
      "'But let him ask in faith, with no doubting , for he who doubts is like a wave of the sea driven and tossed by the wind. For let not that man suppose that he will receive anything from the Lord'",
    verse: "James 1:6-7 NKJV",
  },
  {
    quote: "'So then faith comes by hearing and hearing by the word of God.'",
    verse: "Romans 10:17 NKJV",
  },
  {
    quote: "'For we walk by faith, not by sight.'",
    verse: "2 Corinthians 5:7 NKJV",
  },
  {
    quote:
      "'that the genuineness of your faith, being much more precious than gold that perishes, though it is tested by fire, may be found to praise, honor, and glory at the revelation of Jesus Christ'",
    verse: "1 Peter 1:7 NKJV",
  },
  {
    quote:
      "'For just as a human body without the spirit is a dead corpse, so faith without the expression of good works is dead!'",
    verse: "James 2:26 TPT",
  },
  {
    quote:
      "'By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of this household, by which he condemned the world and became heir of the righteousness which is according to faith.'",
    verse: "Hebrews 11:7 NKJV",
  },
  {
    quote:
      "'above all, taking the shield of faith with which you will be able to quench all the fiery darts of the wicked one.'",
    verse: "Ephesians 6:16 NKJV",
  },
  {
    quote:
      "'Let us hold fast the confession of our hope without wavering, for He who promised is faithful.'",
    verse: "Hebrews 10:23 NKJV",
  },
  {
    quote:
      "'Therefore, having been justified by faith, we have peace with God through our Lord Jesus Christ.'",
    verse: "Romans 5:1 NKJV",
  },
  {
    quote:
      "'For in it the righteousness of God is rewarded from faith to faith; as it is written, The just shall live by faith'",
    verse: "Romans 1:17 NKJV",
  },
  {
    quote:
      "'For in Christ Jesus neither circumcision nor uncircumcision avails anything, but faith working through love.'",
    verse: "Galatians 5:6 NKJV",
  },
  //   {
  //     quote: "''",
  //     verse: "",
  //   },
  //   {
  //     quote: "''",
  //     verse: "",
  //   },
  //   {
  //     quote: "''",
  //     verse: "",
  //   },
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
