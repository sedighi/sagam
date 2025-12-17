/**
 * storyData.js
 * Contains the story nodes for "The Little Explorer".
 * Each node has an ID, text content, optional image, and choices.
 */

export const storyNodes = [
    {
        id: 1,
        text: "سلام کاوشگر کوچولو! امروز یه روز هیجان‌انگیزه. دوست داری کجا با هم بریم؟",
        // Hello little explorer! Today is an exciting day. Where would you like to go together?
        image: "adventure_start",
        choices: [
            { text: "جنگل جادویی 🌳", nextNodeId: 2 },
            { text: "شهر فضایی 🚀", nextNodeId: 3 }
        ]
    },
    {
        id: 2,
        text: "وارد جنگل جادویی شدی. صدای پرنده‌های عجیب میاد. یه سنجاب بامزه می‌بینی که داره گریه می‌کنه. چیکار می‌کنی؟",
        // You entered the magical forest. Strange birds are singing. You see a cute squirrel crying. What do you do?
        image: "forest_squirrel",
        choices: [
            { text: "ازش می‌پرسم چرا ناراحته؟ 🐿️", nextNodeId: 4 },
            { text: "به راهم ادامه میدم 🚶", nextNodeId: 5 }
        ]
    },
    {
        id: 3,
        text: "واو! اینجا همه چی پرواز می‌کنه. یه ربات بهت سلام می‌کنه و میگه گم شده. کمکش می‌کنی؟",
        // Wow! Everything is flying here. A robot says hello and says it's lost. Will you help it?
        image: "space_robot",
        choices: [
            { text: "آره، حتما! 🤖", nextNodeId: 6 },
            { text: "نه، می‌خوام بازی کنم 🎮", nextNodeId: 7 }
        ]
    },
    {
        id: 4,
        text: "سنجاب میگه فندقش رو گم کرده. تو کمکش کردی پیداش کنه! سنجاب خوشحال شد و بهت یه نقشه گنج داد.",
        // The squirrel says it lost its hazelnut. You helped find it! The squirrel got happy and gave you a treasure map.
        image: "squirrel_happy",
        choices: [
            { text: "ادامه ماجراجویی با نقشه 🗺️", nextNodeId: 8 }
        ]
    },
    {
        id: 5,
        text: "تو رفتی ولی سنجاب هنوز ناراحت بود. مهربونی کردن حس بهتری داشت، مگه نه؟",
        // You left but the squirrel was still sad. Being kind felt better, didn't it?
        image: "sad_moment",
        choices: [
            { text: "شروع دوباره 🔄", nextNodeId: 1 }
        ]
    },
    {
        id: 6,
        text: "با هم خونه ربات رو پیدا کردید! اون بهت یه ستاره درخشان جایزه داد. تو یه قهرمانی!",
        // You found the robot's home together! It gave you a shining star as a reward. You are a hero!
        image: "robot_home",
        choices: [
            { text: "هورا! پایان 🎉", nextNodeId: 1 }
        ]
    },
    {
        id: 7,
        text: "بازی کردی ولی ربات تنها موند. شاید دفعه بعد بتونی قهرمانش باشی.",
        // You played but the robot stayed alone. Maybe next time you can be its hero.
        image: "lonely_robot",
        choices: [
            { text: "شروع دوباره 🔄", nextNodeId: 1 }
        ]
    },
    {
        id: 8,
        text: "با نقشه به قصر شکلاتی رسیدی! امروز بهترین روز بود.",
        // With the map, you reached the Chocolate Palace! Today was the best day.
        image: "chocolate_palace",
        choices: [
            { text: "بازی دوباره 🔄", nextNodeId: 1 }
        ]
    }
];
