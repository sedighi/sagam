/**
 * storyData.js
 * Contains the story nodes for "The Guardian of the Elements".
 * Each node has an ID, text content, optional image, and choices.
 */

export const storyNodes = [
    {
        id: 1,
        text: "سلام قهرمان! من 'دانا' هستم، راهنمای تو. امروز قراره یه ماجراجویی بزرگ رو شروع کنیم تا 'کریستال دانش' رو پیدا کنیم. آماده‌ای؟",
        // Hello hero! I am 'Dana', your guide. Today we are going to start a big adventure to find the 'Crystal of Knowledge'. Are you ready?
        image: "intro_dana",
        choices: [
            { text: "بله، بزن بریم! 🎒", nextNodeId: 2 },
            { text: "کریستال دانش چیه؟ 🤔", nextNodeId: 100 }
        ]
    },
    {
        id: 100,
        text: "کریستال دانش یه سنگ جادوییه که به هر کسی که اون رو پیدا کنه، رازهای جهان رو یاد میده. اما برای پیدا کردنش باید معماهای علمی رو حل کنی!",
        // The Crystal of Knowledge is a magic stone that teaches the secrets of the universe to anyone who finds it. But to find it, you must solve scientific riddles!
        image: "crystal_info",
        choices: [
            { text: "چه هیجان‌انگیز! بریم! 🏃", nextNodeId: 2 }
        ]
    },
    {
        id: 2,
        text: "ما به یه دوراهی رسیدیم. نقشه نشون میده که قطعه‌های کریستال توی سه منطقه پنهان شدن. کدوم رو اول انتخاب می‌کنی؟",
        // We reached a crossroad. The map shows that crystal pieces are hidden in three regions. Which one do you choose first?
        image: "crossroad",
        choices: [
            { text: "جنگل اعداد 🌳🔢", nextNodeId: 3 },
            { text: "آزمایشگاه فضایی 🚀🌌", nextNodeId: 4 },
            { text: "اقیانوس رنگ‌ها 🌊🎨", nextNodeId: 5 }
        ]
    },
    // --- JUNGLE PATH (Math) ---
    {
        id: 3,
        text: "وارد جنگل اعداد شدی. درخت‌ها اینجا شکل‌های هندسی دارن! یه میمون بازیگوش راهت رو بسته. اون میگه: 'اگه میخوای رد بشی، بگو حاصل ۲ به علاوه ۳ چی میشه؟'",
        // You entered the Number Forest. Trees here have geometric shapes! A playful monkey blocked your way. It says: 'If you want to pass, tell me what is 2 plus 3?'
        image: "jungle_math",
        choices: [
            { text: "میشه ۴ 🍌", nextNodeId: 301 },
            { text: "میشه ۵ 🥥", nextNodeId: 302 }
        ]
    },
    {
        id: 301,
        text: "میمون سرش رو تکون میده: 'نه نه! دوباره فکر کن. دو تا موز داری، سه تا دیگه هم بهت میدم...' ",
        // The monkey shakes its head: 'No no! Think again. You have two bananas, I give you three more...'
        image: "monkey_wrong",
        choices: [
            { text: "آهان، فهمیدم! ۵ تا 🍌", nextNodeId: 302 }
        ]
    },
    {
        id: 302,
        text: "آفرین! میمون خوشحال شد و یه کلید طلایی بهت داد. این کلیدِ دروازه دانش ریاضیه. حالا کجا بریم؟",
        // Well done! The monkey got happy and gave you a golden key. This is the key to the Math Knowledge Gate. Where to now?
        image: "monkey_happy",
        choices: [
            { text: "برگشت به دوراهی 🔙", nextNodeId: 2 },
            { text: "ادامه در جنگل (پیدا کردن گنج) 💎", nextNodeId: 303 }
        ]
    },
    {
        id: 303,
        text: "جلوتر رفتی و یه صندوقچه دیدی. روی اون نوشته: 'من ۴ ضلع دارم که همه برارند. من چه شکلی‌ام؟'",
        // You went further and saw a chest. It says: 'I have 4 equal sides. What shape am I?'
        image: "geometry_chest",
        choices: [
            { text: "مستطیل ▭", nextNodeId: 304 },
            { text: "مربع ⬜", nextNodeId: 305 }
        ]
    },
    {
        id: 304,
        text: "صندوقچه باز نشد. مستطیل هم ۴ ضلع داره ولی همه اضلاعش برابر نیستند. دوباره تلاش کن!",
        // The chest didn't open. A rectangle has 4 sides too, but not all equal. Try again!
        image: "chest_locked",
        choices: [
            { text: "فهمیدم، مربع! ⬜", nextNodeId: 305 }
        ]
    },
    {
        id: 305,
        text: "صندوقچه باز شد! تو اولین تکه کریستال دانش رو پیدا کردی! تبریک میگم!",
        // The chest opened! You found the first piece of the Crystal of Knowledge! Congratulations!
        image: "crystal_piece_1",
        choices: [
            { text: "بازگشت به نقشه اصلی 🗺️", nextNodeId: 2 }
        ]
    },

    // --- SPACE PATH (Science/Planets) ---
    {
        id: 4,
        text: "لباس فضایی پوشیدی و وارد آزمایشگاه معلق شدی. اینجا جاذبه کمه و همه چی سبکه! یه ربات دانشمند ازت می‌پرسه: 'بزرگترین سیاره منظومه شمسی کدومه؟'",
        // You put on a spacesuit and entered the floating lab. Gravity is low here! A scientist robot asks: 'Which is the largest planet in the solar system?'
        image: "space_lab",
        choices: [
            { text: "زمین 🌎", nextNodeId: 401 },
            { text: "مشتری 🪐", nextNodeId: 402 }
        ]
    },
    {
        id: 401,
        text: "زمین خانه زیبای ماست، اما بزرگترین نیست. سیاره بزرگ از گاز ساخته شده و یه لکه بزرگ قرمز داره.",
        // Earth is our beautiful home, but not the largest. The big planet is made of gas and has a big red spot.
        image: "earth_view",
        choices: [
            { text: "پس مشتری هست! 🪐", nextNodeId: 402 }
        ]
    },
    {
        id: 402,
        text: "درسته! مشتری غول گازی منظومه ماست. ربات درِ مخزن ستاره‌ها رو باز میکنه. یه تکه دیگه از کریستال اینجاست!",
        // Correct! Jupiter is the gas giant of our system. The robot opens the star tank. Another crystal piece is here!
        image: "crystal_piece_2",
        choices: [
            { text: "عالیه! برگردیم عقب 🔙", nextNodeId: 2 },
            { text: "سفر به خورشید ☀️", nextNodeId: 403 }
        ]
    },
    {
        id: 403,
        text: "نزدیک خورشید خیلی گرمه! هشدار حرارتی! خورشید یک ستاره است که به ما نور و گرما میده. اگه خورشید نبود چی میشد؟",
        // Near the sun is very hot! Heat warning! The sun is a star that gives us light and heat. What would happen without the sun?
        image: "sun_heat",
        choices: [
            { text: "زمین یخ می‌زد ❄️", nextNodeId: 404 },
            { text: "هیچی نمیشد 😐", nextNodeId: 405 }
        ]
    },
    {
        id: 404,
        text: "کاملاً درسته! گیاهان بدون نور رشد نمی‌کردن و زمین سرد و تاریک میشد. تو یه دانشمند واقعی هستی!",
        // Absolutely correct! Plants wouldn't grow without light and Earth would be cold and dark. You are a real scientist!
        image: "science_badge",
        choices: [
            { text: "بازگشت به نقشه 🗺️", nextNodeId: 2 }
        ]
    },
    {
        id: 405,
        text: "نه اشتباهه. خورشید منبع انرژی حیات روی زمینه. دوباره فکر کن.",
        // No, that's wrong. The sun is the source of life energy on Earth. Think again.
        image: "sun_sad",
        choices: [
            { text: "آهان، زمین یخ میزد ❄️", nextNodeId: 404 }
        ]
    },

    // --- OCEAN PATH (Creativity/Nature) ---
    {
        id: 5,
        text: "زیردریایی ما وارد اقیانوس رنگ‌ها شد. ماهی‌ها با رنگ‌های رنگین‌کمان شنا می‌کنن. یه اختاپوس غمگین نشسته. چرا؟",
        // Our submarine entered the Ocean of Colors. Fish are swimming in rainbow colors. A sad octopus is sitting. Why?
        image: "ocean_intro",
        choices: [
            { text: "خونه‌اش کثیف شده 🚮", nextNodeId: 501 },
            { text: "گرسنشه 🦐", nextNodeId: 502 }
        ]
    },
    {
        id: 501,
        text: "درسته! پلاستیک‌ها خونه‌اش رو خراب کردن. بیا کمک کنیم تمیزش کنیم. زباله‌ها رو کجا باید بریزیم؟",
        // Correct! Plastics ruined its home. Let's help clean it. Where should we put the trash?
        image: "ocean_cleanup",
        choices: [
            { text: "توی دریا رها کنیم 🌊", nextNodeId: 503 },
            { text: "توی سطل بازیافت ♻️", nextNodeId: 504 }
        ]
    },
    {
        id: 502,
        text: "شاید گرسنه باشه، اما ببین دور و برش پر از زباله پلاستیکیه. فکر کنم مشکل اصلی اونه.",
        // Maybe it's hungry, but look around, it's full of plastic trash. I think that's the main problem.
        image: "ocean_trash",
        choices: [
            { text: "بیا تمیزکاری کنیم 🧹", nextNodeId: 501 }
        ]
    },
    {
        id: 503,
        text: "نه! اگه توی دریا ول کنیم دوباره برمیگرده و ماهی‌ها رو اذیت میکنه. ما باید مراقب طبیعت باشیم.",
        // No! If we leave it in the sea it comes back and hurts the fish. We must protect nature.
        image: "nature_warning",
        choices: [
            { text: "حق با توئه، بازیافت! ♻️", nextNodeId: 504 }
        ]
    },
    {
        id: 504,
        text: "عالی بود! اختاپوس خوشحال شد و رنگش صورتی درخشان شد! اون آخرین تکه کریستال رو بهت داد.",
        // Great! The octopus got happy and turned bright pink! It gave you the last crystal piece.
        image: "crystal_piece_3",
        choices: [
            { text: "پایان ماجراجویی 🎉", nextNodeId: 6 }
        ]
    },

    // --- ENDING ---
    {
        id: 6,
        text: "تبریک میگم قهرمان! تو با دانش ریاضی، علم فضایی و مهربونی با طبیعت، همه تکه‌های کریستال دانش رو پیدا کردی. تو الان یه 'استاد اعظم' هستی!",
        // Congratulations hero! With math knowledge, space science, and kindness to nature, you found all pieces of the Crystal of Knowledge. You are now a 'Grand Master'!
        image: "grand_master",
        choices: [
            { text: "شروع یک بازی جدید 🔄", nextNodeId: 1 }
        ]
    }
];
