const seasons = [
    { "WordSortGame": { text: "Winter is cold and snowy." } },
    { "WordSortGame": { text: "Leaves fall from trees in autumn." } },
    { "WordSortGame": { text: "In spring, flowers bloom beautifully." } },
    { "WordSortGame": { text: "Summer days are hot and sunny." } },
    {
        "WordImageGame": {
            initialWords: ['Winter', 'Autumn', 'Spring', 'Summer'],
            initialImages: [
                { id: 1, src: '/assets/images/winter1.jpg', word: 'Winter' },
                { id: 2, src: "/assets/images/autumn1.jpg", word: 'Autumn' },
                { id: 3, src: "/assets/images/spring1.jpg", word: 'Spring' },
                { id: 4, src: '/assets/images/summer1.jpg', word: 'Summer' },
            ]
        }
    },
    {
        "WordImageGame": {
            initialWords: ['Snowman', 'Rainbow', 'Sunflower', 'Snowflake'],
            initialImages: [
                { id: 1, src: '/assets/images/snowman.jpg', word: 'Snowman' },
                { id: 2, src: "/assets/images/rainbow.jpg", word: 'Rainbow' },
                { id: 3, src: "/assets/images/sunflower.jpg", word: 'Sunflower' },
                { id: 4, src: '/assets/images/snowflake.jpg', word: 'Snowflake' },
            ]
        }
    },
    { "FillInTheBlanksGame": { sentence: "The ___ is covered with snow in winter.", correctAnswers: ['ground'], allOptions: ['ground', 'tree', 'river', 'cloud'] } },
    { "FillInTheBlanksGame": { sentence: "In autumn, the ___ turn yellow and fall.", correctAnswers: ['leaves'], allOptions: ['leaves', 'flowers', 'sun', 'snow'] } },
    { "FillInTheBlanksGame": { sentence: "In summer, the ___ shines brightly in the sky.", correctAnswers: ['sun'], allOptions: ['sun', 'moon', 'rain', 'snow'] } },
    { "FillInTheBlanksGame": { sentence: "___ is the season when everything wakes up and grows.", correctAnswers: ['Spring'], allOptions: ['Winter', 'Spring', 'Summer', 'Autumn'] } },
    { "PronunciationGame": { text: "Autumn" } },
    { "PronunciationGame": { text: "Snowflake" } },
    { "PronunciationGame": { text: "Blossom" } },
    { "PronunciationGame": { text: "Sunshine" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/wintertext.jpg", key: "Winter" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/autumntext.avif", key: "Autumn" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/springtext.webp", key: "Spring" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/summertext.avif", key: "Summer" } }
]

const animals = [
    { "WordSortGame": { text: "Lions are strong and live in the wild." } },
    { "WordSortGame": { text: "Elephants have long trunks and big ears." } },
    { "WordSortGame": { text: "Parrots can talk and are very colorful." } },
    { "WordSortGame": { text: "Tigers are fast and have striped fur." } },
    { "FillInTheBlanksGame": { sentence: "The ___ can fly in the sky.", correctAnswers: ['bird'], allOptions: ['bird', 'dog', 'elephant', 'tiger'] } },
    { "FillInTheBlanksGame": { sentence: "The ___ is the king of the jungle.", correctAnswers: ['lion'], allOptions: ['lion', 'rabbit', 'fish', 'horse'] } },
    { "FillInTheBlanksGame": { sentence: "The ___ has a long trunk and big ears.", correctAnswers: ['elephant'], allOptions: ['elephant', 'dog', 'cat', 'lion'] } },
    { "FillInTheBlanksGame": { sentence: "The ___ has colorful feathers and can mimic words.", correctAnswers: ['parrot'], allOptions: ['parrot', 'eagle', 'crow', 'pigeon'] } },
    {
        "WordImageGame": {
            initialWords: ['Lion', 'Elephant', 'Tiger', 'Parrot'],
            initialImages: [
                { id: 1, src: '/assets/images/lion.jpg', word: 'Lion' },
                { id: 2, src: '/assets/images/elephant.jpg', word: 'Elephant' },
                { id: 3, src: '/assets/images/tiger.jpg', word: 'Tiger' },
                { id: 4, src: '/assets/images/parrot.avif', word: 'Parrot' },
            ]
        }
    },
    { "PronunciationGame": { text: "Elephant" } },
    { "PronunciationGame": { text: "Tiger" } },
    { "PronunciationGame": { text: "Parrot" } },
    { "PronunciationGame": { text: "Lion" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/liontext.png", key: "Lion" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/elephanttext.png", key: "Elephant" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/tigertext.png", key: "Tiger" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/parrottext.png", key: "Parrot" } }
];

