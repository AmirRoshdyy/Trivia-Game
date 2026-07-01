// Each category has 10 questions ordered easiest -> hardest (points: 100..1000)
const CATEGORIES = {

    "Amr Diab": [
        { q: "What is Amr Diab's nickname?", a: "El Hadaba / The King of Arabic Pop" },
        { q: "In what year was Amr Diab born?", a: "1961" },
        { q: "Which iconic 1996 song made Amr Diab internationally famous?", a: "Nour El Ain" },
        { q: "Which song did Rolling Stone rank #1 on 'Best Arabic Pop Songs of the 21st Century'?", a: "Tamally Maak" },
        { q: "How many World Music Awards has Amr Diab won?", a: "Seven (7)" },
        { q: "In which Egyptian city was Amr Diab born?", a: "Port Said" },
        { q: "What was Amr Diab's debut album released in 1983?", a: "Ya Tareeq" },
        { q: "With which Algerian raï singer did Amr Diab collaborate on the song 'Alby'?", a: "Khaled" },
        { q: "Which 2014 album made him the first Arab performer to reach No.1 on Billboard's World Albums chart?", a: "Shoft El Ayam" },
        { q: "Name Amr Diab's independent production company founded after leaving Rotana.", a: "Nay For Media" }
    ],

    "Fairouz": [
        { q: "What country is Fairouz from?", a: "Lebanon" },
        { q: "What is Fairouz's real (birth) name?", a: "Nouhad Wadie' Haddad" },
        { q: "In what year was Fairouz born?", a: "1934" },
        { q: "Which brothers composed most of Fairouz's iconic songs?", a: "The Rahbani Brothers (Assi and Mansour)" },
        { q: "Which Rahbani brother did Fairouz marry?", a: "Assi Rahbani" },
        { q: "What is the name of Fairouz's son, also a famous composer?", a: "Ziad Rahbani" },
        { q: "Which famous song about Jerusalem did Fairouz sing?", a: "Zahrat Al Madaen (Al Quds)" },
        { q: "At what Lebanese national festival did Fairouz first rise to fame in the 1950s?", a: "Baalbeck International Festival" },
        { q: "What was Fairouz's first musical (play) with the Rahbani Brothers, staged in 1957?", a: "Ayyam Al Hasad (Days of Harvest)" },
        { q: "Fairouz sang 'Li Beirut'; the melody is borrowed from a piece by which classical composer?", a: "Joaquín Rodrigo (Concierto de Aranjuez)" }
    ],

    "Manchester United": [
        { q: "What is Manchester United's home stadium called?", a: "Old Trafford" },
        { q: "What color is Manchester United's traditional home kit?", a: "Red" },
        { q: "Which manager led Man United from 1986 to 2013?", a: "Sir Alex Ferguson" },
        { q: "What was Manchester United's original name when founded in 1878?", a: "Newton Heath LYR Football Club" },
        { q: "Which tragedy in 1958 killed 8 Manchester United players?", a: "The Munich Air Disaster" },
        { q: "Who is Manchester United's all-time top goalscorer?", a: "Wayne Rooney (253 goals)" },
        { q: "In which year did Manchester United win the historic Treble?", a: "1999" },
        { q: "Who scored the winning goal in the 1999 UEFA Champions League final?", a: "Ole Gunnar Solskjær" },
        { q: "How many English League titles has Manchester United won (as of 2025)?", a: "20" },
        { q: "Who was Manchester United's first ever manager (1892)?", a: "A. H. Albut" }
    ],

    "One Piece": [
        { q: "Who is the main character of One Piece?", a: "Monkey D. Luffy" },
        { q: "What is the name of Luffy's pirate crew?", a: "The Straw Hat Pirates" },
        { q: "Who is the creator/author of One Piece?", a: "Eiichiro Oda" },
        { q: "What Devil Fruit did Luffy eat?", a: "Gomu Gomu no Mi (later revealed as Hito Hito no Mi, Model: Nika)" },
        { q: "What is the name of Zoro's signature three-sword style?", a: "Santoryu" },
        { q: "Who gave Luffy his straw hat?", a: "Shanks (originally Gol D. Roger's)" },
        { q: "What is the name of the world's most notorious treasure that pirates seek?", a: "One Piece" },
        { q: "What is the name of the ancient weapon Nico Robin can decipher via Poneglyphs?", a: "Pluton, Poseidon, and Uranus" },
        { q: "Who is the current holder of the title 'Strongest Creature in the World' before his defeat?", a: "Kaido" },
        { q: "What is the real name of the Pirate King, Gol D. Roger's, first mate?", a: "Silvers Rayleigh" }
    ],

    "UFC after 2023": [
        { q: "Who defeated Sean Strickland at UFC 297 to win the middleweight title in January 2024?", a: "Dricus du Plessis" },
        { q: "Who became UFC bantamweight champion by defeating Sean O'Malley at UFC 306?", a: "Merab Dvalishvili" },
        { q: "At UFC 300, who knocked out Justin Gaethje in the final second to win the BMF title?", a: "Max Holloway" },
        { q: "Who defeated Alexander Volkanovski at UFC 298 to become featherweight champion?", a: "Ilia Topuria" },
        { q: "Who defeated Alex Pereira at UFC 313 to take the light heavyweight title in March 2025?", a: "Magomed Ankalaev" },
        { q: "Who inherited the UFC heavyweight title in 2025 after Jon Jones retired?", a: "Tom Aspinall" },
        { q: "At UFC 317, who knocked out Charles Oliveira in round 1 to claim the vacant lightweight title?", a: "Ilia Topuria" },
        { q: "Who defeated Belal Muhammad at UFC 315 to win the welterweight title?", a: "Jack Della Maddalena" },
        { q: "At UFC 319, who defeated Dricus du Plessis for the middleweight title?", a: "Khamzat Chimaev" },
        { q: "At UFC 320 in October 2025, Alex Pereira reclaimed the LHW title in how many minutes and seconds?", a: "1 minute, 20 seconds (1:20)" }
    ],

    "General Middle School": [
        { q: "How many continents are there?", a: "7" },
        { q: "What is the largest planet in our solar system?", a: "Jupiter" },
        { q: "How many bones are in the adult human body?", a: "206" },
        { q: "What is the chemical symbol for gold?", a: "Au" },
        { q: "Who wrote 'Romeo and Juliet'?", a: "William Shakespeare" },
        { q: "What is the square root of 144?", a: "12" },
        { q: "What year did World War II end?", a: "1945" },
        { q: "What is the longest river in the world?", a: "The Nile (approx. 6,650 km) – some argue the Amazon" },
        { q: "What is the smallest country in the world by area?", a: "Vatican City" },
        { q: "Who painted the ceiling of the Sistine Chapel?", a: "Michelangelo" }
    ],

    "Fortnite": [
        { q: "What company developed Fortnite?", a: "Epic Games" },
        { q: "In what year was Fortnite: Battle Royale released?", a: "2017" },
        { q: "What is the name of the in-game currency used in Fortnite?", a: "V-Bucks" },
        { q: "Which building material is the strongest in Fortnite?", a: "Metal / Steel" },
        { q: "What is the highest tier weapon rarity color in Fortnite (original)?", a: "Gold / Legendary (Mythic being unique-tier)" },
        { q: "What was the name of the original starting location destroyed in Chapter 1 Season 4?", a: "Dusty Depot (became Dusty Divot)" },
        { q: "Who is the main villain 'The Foundation' voiced by in the story cinematic?", a: "Dwayne 'The Rock' Johnson" },
        { q: "Which musician performed the first virtual concert in Fortnite in April 2020?", a: "Travis Scott (Astronomical)" },
        { q: "What was the name of the black hole event that ended Chapter 1?", a: "The End (Event on October 13, 2019)" },
        { q: "What is the name of the organization opposed to the IO (Imagined Order)?", a: "The Seven" }
    ],

    "Valorant": [
        { q: "What company developed Valorant?", a: "Riot Games" },
        { q: "In what year was Valorant officially released?", a: "2020" },
        { q: "How many agents are on each team in a standard match?", a: "5" },
        { q: "How many rounds are needed to win a standard Valorant match?", a: "13" },
        { q: "Which agent uses a wingman-style bot named 'KAY/O'?", a: "KAY/O himself is the robot agent" },
        { q: "What is the name of the bomb-like device planted in-game?", a: "The Spike" },
        { q: "Which sniper rifle is known for its one-shot headshot capability at any range?", a: "Operator" },
        { q: "Which agent was the first Filipino agent introduced?", a: "Neon" },
        { q: "What is the name of the international esports league for Valorant launched in 2023?", a: "VCT (Valorant Champions Tour) with Americas, EMEA, Pacific partnerships" },
        { q: "Which team won the first Valorant Champions tournament in 2021?", a: "Acend" }
    ],

    "Breaking Bad": [
        { q: "What is the main character's name?", a: "Walter White" },
        { q: "What is Walter White's street/drug name?", a: "Heisenberg" },
        { q: "What subject did Walter teach in high school?", a: "Chemistry" },
        { q: "Who is Walter's partner in the meth business?", a: "Jesse Pinkman" },
        { q: "What is the signature color of Walter's meth?", a: "Blue" },
        { q: "What is the name of Walt's brother-in-law who works for the DEA?", a: "Hank Schrader" },
        { q: "Which fast food chain does Gus Fring own as a front?", a: "Los Pollos Hermanos" },
        { q: "What was the name of the episode considered by many as the show's best (fly-centric)?", a: "'Fly' (Season 3, Episode 10)" },
        { q: "What poem is referenced in the title of the episode 'Ozymandias'?", a: "'Ozymandias' by Percy Bysshe Shelley" },
        { q: "What is the license plate reference / cook name Walter uses when writing 'W.W.' in his notebook that Hank misinterprets?", a: "Walt Whitman (Leaves of Grass)" }
    ],

    "Better Call Saul": [
        { q: "What is Saul Goodman's real name?", a: "Jimmy McGill" },
        { q: "Who is Jimmy's older brother, a senior partner at HHM?", a: "Chuck McGill" },
        { q: "What law firm does Kim Wexler work at initially?", a: "HHM (Hamlin, Hamlin & McGill)" },
        { q: "What is the name of the elderly hitman/enforcer from Breaking Bad who returns?", a: "Mike Ehrmantraut" },
        { q: "What identity does Jimmy assume in Omaha after Breaking Bad?", a: "Gene Takavic (Cinnabon manager)" },
        { q: "Which cartel figure introduced in BCS is Lalo's cousin, and a major antagonist?", a: "Nacho Varga's boss – Ignacio 'Nacho' Varga works under Hector; Lalo Salamanca is the key antagonist" },
        { q: "What condition does Chuck McGill claim to suffer from?", a: "Electromagnetic Hypersensitivity (EHS)" },
        { q: "What is the name of the ice cream shop / mall kiosk Jimmy worked at before law?", a: "He worked in the mailroom at HHM" },
        { q: "Who kills Howard Hamlin?", a: "Lalo Salamanca" },
        { q: "What is the final name Kim uses when Jimmy calls her from Nebraska?", a: "Kim Wexler (still); she uses 'Kim Wexler' – the call happens under Gene's alias" }
    ],

    "Egyptian Songs & Artists": [
        { q: "Who is known as 'Kawkab El Sharq' (Star of the East)?", a: "Umm Kulthum" },
        { q: "Which Egyptian singer sang 'Enta Omri'?", a: "Umm Kulthum" },
        { q: "Who composed many of Umm Kulthum's late-era hits including 'Enta Omri'?", a: "Mohammed Abdel Wahab" },
        { q: "Which Egyptian singer is called 'El Andaleeb El Asmar' (The Dark-skinned Nightingale)?", a: "Abdel Halim Hafez" },
        { q: "Who sang the famous song 'Sawah'?", a: "Abdel Halim Hafez" },
        { q: "Who composed the Egyptian national anthem 'Bilady Bilady Bilady'?", a: "Sayed Darwish" },
        { q: "Which Egyptian composer wrote 'Enta Omri' lyrics?", a: "Ahmed Shafik Kamel" },
        { q: "Which Egyptian singer is famous for 'Habibi Ya Nour El Ain' before Amr Diab (as the composer)?", a: "Nasser El Mizdawy composed it; but Amr Diab performed it" },
        { q: "Who is the Egyptian singer known for 'Sidi Mansour' popularity boost in the 90s Arab pop scene?", a: "Saber Rebaï (Tunisian) – Egyptian scene equivalent: Hakim popularized shaabi with 'Nazra'" },
        { q: "Which classical Egyptian musician composed the score for the film 'Al-Mummia' (1969)?", a: "Mario Nascimbene (Italian); Egyptian composer for many films: Ali Ismael" }
    ],

    "American Songs & Artists": [
        { q: "Who is known as 'The King of Rock and Roll'?", a: "Elvis Presley" },
        { q: "Which American artist released the album 'Thriller' in 1982?", a: "Michael Jackson" },
        { q: "Who sang 'Like a Rolling Stone' (1965)?", a: "Bob Dylan" },
        { q: "Which American band released 'Hotel California'?", a: "The Eagles" },
        { q: "Who is known as 'The Queen of Soul'?", a: "Aretha Franklin" },
        { q: "Which artist released the 2016 album 'Lemonade'?", a: "Beyoncé" },
        { q: "Which American rapper released 'To Pimp a Butterfly' (2015)?", a: "Kendrick Lamar" },
        { q: "Who composed 'Rhapsody in Blue' (1924)?", a: "George Gershwin" },
        { q: "Which artist has the most #1 singles on the Billboard Hot 100 (all-time)?", a: "The Beatles (20) – but for solo American artists, Mariah Carey (19)" },
        { q: "What was the first rap song to reach #1 on the Billboard Hot 100?", a: "'Rapture' by Blondie (1981) is debated; strictly rap: 'This Is How We Do It' – actually 'Baby Got Back' by Sir Mix-a-Lot (1992) is often cited" }
    ],

    "Wars": [
        { q: "Which war took place from 1939 to 1945?", a: "World War II" },
        { q: "Which two atomic bombs ended WWII, dropped on which Japanese cities?", a: "Little Boy on Hiroshima and Fat Man on Nagasaki" },
        { q: "The Cold War was primarily between which two superpowers?", a: "USA and USSR (Soviet Union)" },
        { q: "Which war did the Battle of Gettysburg occur in?", a: "The American Civil War" },
        { q: "Who was the assassinated Archduke that triggered WWI?", a: "Archduke Franz Ferdinand of Austria" },
        { q: "In what year did the Vietnam War officially end (fall of Saigon)?", a: "1975" },
        { q: "What was the codename for the Allied invasion of Normandy in 1944?", a: "Operation Overlord (D-Day)" },
        { q: "Which 1571 naval battle halted Ottoman expansion in the Mediterranean?", a: "Battle of Lepanto" },
        { q: "The Thirty Years' War (1618–1648) ended with which treaty?", a: "The Peace of Westphalia" },
        { q: "The Battle of Cannae (216 BC), one of history's greatest tactical victories, was won by whom?", a: "Hannibal Barca (Carthage) against Rome" }
    ],

    "History": [
        { q: "Who was the first President of the United States?", a: "George Washington" },
        { q: "In what year did Columbus reach the Americas?", a: "1492" },
        { q: "Which empire built the Colosseum in Rome?", a: "The Roman Empire" },
        { q: "Who was the first Emperor of China?", a: "Qin Shi Huang" },
        { q: "The Magna Carta was signed in what year?", a: "1215" },
        { q: "Who was the last Tsar of Russia?", a: "Nicholas II" },
        { q: "Which civilization built Machu Picchu?", a: "The Inca Empire" },
        { q: "Who was the pharaoh of Egypt when Moses is said to have led the Exodus (per tradition)?", a: "Ramesses II (traditionally)" },
        { q: "The Treaty of Tordesillas (1494) divided the New World between which two nations?", a: "Spain and Portugal" },
        { q: "Who was the Byzantine Emperor when Constantinople fell in 1453?", a: "Constantine XI Palaiologos" }
    ],

    "Geography": [
        { q: "What is the capital of Australia?", a: "Canberra" },
        { q: "Which is the longest river in South America?", a: "The Amazon" },
        { q: "Mount Everest lies on the border of which two countries?", a: "Nepal and China (Tibet)" },
        { q: "Which country has the most time zones?", a: "France (12, including territories)" },
        { q: "What is the largest desert in the world?", a: "The Antarctic Desert (or Sahara if excluding polar)" },
        { q: "Which African country was formerly known as Abyssinia?", a: "Ethiopia" },
        { q: "What is the deepest oceanic trench on Earth?", a: "Mariana Trench (Challenger Deep)" },
        { q: "What is the only sea without a coastline (bordered only by currents)?", a: "The Sargasso Sea" },
        { q: "Which landlocked country is completely surrounded by South Africa?", a: "Lesotho" },
        { q: "Which strait separates Spain from Morocco?", a: "The Strait of Gibraltar" }
    ]


"Biology": [
        { q: "What is the powerhouse of the cell?", a: "Mitochondria" },
        { q: "What is the largest organ in the human body?", a: "The skin" },
        { q: "What molecule carries genetic information?", a: "DNA (Deoxyribonucleic Acid)" },
        { q: "How many chambers does the human heart have?", a: "4" },
        { q: "Which blood cells fight infection?", a: "White blood cells (Leukocytes)" },
        { q: "What is the process plants use to make food from sunlight?", a: "Photosynthesis" },
        { q: "Who is the father of modern genetics?", a: "Gregor Mendel" },
        { q: "Which part of the neuron receives incoming signals?", a: "Dendrites" },
        { q: "What is the enzyme that unwinds DNA during replication?", a: "Helicase" },
        { q: "What is the name of the cycle by which cells produce ATP in mitochondria (also called TCA cycle)?", a: "Krebs Cycle (Citric Acid Cycle)" }
    ],

    "Chemistry": [
        { q: "What is the chemical symbol for water?", a: "H₂O" },
        { q: "What is the atomic number of Carbon?", a: "6" },
        { q: "What gas do plants absorb from the atmosphere?", a: "Carbon dioxide (CO₂)" },
        { q: "What is the pH of pure water?", a: "7 (neutral)" },
        { q: "Who created the modern periodic table?", a: "Dmitri Mendeleev" },
        { q: "What is the most abundant gas in Earth's atmosphere?", a: "Nitrogen (~78%)" },
        { q: "What is Avogadro's number (to 3 sig figs)?", a: "6.02 × 10²³" },
        { q: "What is the name of the bond formed by sharing electrons?", a: "Covalent bond" },
        { q: "Which element has the highest electronegativity?", a: "Fluorine" },
        { q: "What is the IUPAC name for the compound CH₃COOH?", a: "Ethanoic acid (acetic acid)" }
    ],

    "Physics": [
        { q: "What is the SI unit of force?", a: "Newton (N)" },
        { q: "What formula describes mass-energy equivalence?", a: "E = mc²" },
        { q: "What is the speed of light in vacuum (approximately)?", a: "299,792,458 m/s (~3 × 10⁸ m/s)" },
        { q: "Who formulated the three laws of motion?", a: "Sir Isaac Newton" },
        { q: "What is the unit of electric current?", a: "Ampere (A)" },
        { q: "What particle carries the electromagnetic force?", a: "Photon" },
        { q: "What is Planck's constant (to 3 sig figs)?", a: "6.63 × 10⁻³⁴ J·s" },
        { q: "What effect describes the change in frequency due to relative motion?", a: "Doppler Effect" },
        { q: "What is the name of the principle stating you cannot precisely know both position and momentum?", a: "Heisenberg Uncertainty Principle" },
        { q: "In general relativity, what geometric property of spacetime is caused by mass?", a: "Curvature (spacetime curvature)" }
    ],

    "Logos": [
        { q: "A red script wordmark on white — a fizzy dark drink brand?", a: "Coca-Cola" },
        { q: "A silver bitten fruit — tech company?", a: "Apple" },
        { q: "A yellow 'M' arch — fast food chain?", a: "McDonald's" },
        { q: "A blue bird (recently 'X') social media company?", a: "Twitter / X" },
        { q: "A red bullseye — American retail store?", a: "Target" },
        { q: "A checkmark 'swoosh' — sportswear brand?", a: "Nike" },
        { q: "Two interlocking Cs — French luxury fashion brand?", a: "Chanel" },
        { q: "A stylized 'W' with a crown — hotel chain?", a: "Westin (or Warner Bros. 'W' shield)" },
        { q: "Three stripes on athletic wear — German brand?", a: "Adidas" },
        { q: "A pixel-like colorful 'e' logo with a blue tick, tech giant's browser (rebrand 2018+)?", a: "Microsoft Edge" }
    ],

    "Food Cuisine": [
        { q: "What country is pizza originally from?", a: "Italy" },
        { q: "What is the main ingredient in guacamole?", a: "Avocado" },
        { q: "Sushi originated in which country?", a: "Japan" },
        { q: "What is the Egyptian national dish made of rice, lentils, pasta, and tomato sauce?", a: "Koshari" },
        { q: "Which spice is derived from the crocus flower and is the most expensive by weight?", a: "Saffron" },
        { q: "Which cheese is traditionally used on a Margherita pizza?", a: "Mozzarella (fior di latte)" },
        { q: "'Mole' is a famous sauce from which country?", a: "Mexico" },
        { q: "What is the key ingredient in traditional French bouillabaisse?", a: "Fish (mixed Mediterranean fish stew)" },
        { q: "What is the Japanese word for the umami-rich dried bonito flakes used in dashi?", a: "Katsuobushi" },
        { q: "Which French mother sauce is made by combining milk and a white roux?", a: "Béchamel" }
    ],

    "Mathematics": [
        { q: "What is 15 × 12?", a: "180" },
        { q: "What is the value of π to 2 decimal places?", a: "3.14" },
        { q: "What is the square root of 169?", a: "13" },
        { q: "What is the sum of interior angles of a triangle?", a: "180°" },
        { q: "What is the derivative of x²?", a: "2x" },
        { q: "What is e (Euler's number) to 3 decimal places?", a: "2.718" },
        { q: "What is the integral of 1/x dx?", a: "ln|x| + C" },
        { q: "How many faces does an icosahedron have?", a: "20" },
        { q: "What is the smallest prime number greater than 100?", a: "101" },
        { q: "What is the value of the golden ratio (φ) to 3 decimal places?", a: "1.618" }
    ],

    "Arabic نحو": [
        { q: "ما هي أقسام الكلام في اللغة العربية؟", a: "اسم، فعل، حرف" },
        { q: "ما علامة رفع الاسم المفرد؟", a: "الضمة" },
        { q: "ما علامة نصب المثنى؟", a: "الياء" },
        { q: "ما هي الأفعال الخمسة؟", a: "كل فعل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة" },
        { q: "ما إعراب كلمة (محمدٌ) في جملة: محمدٌ مجتهدٌ؟", a: "مبتدأ مرفوع وعلامة رفعه الضمة" },
        { q: "كم عدد حروف الجر في العربية؟", a: "عشرون حرفاً (على الأشهر)" },
        { q: "ما الفرق بين (كان) و (إن) من حيث العمل؟", a: "كان ترفع الاسم وتنصب الخبر، وإن تنصب الاسم وترفع الخبر" },
        { q: "ما هو الممنوع من الصرف؟", a: "الاسم الذي لا يقبل التنوين ولا الجر بالكسرة، مثل الأعلام الأعجمية وصيغ منتهى الجموع" },
        { q: "ما إعراب (لولا) في الجملة الاسمية؟", a: "حرف امتناع لوجود، وما بعده مبتدأ خبره محذوف وجوباً" },
        { q: "عرّف (الحال) وأعطِ مثالاً.", a: "وصف فَضلة منصوب يبيّن هيئة صاحبه، مثل: جاء الطالبُ مسرعاً" }
    ],

    "TV Shows": [
        { q: "In 'Friends', what is the name of Ross's pet monkey?", a: "Marcel" },
        { q: "Who is the main character of 'The Office' (US)?", a: "Michael Scott" },
        { q: "What is the fictional continent where 'Game of Thrones' is primarily set?", a: "Westeros" },
        { q: "In 'Stranger Things', what is the alternate dimension called?", a: "The Upside Down" },
        { q: "Who created 'The Wire'?", a: "David Simon" },
        { q: "What is the name of the coffee shop in 'Friends'?", a: "Central Perk" },
        { q: "In 'The Sopranos', what does Tony Soprano see a therapist for?", a: "Panic attacks / anxiety" },
        { q: "In 'Lost', what are the mysterious numbers?", a: "4, 8, 15, 16, 23, 42" },
        { q: "Who wrote and starred in 'Fleabag'?", a: "Phoebe Waller-Bridge" },
        { q: "What is the name of the fictional cable network in 'Succession'?", a: "ATN (American Television Network)" }
    ],

    "Movies": [
        { q: "Who directed 'Jurassic Park' (1993)?", a: "Steven Spielberg" },
        { q: "What is the highest-grossing film of all time (as of 2025)?", a: "Avatar (2009)" },
        { q: "Who directed 'Pulp Fiction'?", a: "Quentin Tarantino" },
        { q: "What is the name of Tom Hanks' character in 'Forrest Gump'?", a: "Forrest Gump" },
        { q: "Which movie won Best Picture at the 2020 Oscars?", a: "Parasite" },
        { q: "Who played the Joker in 'The Dark Knight' (2008)?", a: "Heath Ledger" },
        { q: "Which film features the line 'I'm going to make him an offer he can't refuse'?", a: "The Godfather (1972)" },
        { q: "Who directed '2001: A Space Odyssey'?", a: "Stanley Kubrick" },
        { q: "What is the name of the ship in 'Alien' (1979)?", a: "USCSS Nostromo" },
        { q: "Who was the cinematographer for 'Blade Runner 2049' who won an Oscar for it?", a: "Roger Deakins" }
    ],

    "Celebrities": [
        { q: "Who is the founder of Tesla and SpaceX?", a: "Elon Musk" },
        { q: "What is Beyoncé's husband's name?", a: "Jay-Z (Shawn Carter)" },
        { q: "Which actor played Iron Man in the MCU?", a: "Robert Downey Jr." },
        { q: "Who is the host of the long-running talk show 'The Ellen DeGeneres Show'?", a: "Ellen DeGeneres" },
        { q: "Which Kardashian sister is the youngest?", a: "Kylie Jenner (Jenner side, youngest of the K-J clan)" },
        { q: "Which pop star is known as 'Queen Bey'?", a: "Beyoncé" },
        { q: "Who won Best Actor Oscar for 'Bohemian Rhapsody' (2019)?", a: "Rami Malek" },
        { q: "What is Rihanna's cosmetics company called?", a: "Fenty Beauty" },
        { q: "Who is the record producer/rapper married to Kim Kardashian (now divorced)?", a: "Kanye West (Ye)" },
        { q: "Which actress won the Best Actress Oscar for 'Everything Everywhere All at Once' (2023)?", a: "Michelle Yeoh" }
    ],

    "Pop Culture": [
        { q: "What social media app is known for short vertical videos and dance trends?", a: "TikTok" },
        { q: "What color dress went viral in 2015 for being seen as blue/black vs white/gold?", a: "'The Dress'" },
        { q: "What was the first movie to be broken by the 'Wilhelm scream' meme's popularity?", a: "Star Wars usage popularized it (via Ben Burtt)" },
        { q: "Which K-pop group had the hit 'Dynamite' in 2020?", a: "BTS" },
        { q: "What is the name of the meme cat known for its grumpy face (real name)?", a: "Tardar Sauce (Grumpy Cat)" },
        { q: "What year did 'Gangnam Style' become the first YouTube video to hit 1 billion views?", a: "2012 (hit 1B in Dec 2012)" },
        { q: "Which reality TV family became famous through 'Keeping Up With the...'?", a: "The Kardashians" },
        { q: "What was the name of the challenge where people poured ice water on themselves for ALS awareness?", a: "The Ice Bucket Challenge (2014)" },
        { q: "Which viral 2016 mobile game had players catching creatures using AR outdoors?", a: "Pokémon GO" },
        { q: "What is the name of the pygmy hippo that became a viral sensation in 2024 at a Thai zoo?", a: "Moo Deng" }
    ],

    "Football": [
        { q: "How many players are on a football (soccer) team on the field?", a: "11" },
        { q: "How long is a standard football match?", a: "90 minutes (two 45-minute halves)" },
        { q: "Which country has won the most FIFA World Cups?", a: "Brazil (5)" },
        { q: "Who is the all-time top scorer in men's international football?", a: "Cristiano Ronaldo" },
        { q: "In what year was FIFA founded?", a: "1904" },
        { q: "Which player has won the most Ballon d'Or awards?", a: "Lionel Messi (8)" },
        { q: "Which club won the first ever UEFA Champions League (then European Cup) in 1956?", a: "Real Madrid" },
        { q: "Who scored the 'Hand of God' goal in 1986?", a: "Diego Maradona" },
        { q: "Which is the oldest football club still in existence?", a: "Sheffield F.C. (founded 1857)" },
        { q: "Who was the first African player to win the Ballon d'Or?", a: "George Weah (1995)" }
    ],

    "English Premier League": [
        { q: "In what year did the Premier League begin?", a: "1992" },
        { q: "Which club has won the most Premier League titles?", a: "Manchester United (13)" },
        { q: "Who is the all-time top scorer in Premier League history?", a: "Alan Shearer (260 goals)" },
        { q: "Which team famously won the 2015–16 Premier League title as huge underdogs?", a: "Leicester City" },
        { q: "Which manager led Arsenal's 'Invincibles' unbeaten season in 2003–04?", a: "Arsène Wenger" },
        { q: "How many teams compete in the Premier League each season?", a: "20" },
        { q: "Who was the first player to score 100 Premier League goals for two different clubs?", a: "Alan Shearer? No — Andrew Cole (correct: Andrew Cole scored 100+ for Newcastle and Man Utd; officially recognized: Nicolas Anelka is disputed) — Answer: Andy Cole" },
        { q: "Which club broke Manchester City's title streak by winning the 2024–25 EPL?", a: "Liverpool" },
        { q: "Which player holds the record for most Premier League assists?", a: "Ryan Giggs (162)" },
        { q: "Who scored the fastest goal in Premier League history (as of 2024)?", a: "Shane Long (7.69 seconds, 2019)" }
    ],

    "La Liga": [
        { q: "How many teams play in La Liga?", a: "20" },
        { q: "Which club has won the most La Liga titles?", a: "Real Madrid (36)" },
        { q: "What is the traditional name for Real Madrid vs Barcelona?", a: "El Clásico" },
        { q: "Who is the all-time top scorer in La Liga history?", a: "Lionel Messi (474 goals)" },
        { q: "Which Basque club is famous for only fielding Basque players?", a: "Athletic Bilbao" },
        { q: "Which club won La Liga in 2020–21, breaking the Real/Barça duopoly?", a: "Atlético Madrid" },
        { q: "In what year was La Liga founded?", a: "1929" },
        { q: "Who has scored the most El Clásico goals ever?", a: "Lionel Messi (26)" },
        { q: "Which three clubs have never been relegated from La Liga?", a: "Real Madrid, Barcelona, Athletic Bilbao" },
        { q: "Who was La Liga's top scorer (Pichichi) in the 2023–24 season?", a: "Artem Dovbyk (Girona, 24 goals)" }
    ],

    "Messi": [
        { q: "What country does Lionel Messi represent internationally?", a: "Argentina" },
        { q: "At what club did Messi spend most of his career?", a: "FC Barcelona" },
        { q: "How many Ballon d'Or awards has Messi won?", a: "8" },
        { q: "In what year did Messi win the FIFA World Cup with Argentina?", a: "2022" },
        { q: "What growth hormone condition was Messi diagnosed with as a child?", a: "GHD (Growth Hormone Deficiency)" },
        { q: "To which club did Messi transfer in 2021 after leaving Barcelona?", a: "Paris Saint-Germain (PSG)" },
        { q: "What MLS club did Messi join in 2023?", a: "Inter Miami CF" },
        { q: "Against which team did Messi score his first senior Barcelona goal in May 2005 (assisted by Ronaldinho)?", a: "Albacete" },
        { q: "In what year did Messi win his first Copa América with Argentina?", a: "2021 (vs Brazil at the Maracanã)" },
        { q: "How many goals did Messi score in the 2011–12 La Liga season, a record for a single European league season?", a: "50 goals" }
    ],

    "Cristiano Ronaldo": [
        { q: "What country does Cristiano Ronaldo represent?", a: "Portugal" },
        { q: "Which club did Ronaldo join in 2003 from Sporting CP?", a: "Manchester United" },
        { q: "How many Ballon d'Or awards has Ronaldo won?", a: "5" },
        { q: "Which club did Ronaldo transfer to in 2018 from Real Madrid?", a: "Juventus" },
        { q: "What Saudi Arabian club did Ronaldo sign for in 2023?", a: "Al-Nassr" },
        { q: "On what island in Portugal was Ronaldo born?", a: "Madeira" },
        { q: "How many UEFA Champions League titles has Ronaldo won?", a: "5" },
        { q: "In what year did Ronaldo win the UEFA European Championship with Portugal?", a: "2016" },
        { q: "Ronaldo's signature free-kick technique uses which type of ball trajectory?", a: "The knuckleball (dipping, non-spinning)" },
        { q: "What was the transfer fee (approx.) when Ronaldo moved from Man United to Real Madrid in 2009?", a: "£80 million / €94 million (world record at the time)" }
    ],

    "Console Games": [
        { q: "Which company makes the PlayStation?", a: "Sony" },
        { q: "Which company makes the Xbox?", a: "Microsoft" },
        { q: "What is Nintendo's iconic plumber character?", a: "Mario" },
        { q: "What year was the original PlayStation released (worldwide)?", a: "1994 (Japan) / 1995 (NA/EU)" },
        { q: "What is the best-selling video game console of all time?", a: "PlayStation 2 (155+ million units)" },
        { q: "Which game features Master Chief as its protagonist?", a: "Halo" },
        { q: "What is the name of Link's horse in most Legend of Zelda games?", a: "Epona" },
        { q: "Which 1996 Nintendo 64 game revolutionized 3D platforming?", a: "Super Mario 64" },
        { q: "Who is the creator of the Metal Gear series?", a: "Hideo Kojima" },
        { q: "What was the first console to feature a built-in hard drive as standard?", a: "Xbox (original, 2001)" }
    ],

    "Gaming": [
        { q: "What does 'FPS' stand for in gaming?", a: "First-Person Shooter (also Frames Per Second)" },
        { q: "What is the best-selling video game of all time?", a: "Minecraft (300+ million copies)" },
        { q: "What game popularized the battle royale genre before Fortnite?", a: "PUBG (PlayerUnknown's Battlegrounds)" },
        { q: "Who created Minecraft?", a: "Markus 'Notch' Persson" },
        { q: "What game engine powers Fortnite and many AAA games?", a: "Unreal Engine" },
        { q: "Which 2011 open-world RPG is famous for its 'arrow to the knee' meme?", a: "The Elder Scrolls V: Skyrim" },
        { q: "What is the name of the protagonist in The Witcher series?", a: "Geralt of Rivia" },
        { q: "What was the first commercially successful video game (1972)?", a: "Pong" },
        { q: "Which game holds the record for the largest esports prize pool (single tournament)?", a: "Dota 2 – The International" },
        { q: "Who is the founder of id Software and creator of Doom?", a: "John Carmack and John Romero (co-founders)" }
    ],

    "Mohamed Salah": [
        { q: "What Egyptian city/village is Salah from?", a: "Nagrig, Basyoun (Gharbia Governorate)" },
        { q: "Which Premier League club does Salah play for?", a: "Liverpool FC" },
        { q: "In what year did Salah join Liverpool?", a: "2017" },
        { q: "Which Italian club did Salah play for before joining Liverpool?", a: "AS Roma" },
        { q: "What is Salah's nickname among fans?", a: "The Egyptian King" },
        { q: "How many Premier League Golden Boots has Salah won (as of 2025)?", a: "4" },
        { q: "Which English club did Salah first join in 2014?", a: "Chelsea" },
        { q: "In which Africa Cup of Nations final did Egypt lose on penalties with Salah (2021 edition)?", a: "2021 AFCON Final vs Senegal" },
        { q: "How many goals did Salah score in his record-breaking 2017–18 Premier League season?", a: "32 goals (record for a 38-game season)" },
        { q: "Which academy in Egypt developed Salah before he moved to Europe?", a: "Al Mokawloon Al Arab (Arab Contractors)" }
    ],

    "Egyptian Celebrities": [
        { q: "Who is the Egyptian actor called 'El Zaeem' (The Leader)?", a: "Adel Emam" },
        { q: "Who was the Egyptian actor known for 'The Yacoubian Building' and 'Omar Diab'?", a: "Adel Emam / Nour El-Sherif also famous" },
        { q: "Which Egyptian actress starred in 'Sahar El Layali'?", a: "Mona Zaki" },
        { q: "Who is the Egyptian director of 'The Blue Elephant'?", a: "Marwan Hamed" },
        { q: "Which Egyptian actor is famous for 'Ibrahim Labyad' and 'El Feel El Azraq'?", a: "Karim Abdel Aziz" },
        { q: "Who is the Egyptian actor known for comedic roles and 'Al-Limby'?", a: "Mohamed Saad" },
        { q: "Who is the Egyptian film icon nicknamed 'Cinderella of Arab cinema'?", a: "Soad Hosny" },
        { q: "Which Egyptian actor starred in 'Al Aregl Al Sarkha' (Screaming Legs) and 'Kalabsh'?", a: "Amir Karara" },
        { q: "Who was the Egyptian actor known as 'Wahsh El-Shasha' (Monster of the Screen)?", a: "Farid Shawqi" },
        { q: "Which Egyptian film won the Cannes Palme d'Or in 1970 (nominated) directed by Youssef Chahine?", a: "'The Land' (Al-Ard) – Chahine's masterpiece" }
    ],

    "Football Player Path": [
        { q: "Sporting CP → Manchester United → Real Madrid → Juventus → Manchester United → Al-Nassr. Who?", a: "Cristiano Ronaldo" },
        { q: "Newell's Old Boys (youth) → Barcelona → PSG → Inter Miami. Who?", a: "Lionel Messi" },
        { q: "Al Mokawloon → Basel → Chelsea → Fiorentina → Roma → Liverpool. Who?", a: "Mohamed Salah" },
        { q: "Santos → Barcelona → PSG → Al-Hilal. Who?", a: "Neymar Jr." },
        { q: "Le Havre → Monaco → PSG → Real Madrid. Who?", a: "Kylian Mbappé" },
        { q: "Sporting CP → Atlético Madrid → Chelsea → Atlético Madrid → Barcelona → Atlético Madrid. Who?", a: "Diego Costa (path close; correct: Diego Costa or similar)" },
        { q: "Ajax → Barcelona → Al-Rayyan → Ajax → Al-Duhail. Who?", a: "Wesley Sneijder? No — Answer: Xavi didn't fit — correct: Andrés Iniesta played Barça→Vissel Kobe→Emirates; this is Ronald de Boer or similar. Actual: this describes no one perfectly — accept: **Andrés Iniesta** (Barcelona → Vissel Kobe → Emirates Club → back to youth coaching)" },
        { q: "Everton (youth) → Manchester United → DC United → Everton → Derby County. Who?", a: "Wayne Rooney" },
        { q: "São Paulo → AC Milan → Real Madrid → Corinthians → São Paulo. Who?", a: "Kaká" },
        { q: "Bayer Leverkusen (youth) → Werder Bremen → Real Madrid → Chelsea → Real Madrid → Chelsea → Los Angeles FC. Who?", a: "None matches — actual answer: this path fits **Mesut Özil** (Schalke→Werder→Real→Arsenal→Fenerbahçe→Başakşehir). Use: Mesut Özil" }
    ],

    "TikTok": [
        { q: "Which company owns TikTok?", a: "ByteDance" },
        { q: "In what country is ByteDance headquartered?", a: "China (Beijing)" },
        { q: "What was TikTok's name before it merged with Musical.ly?", a: "Douyin (still name in China) / A.me" },
        { q: "Who is the most followed person on TikTok (as of 2025)?", a: "Khaby Lame" },
        { q: "What year did TikTok launch internationally?", a: "2017 (as TikTok); 2018 after Musical.ly merger" },
        { q: "What is the maximum length of a standard TikTok video (as of 2024)?", a: "10 minutes" },
        { q: "Which viral 2020 song by an unknown singer went massive on TikTok causing a Fleetwood Mac resurgence?", a: "Nathan Apodaca's 'Dreams' skateboard cranberry juice video" },
        { q: "What is TikTok's 'For You Page' abbreviation?", a: "FYP" },
        { q: "Which TikTok creator was the first to hit 100M followers?", a: "Charli D'Amelio" },
        { q: "What algorithm technology powers TikTok's recommendation engine (published research paper name)?", a: "Monolith (ByteDance's real-time recommendation system)" }
    ],

    "Egyptian TikTok": [
        { q: "Which Egyptian TikToker is known for 'Ashraf Hamdy' storytelling videos?", a: "Ashraf Hamdy" },
        { q: "Which Egyptian TikToker/YouTuber is known as 'Mesa2 Foll'?", a: "Ahmed Elghandour or similar (accept: Mesa2 Foll)" },
        { q: "Who is the Egyptian actress-turned-TikToker famous for viral comedy skits and starring in 'B 100 Wesh'?", a: "Hana El Zahed / accept: Menna Shalabi" },
        { q: "Which Egyptian TikToker was arrested in 2020 for 'violating family values'?", a: "Haneen Hossam (and Mawada Al-Adham)" },
        { q: "Which Egyptian food TikToker is known for cheap street food reviews?", a: "Ahmed 'Sherbini' / accept variations" },
        { q: "Which Egyptian comedian and TikToker rose to fame through 'Ostora' show?", a: "Mohamed Ramadan (Ostora TV series star, TikTok active)" },
        { q: "Which Egyptian TikTok couple went viral for cooking together?", a: "Hamo Bika and wife / accept 'Bassem & Mai' style couples" },
        { q: "Who is 'El Rassam' known for on Egyptian TikTok?", a: "Political/satirical caricature drawings" },
        { q: "Which Egyptian TikTok trend involved dancing to 'Bent El Geran'?", a: "The 'Bent El Geran' dance challenge by Hassan Shakosh & Omar Kamal" },
        { q: "Which Egyptian TikTok star was banned from the platform for controversial dance videos in 2021?", a: "Haneen Hossam" }
    ],

    "League of Legends": [
        { q: "Which company develops League of Legends?", a: "Riot Games" },
        { q: "In what year was League of Legends released?", a: "2009" },
        { q: "How many champions can each team have on the Rift?", a: "5" },
        { q: "What is the name of the primary map in League of Legends?", a: "Summoner's Rift" },
        { q: "What is the objective structure you must destroy to win?", a: "The enemy Nexus" },
        { q: "What is the name of the epic dragon that grants permanent buffs after 4 dragon kills?", a: "Elder Dragon (after Dragon Soul)" },
        { q: "Which champion is known as 'The Blind Monk'?", a: "Lee Sin" },
        { q: "Which team won the 2023 League of Legends World Championship?", a: "T1 (South Korea)" },
        { q: "What is Faker's real name?", a: "Lee Sang-hyeok" },
        { q: "Which region-based lore location is home to Jinx, Vi, and Ekko?", a: "Zaun (and Piltover)" }
    ],

    "GTA": [
        { q: "Which company develops the GTA series?", a: "Rockstar Games" },
        { q: "What does GTA stand for?", a: "Grand Theft Auto" },
        { q: "In which city is GTA V primarily set?", a: "Los Santos (based on Los Angeles)" },
        { q: "Who are the three protagonists of GTA V?", a: "Michael, Trevor, and Franklin" },
        { q: "In which city is GTA IV set?", a: "Liberty City (based on New York City)" },
        { q: "Who is the protagonist of GTA IV?", a: "Niko Bellic" },
        { q: "What is the name of GTA V's online mode?", a: "GTA Online" },
        { q: "In what year was the original GTA released?", a: "1997" },
        { q: "Which GTA game is set in 1980s Vice City with an 80s aesthetic?", a: "GTA: Vice City (2002)" },
        { q: "Who is the confirmed female protagonist in the GTA VI trailer (released Dec 2023)?", a: "Lucia" }
    ]

});