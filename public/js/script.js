const answers_no = {
    english: [
        "No",
        "ശെരിക്കും ???",
        "ഒറപ്പാണോ ശുട്ടൂ 😭😭",
        "onnuuuuuude onn aaloych nokkkikkee 😒",
        "ഇനി ഇരുത്തി ഒന്ന് ആലോചിച്ചേ 🥱🫤",
        "ഒരു zudio ടോപ് മേടിച്ചു തന്നാലോ ??? 👕👚",
        "എന്താ കൊച്ചു മൈരേ ഇങ്ങനെ ....🫤🫤🫤",
        "ഇത് laast aanee ഇനി ഞാൻ ചോതിക്കൂല്ല 😒",
        "പിണക്കമാണോ  ??? 🙄",
        "എന്നെ ഇഷ്ടവല്ലേ...🥲",
        "ചക്കര ഉമ്മ  തന്നാലോ ??? 🐟",
        "Fish Biriyani വാങ്ങിച്ചു തന്നാലോ ??? 🐟",
        "ഓക്കേ വേണ്ടേ വേണ്ട. എന്നെ പോലെ ഒരു തങ്കക്കുടം ഇനി വേറെ കിട്ടില്ലേട്ടോ ... ",
        "OK. ഇനി ഞാൻ ഒരു ശല്യം ആവില്ല ",
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ca me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donnez-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาศที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอางี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาศครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ]
};

answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "Thailand": "เย่ คืนดีกันแล้วน้า"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

// Set default zoom level to 75%
document.body.style.zoom = "0.80";


// All images available for the collage background
const collageImages = [
    "public/our-images/IMG_20240705_205648684.jpg",
    "public/our-images/IMG_20240722_002328449_HDR.jpg",
    "public/our-images/IMG_20240815_112533484_HDR.jpg",
    "public/our-images/IMG_20240818_105258781_HDR.jpg",
    "public/our-images/IMG_20240818_105311298_HDR.jpg",
    "public/our-images/IMG_20240910_221152563_HDR.jpg",
    "public/our-images/IMG_20240914_115028133_HDR.jpg",
    "public/our-images/IMG_20241019_091235635_HDR.jpg",
    "public/our-images/IMG_20241022_222318469.jpg",
    "public/our-images/IMG_20241025_233555071_HDR.jpg",
    "public/our-images/IMG_20241025_233606619_HDR.jpg",
    "public/our-images/IMG_20241026_105015906_HDR.jpg",
    "public/our-images/IMG_20241031_235241774_HDR.jpg",
    "public/our-images/IMG_20241115_082930189_HDR.jpg",
    "public/our-images/IMG_20250110_024311057.jpg",
    "public/our-images/IMG_20250120_232311473_HDR.jpg",
    "public/our-images/IMG_20250206_104516322_HDR.jpg",
    "public/our-images/IMG_20250304_213257029_HDR.jpg",
    "public/our-images/IMG_20260103_142605367_HDR.jpg",
    "public/our-images/IMG_20260117_150610759.jpg",
    "public/our-images/IMG_20260117_150707251_HDR.jpg",
    "public/our-images/IMG_20260124_134425335_HDR.jpg",
    "public/our-images/IMG_20260124_164554508_HDR.jpg",
    "public/our-images/IMG-20240720-WA0048.jpg",
    "public/our-images/IMG-20240722-WA0056.jpg",
    "public/our-images/IMG-20240808-WA0000.jpg",
    "public/our-images/IMG-20240808-WA0002.jpg",
    "public/our-images/IMG-20240810-WA0006.jpg",
    "public/our-images/IMG-20240905-WA0016.jpg",
    "public/our-images/IMG-20240928-WA0021.jpg",
    "public/our-images/IMG-20241021-WA0025.jpg"
];

function updateCollageBackground(options = {}) {
    const rows = options.rows || 2; // default 3 rows
    const cols = options.cols || 8; // default 6 columns
    const images = options.images || collageImages;
    const neededTiles = rows * cols;

    let collage = document.getElementById("collage-background");
    if (!collage) {
        collage = document.createElement("div");
        collage.id = "collage-background";
        document.body.prepend(collage);
    }

    // Clear previous collage
    collage.innerHTML = "";

    if (!images.length) return;

    // Adjust grid size based on requested rows/cols
    collage.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    collage.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Create a shuffled copy of the images
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(neededTiles, shuffled.length));

    // If there are fewer than neededTiles images, repeat some
    while (selected.length < neededTiles) {
        selected.push(
            images[Math.floor(Math.random() * images.length)]
        );
    }

    selected.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Collage image";
        collage.appendChild(img);
    });
}

// Initial load: show a 18 * 4 grid of the specific image
updateCollageBackground({
    rows: 4,
    cols: 18,
    images: ["public/our-images/IMG_20260124_134425335_HDR.jpg"]
});

no_button.addEventListener('click', () => {
    // Update randomized collage background on every click
    updateCollageBackground();

    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // Update randomized collage background on every click
    updateCollageBackground();

    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Tu veux être mon valentin?";
    } else if (language === "thai") {
        questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yepppie, à bientôt :3";
    } else if (language === "thai") {
        successMessage.textContent = "ฮูเร่ คืนดีกันแล้วน้า :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}