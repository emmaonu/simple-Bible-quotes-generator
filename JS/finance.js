let quoteEl = document.getElementById("quote");
let generateEl = document.getElementById("generate-el");
let verseEl = document.getElementById("verse");
let toggleEl = document.getElementById("toggle-bar");
let navItemEl = document.querySelector(".nav-item");
console.log(verse);

let quotes = [
  {
    quote:
      '"And my God shall supply all your need according to His riches in glory by Christ Jesus."',
    verse: "Philippians 4:19 NKJV",
  },
  {
    quote:
      '"And we know that all things work together for good to those who love God, to those who are the called according to His purpose."',
    verse: "Romans 8:28 NKJV",
  },
  {
    quote:
      '"But seek first his Kingdom and his righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',
    verse: "Matthew 6:33-34 NIV",
  },
  {
    quote:
      '"Your gates will always stand open, they will never be shut, day or night, so that people may bring you the wealth of the nations their kings led in triumphal procession."',
    verse: " Isaiah 60:11 NIV",
  },
  {
    quote:
      '"And you shall remember the LORD your God, for it is He who gives you power to get wealth, that He may establish His covenant which He swore to your fathers, as it is this day."',
    verse: "Deuteronomy 8:18 NKJV",
  },

  {
    quote:
      '" Glorify God with all your wealth, honoring him with your firstfruits with every increase that comes to you."',
    verse: "Proverbs 3:9 TPT",
  },
  {
    quote: '"Riches and honor are with me. Enduring riches and righteousness"',
    verse: "Proverbs 8:18 NKJV",
  },
  {
    quote:
      '"Both riches and honor come from You. And You reign over all. In your hand is power and might; In Your hand it is to make great and to give strength to all"',
    verse: "1 Chronicles 29:12 NKJV",
  },
  {
    quote:
      '"But seek first the kingdom of God and His righteousness, and all these things shall be added to you."',
    verse: "Matthew 6:33 NKJV",
  },
  {
    quote:
      '"Let giving flow from your heart, not from a sense of religious duty. Let it spring up freely from the joy of giving - all because God loves hilarious generosity!"',
    verse: "2 Corinthians 9:7 TPT",
  },
  {
    quote:
      '"Bring all the tithes into the storehouse, That there may be food in My house, And try Me now in this, Says the LORD of host, if I will not open for you the windows of heaven and pour out for you such blessing that there will be not be room enough to receive it."',
    verse: "Malachi 3:10 NKJV",
  },
  {
    quote:
      "A good man leaves an inheritance to his children's children, but the wealth of the sinner is stored up for the righteous",
    verse: "Proverbs 13:22 NKJV",
  },
  {
    quote:
      '"The blessing of the LORD makes one rich and He adds no sorrow with it."',
    verse: "Proverbs 10:22 NKJV",
  },
  {
    quote:
      '"And it is a good thing to receive wealth from God and the good health to enjoy it. To enjoy your work and accept your lot in life - this is indeed a gift from God."',
    verse: "Ecclesiastes 5:19 NLT",
  },
  {
    quote:
      '"Those who love me gain great wealth and a glorious inheritance, and I will fill their lives with treasures."',
    verse: "Proverbs 8:21 TPT",
  },
  {
    quote:
      '"For God is the one who provides seed for the farmer and then bread to eat. In the same way, he will provide and increase your resources and then produce a great harvest of generosity in you."',
    verse: "2 Corinthians 9:10 NLT",
  },
  {
    quote:
      '"By humility and the fear of the LORD, are riches and honor and life."',
    verse: "Proverbs 22:4 NKJV",
  },
  {
    quote:
      '"I will give you the treasures of darkness and hidden riches of secret places that you may know that I, the LORD who call you by your name am the God of Israel."',
    verse: "Isaiah 45:3 NKJV",
  },
  {
    quote:
      '"Great blessing and wealth fills the house of the wise, for their integrity endures forever."',
    verse: "Psalms 112: 3 TPT",
  },
  {
    quote:
      '"Send your grains across the seas and in time, profits will flow back to you."',
    verse: "Ecclesiastes 11:1 NLT",
  },
  {
    quote:
      '"Rich blessings overflow with every encounter with you, and you placed a royal crown of gold upon his head."',
    verse: "Psalms 21:3 TPT",
  },
  {
    quote:
      '"The trustworthy person will get a rich reward, but a person who wants quick riches will get into trouble."',
    verse: "Proverbs 28: 20 NLT",
  },
  {
    quote: '"God will bless them and cause them to multiply and prosper."',
    verse: "Psalms 107:38 TPT",
  },
  {
    quote:
      '"Blessed is the man who walks not in the counsel of the ungodly, nor stands in the oath of sinners, not sits in the seat of the scornful;"',
    verse: "Psalms 1:1 NKJV",
  },
  {
    quote:
      '"Beloved, I pray that you may prosper in all things and be in health just as your soul prospers."',
    verse: " 3 John 1:2 NKJV",
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
