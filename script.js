let quoteEl = document.getElementById("quote")
let generateEl = document.getElementById("generate-el");
let verseEl = document.getElementById("verse")
console.log(verse)
let quotes = [
        {
            quote:   '"When you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father, who sees what is done in secret, will reward you. ”',
            verse: "Matthew 6:6NIV"
        },
        {
            quote:  '"When you pray, do not keep on babbling like pagans, for they think they will be heard because of their many words. Do not be like them, for your Father knows what you need before you ask him.”',
            verse: "Matthew 6:7-8NIV"
        },
        {
            quote: '“Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receive; the one who seeks finds; and to the one who knocks, the door will be opened. ”',
            verse: "Matthew 7:7-8NIV"
        },
        {
            quote:'"Before they call I will answer; while they are still speaking I will hear "',
            verse: "Isaiah 65:24 NIV"
        },
        {
            quote:'"Then you will call, and the LORD will answer; you will cry for help, and he will say: Here am I.”',
            verse: "Isaiah 58:9 NIV"
        },
        {
            quote:'"May we shout for joy over your victory and lift up our banners in the name of our God. May the LORD grant all your requests."',
            verse: "Psalm 20:5 NIV"
        },
        {
            quote:'"Jabez cried out to the God of Israel, ‘Oh, that you would bless me and enlarge my territory! Let your hand be with me, and keep me from harm so that I will be free from pain’. And God granted his request”',
            verse: "1 Chronicles 4:10 NIV"
        },
        {
            quote:'"Therefore I want the men everywhere to pray, lifting up holy hands without anger or disputing”',
            verse: "1 Timothy 2:8 NIV"
        },
        {
            quote:'"Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus;"',
            verse: " 1 Thessalonians 5:16-18 NIV"
        },
        {
            quote:'"Devote yourselves to prayer, being watchful and thankful;"',
            verse: "Colossians 4:2 NIV"
        },
        {
            quote:'"Be joyful in hope, patient in affliction, faithful in prayer;"',
            verse: "Romans 12:12 NIV"
        },
        {
            quote:'"They all joined together constantly in prayer, along with the women and Mary the mother of Jesus, and with his brothers;"',
            verse: "Acts 1:14 NIV"
        },
        {
            quote:'"But Jesus often withdrew to lonely places and prayed."',
            verse: "Luke 5:16 NIV"
        },
        {
            quote:'"Hear my cry for help, my King and my God, for to you I pray. In the morning, LORD, you hear my voice; in the morning I lay my request before you and wait expectantly"',
            verse: "Psalm 5:2 NIV"
        },
        {
            quote:'"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans"',
            verse: "Romans 8:26NIV"
        },
        {
            quote:'"This is the confidence we have in approaching God that if we ask anything according to his will, he hears us. And if we know that he hears us whatever we ask we know that we have what we asked of him."',
            verse: "1 John 5:14-15 NIV"
        },
        {
            quote:'"Dear friends, if our hearts do not condemn us, we have confidence before God and receive from him anything we ask, because we keep his commands and do what pleases him"',
            verse: "1 John 3:21-22 NIV"
        },
        {
            quote:'"Let us draw near to God with a sincere heart and with the full assurance that faith brings"',
            verse: "Hebrews 10:22 NIV"
        },
        {
            quote:'"Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need"',
            verse: "- Hebrews 4:16 NIV"
        },
        {
            quote:'“If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heave give good gifts to those who ask him!"',
            verse: "Matthew 7:11 NIV"
        },
        {
            quote:'“Therefore I tell you, whatever you ask for in prayer believe that you have received it, and it will be yours.”',
            verse: "Mark 11:24 NIV"
        },
        {
            quote:'“You may ask me for anything in my name, and I will do it.”',
            verse: "John 14:14 NIV"
        },
        {
            quote:'“My God will meet all your needs according to the riches of his glory in Christ Jesus."',
            verse: "Philippians 4:19 NIV"
        },
        {
            quote:'“If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.”',
            verse: "John 15:7 NIV"
        },
        {
            quote:'“Peace I leave with you; my peace I give you. I do not give you as the word gives. Do not let your hearts be troubled and do not be afraid.”',
            verse: "John 14:27 NIV"
        },
        {
            quote:'"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you."',
            verse: "James 1:5 NIV"
        },
        {
            quote:'"The prayer of a righteous person is power and effective."',
            verse: "James 5:16 NIV"
        },
        {
            quote:'"The LORD will fight for you, and you shall hold your peace."',
            verse: "Exodus 14:14 NKJV"
        },
        {
            quote:'"For bodily exercise profits a little, but godliness is profitable for all things, having promise of the life that now is and of what which is to come."',
            verse: "1 Timothy 4:8 NKJV"
        },
        {
            quote:'"Therefore, I encourage the men to pray on every occasion with hands lifted to God in worship with clean hearts, free from frustration and strife."',
            verse: "1 Timothy 2:8 TPT"
        },
        {
            quote:'"Now godliness with contentment is great gain. For we brought nothing into this world, and it is certain we can carry nothing out."',
            verse: " 1 Timothy 6:6-7 NKJV"
        },
        {
            quote:'"Fight the good fight of faith, lay hold on eternal life, to which you were also called and have confessed the good confession in the presence of many witnesses."',
            verse: " 1 Timothy 6:12 NKJV"
        },
        {
            quote:'"For God has not given us a spirit of fear, but of power and of love and of a sound mind."',
            verse: " 2 Timothy 1: 7 NKJV"
        },
        {
            quote:'"I can do all things through Christ who strengthens me."',
            verse: "Philippians 4:13 NKJV"
        },
        {
            quote:'"And my God shall supply all your need according to His riches in glory by Christ Jesus."',
            verse: "Philippians 4:19 NKJV"
        },
        {
            quote:'"Set your mind on things above, not on things on the earth."',
            verse: "Colossians 3:2 NKJV"
        },
        {
            quote:'"But now is the time to get rid of anger, rage, malicious behaviour, slander and dirty language."',
            verse: "Colossians 3:8 NLT"
        },
        {
            quote:'"Live wisely among those who are not believers, and make the most of every opportunity."',
            verse: "Colossians 4:5 NLT"
        },
        {
            quote:'"Devote yourselves to prayer with alert mind and a thankful alert."',
            verse: "Colossians 4:2 NLT"
        },
        {
            quote:'"Let no one despise your youth but be an example to the believers in word, in conduct, in love, in spirit, in faith, in purity."',
            verse: " 1 Timothy 4:12 NKJV"
        },
        {
            quote:'"But the path of the just is like the shining sun, That shines ever brighter unto the perfect. "',
            verse: "Proverbs 4:18 NKJV"
        },
        {
            quote:'"Keep your heart with all diligence, for out of it springs the issues of life."',
            verse: "Proverbs 4:23 NKJV"
        },
        {
            quote:'"For I consider that the suffering of this present time are not worthy to be compared with the glory which shall be revealed in us."',
            verse: "Romans 8:18 NKJV"
        },
        {
            quote:'"And we know that all things work together for good to those who love God, to those who are the called according to His purpose."',
            verse: "Romans 8:28 NKJV"
        },
        {
            quote:'"For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor present nor things to come nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord."',
            verse: " Romans 8:38 NKJV"
        },
        {
            quote:'"For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope."',
            verse: "Jeremiah 29:11 NKJV"
        },
        {
            quote:'"…Man shall not live by bread alone, but by every word that proceeds from the mouth of God."',
            verse: "Matthew 4:4 NIV"
        },
        {
            quote:'"But seek first his Kingdom and his righteousness, and all these things will be given to you as well. Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',
            verse: "Matthew 6:33-34 NIV"
        },
        {
            quote:'"Therefore I tell you, do not worry about your life, what you will eat or drink or about your body, what you will wear. Is not life more than food, and the body more than clothes?"',
            verse: "Matthew 6:25 NIV"
        },
        {
            quote:'"And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek Him."',
            verse: "Hebrews 11:6 NIV"
        },
        {
            quote:'"Your gates will always stand open, they will never be shut, day or night, so that people may bring you the wealth of the nations their kings led in triumphal procession."',
            verse: " Isaiah 60:11 NIV"
        },
        {
            quote:'"Study this Book of Instruction continually. Mediate on it day and night so you will be sure to obey everything written in it. Only then will you prosper and succeed in all you do."',
            verse: "Joshua 1:8 NLT"
        },
        {
            quote:'"And you shall remember the LORD your God, for it is He who gives you power to get wealth, that He may establish His covenant which He swore to your fathers, as it is this day."',
            verse: "Deuteronomy 8:18 NKJV"
        },
        {
            quote:'"The blessing of the LORD makes one rich, And He adds no sorrow with it."',
            verse: " Proverbs 10:22 NKJV"
        },
        {
            quote:'"Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in Him."',
            verse: " 1 John 2:15 NKJV"
        },
        {
            quote:'"You are of God, little Children, and have overcome them, because He who is in you is greater than he who is in the world."',
            verse: "1 John 4:4 NKJV"
        },
        {
            quote:'"Beloved, let us love one another for love is of God; and everyone who loves is born of God and knows God."',
            verse: " 1 John 4:17 NKJV"
        },
        {
            quote:'"Beloved, I pray that you may prosper in all things and be in health just as your soul prospers."',
            verse: " 3 John 1:2 NKJV"
        },
        {
            quote:'"For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast."',
            verse: " Ephesians 2:8-9 NKJV"
        },
        {
            quote:'"Now to Him who is able to do exceedingly abundantly above all that we ask or think, according to the power that works in us."',
            verse: "Ephesians 3:20 NKJV"
        },
        {
            quote:'"Therefore do not be unwise but understand what the will of the Lord is."',
            verse: " Ephesians 5:17 NKJV"
        },
        {
            quote:'"Children, obey your parents in the Lord, for this is right. Honor your father and mother, which is the first commandment with a promise: that it may be well with you and you may live long on the earth."',
            verse: "Ephesians 6:1-3 NKJV"
        },
        {
            quote:'"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new."',
            verse: "2 Corinthians 5:16 NKJV"
        },
        {
            quote:'"So let each one give as he purposes in his heart, not grudgingly or of necessity, for God loves a cheerful giver."',
            verse: "2 Corinthians 9:7 NKJV"
        },
        {
            quote:'"We destroy every proud obstacle that keeps people from knowing God. We capture their rebellious thoughts and teach them to obey Christ."',
            verse: " 2 Corinthians 10:5 NLT"
        },
        {
            quote:'"The LORD is on my side; I will not fear. What can man do to me?"',
            verse: "Psalm118:6 NKJV"
        },
        {
            quote:'"A man heart plans his way, But the LORD directs his steps."',
            verse: "Proverbs 16:9 NKJV"
        },
        {
            quote:'"He who dwells in the secret place of the Most High Shall abide under the shadow of the Almighty"',
            verse: "Psalm 91:1 NKJV"
        }
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
      
    ]

    console.log(quotes)

  


    generateEl.addEventListener("click", () => {
        let randomScript = Math.floor(Math.random() * quotes.length)

        quoteEl.innerText = quotes[randomScript].quote;
        verseEl.innerText = quotes[randomScript].verse;
    })
    console.log(quote)
    console.log(generateEl)

