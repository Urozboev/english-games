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
const plantsAndNatures = [
    {
        "WordSortGame": {
            "text": "A tree has roots, a trunk, branches, and leaves."
        }
    },
    {
        "WordSortGame": {
            "text": "Plants need sunlight and water to grow."
        }
    },
    {
        "WordSortGame": {
            "text": "Flowers bloom in spring and attract bees."
        }
    },
    {
        "WordSortGame": {
            "text": "Grass covers the ground and is often green."
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Tree", "Flower", "Grass", "Sun"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/tree.jpg",
                    "word": "Tree"
                },
                {
                    "id": 2,
                    "src": "/assets/images/flower.jpg",
                    "word": "Flower"
                },
                {
                    "id": 3,
                    "src": "/assets/images/grass.png",
                    "word": "Grass"
                },
                {
                    "id": 4,
                    "src": "/assets/images/sun.webp",
                    "word": "Sun"
                }
            ]
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Leaf", "Rain", "Cloud", "Mountain"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/leaf.avif",
                    "word": "Leaf"
                },
                {
                    "id": 2,
                    "src": "/assets/images/rain.jpg",
                    "word": "Rain"
                },
                {
                    "id": 3,
                    "src": "/assets/images/cloud.jpg",
                    "word": "Cloud"
                },
                {
                    "id": 4,
                    "src": "/assets/images/mountain.jpg",
                    "word": "Mountain"
                }
            ]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ has colorful petals and a nice smell.",
            "correctAnswers": ["flower"],
            "allOptions": ["flower", "tree", "leaf", "grass"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ need water and sunlight to grow.",
            "correctAnswers": ["Plants"],
            "allOptions": ["Plants", "Clouds", "Mountains", "Animals"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "The ___ gives light and warmth to Earth.",
            "correctAnswers": ["Sun"],
            "allOptions": ["Sun", "Rain", "Leaf", "Tree"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "Leaves grow on the branches of a ___.",
            "correctAnswers": ["tree"],
            "allOptions": ["tree", "grass", "flower", "sun"]
        }
    },
    {
        "PronunciationGame": {
            "text": "Flower"
        }
    },
    {
        "PronunciationGame": {
            "text": "Tree"
        }
    },
    {
        "PronunciationGame": {
            "text": "Leaf"
        }
    },
    {
        "PronunciationGame": {
            "text": "Sunlight"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/treetext.jpg",
            "key": "Tree"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/flowertxt.avif",
            "key": "Flower"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/sunlighttext.avif",
            "key": "Sunlight"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/grasstext.avif",
            "key": "Grass"
        }
    }
];

const transportation = [
    {
        "WordSortGame": {
            "text": "A car has four wheels and is used for traveling on roads."
        }
    },
    {
        "WordSortGame": {
            "text": "A bicycle is a two-wheeled vehicle powered by pedaling."
        }
    },
    {
        "WordSortGame": {
            "text": "Airplanes fly in the sky and carry passengers quickly."
        }
    },
    {
        "WordSortGame": {
            "text": "Buses carry many people and stop at bus stations."
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Car", "Bicycle", "Airplane", "Bus"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/car.webp",
                    "word": "Car"
                },
                {
                    "id": 2,
                    "src": "/assets/images/bicycle.jpg",
                    "word": "Bicycle"
                },
                {
                    "id": 3,
                    "src": "/assets/images/airplane.avif",
                    "word": "Airplane"
                },
                {
                    "id": 4,
                    "src": "/assets/images/bus.jpg",
                    "word": "Bus"
                }
            ]
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Train", "Boat", "Motorcycle", "Helicopter"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/train.jpg",
                    "word": "Train"
                },
                {
                    "id": 2,
                    "src": "/assets/images/boat.jpg",
                    "word": "Boat"
                },
                {
                    "id": 3,
                    "src": "/assets/images/motorcycle.jpg",
                    "word": "Motorcycle"
                },
                {
                    "id": 4,
                    "src": "/assets/images/helicopter.jpg",
                    "word": "Helicopter"
                }
            ]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ has two wheels and is powered by pedaling.",
            "correctAnswers": ["bicycle"],
            "allOptions": ["bicycle", "car", "bus", "boat"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ can fly and carry people through the air.",
            "correctAnswers": ["Airplanes"],
            "allOptions": ["Airplanes", "Buses", "Cars", "Boats"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ moves on tracks and can be very long.",
            "correctAnswers": ["train"],
            "allOptions": ["train", "car", "boat", "bike"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ is used to travel on water.",
            "correctAnswers": ["A boat"],
            "allOptions": ["A boat", "A train", "A bicycle", "A bus"]
        }
    },
    {
        "PronunciationGame": {
            "text": "Car"
        }
    },
    {
        "PronunciationGame": {
            "text": "Bicycle"
        }
    },
    {
        "PronunciationGame": {
            "text": "Airplane"
        }
    },
    {
        "PronunciationGame": {
            "text": "Train"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/cartxt.webp",
            "key": "Car"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/airplanetext.webp",
            "key": "Airplane"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/bicycletxt.avif",
            "key": "Bicycle"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/bustxt.jpg",
            "key": "Bus"
        }
    }
];

