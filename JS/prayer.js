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
      '"When you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you. ”',
    verse: "Matthew 6:6NIV",
  },
  {
    quote:
      '"When you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words. Do not be like them, for your Father knows what you need before you ask him.”',
    verse: "Matthew 6:7-8NIV",
  },
  {
    quote:
      "“Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receive; the one who seeks finds; and to the one who knocks, the door will be opened. ”",
    verse: "Matthew 7:7-8NIV",
  },
  {
    quote:
      '"Before they call I will answer; while they are still speaking I will hear "',
    verse: "Isaiah 65:24 NIV",
  },
  {
    quote:
      '"Then you will call, and the LORD will answer; you will cry for help, and he will say: Here am I.”',
    verse: "Isaiah 58:9 NIV",
  },
  {
    quote:
      '"May we shout for joy over your victory and lift up our banners in the name of our God. May the LORD grant all your requests."',
    verse: "Psalm 20:5 NIV",
  },
  {
    quote:
      '"Jabez cried out to the God of Israel, ‘Oh, that you would bless me and enlarge my territory! Let your hand be with me, and keep me from harm so that I will be free from pain’. And God granted his request”',
    verse: "1 Chronicles 4:10 NIV",
  },
  {
    quote:
      '"Therefore I want the men everywhere to pray, lifting up holy hands without anger or disputing”',
    verse: "1 Timothy 2:8 NIV",
  },
  {
    quote:
      '"Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus;"',
    verse: " 1 Thessalonians 5:16-18 NIV",
  },
  {
    quote: '"Devote yourselves to prayer, being watchful and thankful;"',
    verse: "Colossians 4:2 NIV",
  },
  {
    quote: '"Be joyful in hope, patient in affliction, faithful in prayer;"',
    verse: "Romans 12:12 NIV",
  },
  {
    quote:
      '"They all joined together constantly in prayer, along with the women and Mary the mother of Jesus, and with his brothers;"',
    verse: "Acts 1:14 NIV",
  },
  {
    quote: '"But Jesus often withdrew to lonely places and prayed."',
    verse: "Luke 5:16 NIV",
  },
  {
    quote:
      '"Hear my cry for help, my King and my God, for to you I pray. In the morning, LORD, you hear my voice; in the morning I lay my request before you and wait expectantly"',
    verse: "Psalms 5:2 NIV",
  },
  {
    quote:
      '"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans"',
    verse: "Romans 8:26NIV",
  },
  {
    quote:
      '"This is the confidence we have in approaching God that if we ask anything according to his will, he hears us. And if we know that he hears us whatever we ask we know that we have what we asked of him."',
    verse: "1 John 5:14-15 NIV",
  },
  {
    quote:
      '"Dear friends, if our hearts do not condemn us, we have confidence before God and receive from him anything we ask, because we keep his commands and do what pleases him"',
    verse: "1 John 3:21-22 NIV",
  },
  {
    quote:
      "“Therefore I tell you, whatever you ask for in prayer believe that you have received it, and it will be yours.”",
    verse: "Mark 11:24 NIV",
  },
  {
    quote: "“You may ask me for anything in my name, and I will do it.”",
    verse: "John 14:14 NIV",
  },
  {
    quote:
      '“Do not worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done."',
    verse: "Philippians 4:6 NLT",
  },
  {
    quote:
      "“If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.”",
    verse: "John 15:7 NIV",
  },
  {
    quote:
      '"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."',
    verse: "James 1:5 NIV",
  },
  {
    quote: '"The prayer of a righteous person is power and effective."',
    verse: "James 5:16 NIV",
  },
  {
    quote:
      '"Therefore, I encourage the men to pray on every occasion with hands lifted to God in worship with clean hearts, free from frustration and strife."',
    verse: "1 Timothy 2:8 TPT",
  },
  {
    quote:
      '"Devote yourselves to prayer with alert mind and a thankful heart."',
    verse: "Colossians 4:2 NLT",
  },
  {
    quote:
      '"Now to Him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us."',
    verse: "Ephesians 3:20 NKJV",
  },
  {
    quote:
      "'Pray in the Spirit at all times and on every occasion. Stay alert and be persistent in your prayers for all believers everywhere.'",
    verse: "Ephesians 6:18 NLT",
  },
  {
    quote:
      "'You can pray for anything, and if you have faith, you will receive it.'",
    verse: "Matthew 21:22 NLT",
  },
  {
    quote:
      "'Keep watch and pray, so that you will not give to temptation. For the spirit is willing, but the body is weak!'",
    verse: "Matthew 26:41 NLT",
  },
  {
    quote:
      "'I love the LORD because he hears my voice and my prayer for mercy.'",
    verse: "Psalms 116:1 NLT",
  },
  {
    quote:
      "'The LORD is far from the wicked, but he hears the prayers of the righteous.'",
    verse: "Proverbs 15:29 NLT",
  },
  {
    quote: "'Hear me as I pray, O LORD, be merciful and answer me!'",
    verse: "Psalms 27:7 NLT",
  },
  {
    quote:
      "'LORD, you must hear my prayer, for you are faithful to your promises. Answer my cry, O righteous God!'",
    verse: "Psalms 143:1 TPT",
  },
  {
    quote:
      "'I prayed to the LORD, and he answered me. He freed me from all my fears.'",
    verse: "Psalms 34:4 NLT",
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
console.log(quote);
console.log(generateEl);