const familyAndFriends = [
    { "WordSortGame": { text: "A mother takes care of her children." } },
    { "WordSortGame": { text: "A father works hard for the family." } },
    { "WordSortGame": { text: "Friends play and have fun together." } },
    { "WordSortGame": { text: "Grandparents love to tell stories." } },
    { "FillInTheBlanksGame": { sentence: "My ___ is my father's father.", correctAnswers: ['grandfather'], allOptions: ['grandfather', 'mother', 'uncle', 'brother'] } },
    { "FillInTheBlanksGame": { sentence: "My ___ is my mother's sister.", correctAnswers: ['aunt'], allOptions: ['aunt', 'sister', 'cousin', 'friend'] } },
    { "FillInTheBlanksGame": { sentence: "A ___ is someone who is always there for you.", correctAnswers: ['friend'], allOptions: ['friend', 'enemy', 'stranger', 'pet'] } },
    { "FillInTheBlanksGame": { sentence: "My ___ takes care of me when I am sick.", correctAnswers: ['mother'], allOptions: ['mother', 'brother', 'friend', 'teacher'] } },
    {
        "WordImageGame": {
            initialWords: ['Mother', 'Father', 'Grandparents', 'Friend'],
            initialImages: [
                { id: 1, src: '/assets/images/mother.jpg', word: 'Mother' },
                { id: 2, src: '/assets/images/father.jpg', word: 'Father' },
                { id: 3, src: '/assets/images/grandparents.jpg', word: 'Grandparents' },
                { id: 4, src: '/assets/images/friend.jpg', word: 'Friend' },
            ]
        }
    },
    { "PronunciationGame": { text: "Mother" } },
    { "PronunciationGame": { text: "Father" } },
    { "PronunciationGame": { text: "Grandparents" } },
    { "PronunciationGame": { text: "Friend" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/familytext.webp", key: "Family" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/friendstext.jpg", key: "Friends" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/brothertext.jpg", key: "Brother" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/fathertext.jpg", key: "Father" } }
];