const holidaysAndCelebration = [
    {
        "WordSortGame": {
            "text": "People decorate their homes with lights during holidays."
        }
    },
    {
        "WordSortGame": {
            "text": "On birthdays, people eat cake and give gifts."
        }
    },
    {
        "WordSortGame": {
            "text": "Many people watch fireworks on New Year's Eve."
        }
    },
    {
        "WordSortGame": {
            "text": "During holidays, families often eat special meals together."
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Birthday", "New Year", "Eid", "Wedding"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/birthday.avif",
                    "word": "Birthday"
                },
                {
                    "id": 2,
                    "src": "/assets/images/new_year.avif",
                    "word": "New Year"
                },
                {
                    "id": 3,
                    "src": "/assets/images/eid.jpg",
                    "word": "Eid"
                },
                {
                    "id": 4,
                    "src": "/assets/images/wedding.jpg",
                    "word": "Wedding"
                }
            ]
        }
    },
    {
        "WordImageGame": {
            "initialWords": ["Cake", "Fireworks", "Gift", "Party"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/cake.avif",
                    "word": "Cake"
                },
                {
                    "id": 2,
                    "src": "/assets/images/fireworks.avif",
                    "word": "Fireworks"
                },
                {
                    "id": 3,
                    "src": "/assets/images/gift.avif",
                    "word": "Gift"
                },
                {
                    "id": 4,
                    "src": "/assets/images/party.jpg",
                    "word": "Party"
                }
            ]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "On your ___, people often sing and give you gifts.",
            "correctAnswers": ["birthday"],
            "allOptions": ["birthday", "Eid", "New Year", "Holiday"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ are bright and colorful lights in the sky.",
            "correctAnswers": ["Fireworks"],
            "allOptions": ["Fireworks", "Candles", "Stars", "Lanterns"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ is a holiday when families gather and enjoy special meals.",
            "correctAnswers": ["Eid"],
            "allOptions": ["Eid", "Wedding", "Birthday", "New Year"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ is often wrapped in paper and given on special days.",
            "correctAnswers": ["Gift"],
            "allOptions": ["Gift", "Balloon", "Cake", "Card"]
        }
    },
    {
        "PronunciationGame": {
            "text": "Birthday"
        }
    },
    {
        "PronunciationGame": {
            "text": "Fireworks"
        }
    },
    {
        "PronunciationGame": {
            "text": "Gift"
        }
    },
    {
        "PronunciationGame": {
            "text": "Eid"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/birthdaytext.avif",
            "key": "Birthday"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/fireworkstext.avif",
            "key": "Fireworks"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/eidtext.avif",
            "key": "Eid"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/gifttxt.avif",
            "key": "Gift"
        }
    }
];

const insects = [
    // WordSortGame
    {
        "WordSortGame": {
            "text": "A bee makes honey and lives in a hive."
        }
    },
    {
        "WordSortGame": {
            "text": "Butterflies have big wings and fly in the garden."
        }
    },
    {
        "WordSortGame": {
            "text": "Ants are small and work together."
        }
    },
    {
        "WordSortGame": {
            "text": "A mosquito bites people and drinks blood."
        }
    },
    {
        "WordSortGame": {
            "text": "Grasshoppers can jump very high."
        }
    },

    // WordImageGame 1
    {
        "WordImageGame": {
            "initialWords": ["Bee", "Butterfly", "Ant", "Mosquito"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/bee.webp",
                    "word": "Bee"
                },
                {
                    "id": 2,
                    "src": "/assets/images/butterfly.webp",
                    "word": "Butterfly"
                },
                {
                    "id": 3,
                    "src": "/assets/images/ant.jpg",
                    "word": "Ant"
                },
                {
                    "id": 4,
                    "src": "/assets/images/mosquito.avif",
                    "word": "Mosquito"
                }
            ]
        }
    },

    // WordImageGame 2
    {
        "WordImageGame": {
            "initialWords": ["Fly", "Grasshopper", "Ladybug", "Worm"],
            "initialImages": [
                {
                    "id": 1,
                    "src": "/assets/images/fly.avif",
                    "word": "Fly"
                },
                {
                    "id": 2,
                    "src": "/assets/images/grasshopper.avif",
                    "word": "Grasshopper"
                },
                {
                    "id": 3,
                    "src": "/assets/images/ladybug.jpg",
                    "word": "Ladybug"
                },
                {
                    "id": 4,
                    "src": "/assets/images/worm.jpg",
                    "word": "Worm"
                }
            ]
        }
    },

    // FillInTheBlanksGame
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ makes honey.",
            "correctAnswers": ["bee"],
            "allOptions": ["bee", "ant", "fly", "butterfly"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ have big colorful wings.",
            "correctAnswers": ["Butterflies"],
            "allOptions": ["Butterflies", "Ants", "Mosquitoes", "Bees"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ are small and strong.",
            "correctAnswers": ["Ants"],
            "allOptions": ["Ants", "Bees", "Flies", "Worms"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "A ___ can bite and makes you itch.",
            "correctAnswers": ["Mosquito"],
            "allOptions": ["Mosquito", "Bee", "Spider", "Butterfly"]
        }
    },
    {
        "FillInTheBlanksGame": {
            "sentence": "___ can jump high.",
            "correctAnswers": ["Grasshoppers"],
            "allOptions": ["Grasshoppers", "Flies", "Ants", "Worms"]
        }
    },

    // PronunciationGame
    {
        "PronunciationGame": {
            "text": "Bee"
        }
    },
    {
        "PronunciationGame": {
            "text": "Butterfly"
        }
    },
    {
        "PronunciationGame": {
            "text": "Ant"
        }
    },
    {
        "PronunciationGame": {
            "text": "Mosquito"
        }
    },
    {
        "PronunciationGame": {
            "text": "Grasshopper"
        }
    },

    // PuzzleImageGame
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/beetext.avif",
            "key": "Bee"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/butterflytext.jpg",
            "key": "Butterfly"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/anttext.png",
            "key": "Ant"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/mosquitotext.png",
            "key": "Mosquito"
        }
    },
    {
        "PuzzleImageGame": {
            "imgLink": "/assets/images/grasshoppertext.png",
            "key": "Grasshopper"
        }
    }
];