const fairyTales = [
    { "WordSortGame": { text: "Cinderella lost her glass slipper at the ball." } },
    { "WordSortGame": { text: "The three little pigs built their houses to escape the wolf." } },
    { "WordSortGame": { text: "Jack climbed a beanstalk to a giant’s castle." } },
    { "WordSortGame": { text: "Snow White ate a poisoned apple given by the queen." } },
    { "FillInTheBlanksGame": { sentence: "Cinderella lost her ___ at the ball.", correctAnswers: ['slipper'], allOptions: ['slipper', 'dress', 'crown', 'hat'] } },
    { "FillInTheBlanksGame": { sentence: "Jack climbed a ___ to find the giant’s castle.", correctAnswers: ['beanstalk'], allOptions: ['beanstalk', 'mountain', 'tree', 'ladder'] } },
    { "FillInTheBlanksGame": { sentence: "The three little pigs built houses to escape the ___.", correctAnswers: ['wolf'], allOptions: ['wolf', 'bear', 'witch', 'giant'] } },
    { "FillInTheBlanksGame": { sentence: "Snow White ate a poisoned ___ given by the queen.", correctAnswers: ['apple'], allOptions: ['apple', 'banana', 'grape', 'orange'] } },
    {
        "WordImageGame": {
            initialWords: ['Cinderella', 'Jack', 'Wolf', 'Snow White'],
            initialImages: [
                { id: 1, src: '/assets/images/cinderella.webp', word: 'Cinderella' },
                { id: 2, src: '/assets/images/jack.webp', word: 'Jack' },
                { id: 3, src: '/assets/images/wolf.webp', word: 'Wolf' },
                { id: 4, src: '/assets/images/public/assets/images/snow_white.jpeg', word: 'Snow White' },
            ]
        }
    },
    { "PronunciationGame": { text: "Cinderella" } },
    { "PronunciationGame": { text: "Beanstalk" } },
    { "PronunciationGame": { text: "Wolf" } },
    { "PronunciationGame": { text: "Snow White" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/cindrellatext.jpg", key: "Cinderella" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/pandatext.jpg", key: "Kungfu Panda" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/big_bad_wolftext.jpg", key: "Wolf" } },
    { "PuzzleImageGame": { imgLink: "/assets/images/snow_whitetext.png", key: "Snow White" } }
];

const weather = [
    {
        "WordSortGame": {
            "text": "A thunderstorm is characterized by lightning and thunder."
        }
    },
    {
        "WordSortGame": {
            "text": "A tornado is a rapidly rotating column of air in contact with the ground."
        }
    },
    {
        "WordSortGame": {
            "text": "Hailstones are balls of ice that fall from the sky during certain storms."
        }
    },
    {
        "WordSortGame": {
            "text": "A hurricane is a powerful tropical storm with strong winds and heavy rain."
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Thunderstorm", "Tornado", "Hail", "Wind"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/thunderstorm.jpg",
                    "word": "Thunderstorm"
                },
                {
                    "id": 2,
                    "src": "/assets/images/tornado.jpg",
                    "word": "Tornado"
                },
                {
                    "id": 3,
                    "src": "/assets/images/hail.webp",
                    "word": "Hail"
                },
                {
                    "id": 4,
                    "src": "/assets/images/wind.jpg",
                    "word": "Wind"
                }
            ]
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Rain", "Rainbow", "Snow", "Hot day"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/rain.jpg",
                    "word": "Rain"
                },
                {
                    "id": 2,
                    "src": "/assets/images/rainbow.jpg",
                    "word": "Rainbow"
                },
                {
                    "id": 3,
                    "src": "/assets/images/snow.jpg",
                    "word": "Snow"
                },
                {
                    "id": 4,
                    "src": "/assets/images/hot_day.avif",
                    "word": "Hot day"
                }
            ]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "During a thunderstorm, you can often see flashes of ___.",
            "correctAnswers": ["lightning"],
            "allOptions": ["lightning", "snow", "hail", "rain"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ can cause significant damage with its high-speed winds.",
            "correctAnswers": ["tornado"],
            "allOptions": ["tornado", "rainbow", "cloud", "drizzle"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ often forms when sunlight passes through raindrops.",
            "correctAnswers": ["A rainbow"],
            "allOptions": ["A rainbow", "Hail", "Fog", "Snow"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ is frozen precipitation that can damage crops and property.",
            "correctAnswers": ["Hail"],
            "allOptions": ["Hail", "Rain", "Sleet", "Mist"]
        }
    },
    {
        "PronunciationGame": {
            "text": "Thunderstorm"
        }
    },
    {
        "PronunciationGame": {
            "text": "Tornado"
        }
    },
    {
        "PronunciationGame": {
            "text": "Hurricane"
        }
    },
    {
        "PronunciationGame": {
            "text": "Lightning"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/stormtext.avif",
            "key": "Storm"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/tornadotext.webp",
            "key": "Tornado"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/hurricanetext.webp",
            "key": "Hurricane"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/hot_daytext.avif",
            "key": "Hotday"
        }
    }

];
const plantsAndNatures = [];
const transportation = [];
const holidaysAndCelebration = [];
const insects = [];
const artsAndCrafts = [];



export const Data = {
    seasons,
    animals,
    familyAndFriends,
    fairyTales,
    weather,
    plantsAndNatures,
    transportation,
    holidaysAndCelebration,
    insects,
    artsAndCrafts,
}