const artsAndCrafts = [
    // WordSortGame
    {
      "WordSortGame": {
        "text": "Painting is using colors to make pictures."
      }
    },
    {
      "WordSortGame": {
        "text": "We use scissors to cut paper and shapes."
      }
    },
    {
      "WordSortGame": {
        "text": "Glue helps stick pieces together in crafts."
      }
    },
    {
      "WordSortGame": {
        "text": "You can make animals using clay."
      }
    },
    {
      "WordSortGame": {
        "text": "Crayons are colorful and fun to draw with."
      }
    },
  
    // WordImageGame 1
    {
      "WordImageGame": {
        "initialWords": ["Paint", "Scissors", "Glue", "Crayon"],
        "initialImages": [
          {
            "id": 1,
            "src": "/assets/images/paint.jpg",
            "word": "Paint"
          },
          {
            "id": 2,
            "src": "/assets/images/scissors.avif",
            "word": "Scissors"
          },
          {
            "id": 3,
            "src": "/assets/images/glue.jpg",
            "word": "Glue"
          },
          {
            "id": 4,
            "src": "/assets/images/crayon.avif",
            "word": "Crayon"
          }
        ]
      }
    },
  
    // WordImageGame 2
    {
      "WordImageGame": {
        "initialWords": ["Clay", "Brush", "Paper", "Craft"],
        "initialImages": [
          {
            "id": 1,
            "src": "/assets/images/clay.jpg",
            "word": "Clay"
          },
          {
            "id": 2,
            "src": "/assets/images/brush.avif",
            "word": "Brush"
          },
          {
            "id": 3,
            "src": "/assets/images/paper.webp",
            "word": "Paper"
          },
          {
            "id": 4,
            "src": "/assets/images/craft.jpg",
            "word": "Craft"
          }
        ]
      }
    },
  
    // FillInTheBlanksGame
    {
      "FillInTheBlanksGame": {
        "sentence": "We use ___ to cut paper.",
        "correctAnswers": ["scissors"],
        "allOptions": ["scissors", "glue", "crayon", "brush"]
      }
    },
    {
      "FillInTheBlanksGame": {
        "sentence": "___ is sticky and helps join things.",
        "correctAnswers": ["Glue"],
        "allOptions": ["Glue", "Clay", "Paint", "Paper"]
      }
    },
    {
      "FillInTheBlanksGame": {
        "sentence": "___ are used to color pictures.",
        "correctAnswers": ["Crayons"],
        "allOptions": ["Crayons", "Scissors", "Brushes", "Glue"]
      }
    },
    {
      "FillInTheBlanksGame": {
        "sentence": "___ is soft and used to make shapes.",
        "correctAnswers": ["Clay"],
        "allOptions": ["Clay", "Paper", "Crayon", "Brush"]
      }
    },
    {
      "FillInTheBlanksGame": {
        "sentence": "We use a ___ to paint with colors.",
        "correctAnswers": ["Brush"],
        "allOptions": ["Brush", "Crayon", "Clay", "Glue"]
      }
    },
  
    // PronunciationGame
    {
      "PronunciationGame": {
        "text": "Paint"
      }
    },
    {
      "PronunciationGame": {
        "text": "Scissors"
      }
    },
    {
      "PronunciationGame": {
        "text": "Glue"
      }
    },
    {
      "PronunciationGame": {
        "text": "Crayon"
      }
    },
    {
      "PronunciationGame": {
        "text": "Clay"
      }
    },
  
    // PuzzleImageGame
    {
      "PuzzleImageGame": {
        "imgLink": "/assets/images/painttext.avif",
        "key": "Paint"
      }
    },
    {
      "PuzzleImageGame": {
        "imgLink": "/assets/images/scissorstext.png",
        "key": "Scissors"
      }
    },
    {
      "PuzzleImageGame": {
        "imgLink": "/assets/images/gluetext.webp",
        "key": "Glue"
      }
    },
    {
      "PuzzleImageGame": {
        "imgLink": "/assets/images/claytext.avif",
        "key": "Clay"
      }
    },
    {
      "PuzzleImageGame": {
        "imgLink": "/assets/images/crayontext.jpg",
        "key": "Crayon"
      }
    }
  ];
  



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