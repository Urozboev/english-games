const seasons = [
    { "WordSortGame": { text: "Winter is cold and snowy." } },
    { "WordSortGame": { text: "Leaves fall from trees in autumn." } },
    { "WordSortGame": { text: "In spring, flowers bloom beautifully." } },
    { "WordSortGame": { text: "Summer days are hot and sunny." } },
    {
        "WordImageGame": {
            initialWords: ['Winter', 'Autumn', 'Spring', 'Summer'],
            initialImages: [
                { id: 1, src: 'https://media.istockphoto.com/id/157639332/photo/winter-landscape-with-snow-and-trees.jpg?s=612x612&w=0&k=20&c=B-AXPVccjc0RZfFAx3BiiJFriyK4cDr5UatnDNY748s=', word: 'Winter' },
                { id: 2, src: "https://media.istockphoto.com/id/1176602671/photo/falling-autumn-leaves-before-sunset.jpg?s=612x612&w=0&k=20&c=q5syXIvFQOw1VQjXKZifqNkM44pkv7Gu8TG52TG7e7s=", word: 'Autumn' },
                { id: 3, src: "https://media.istockphoto.com/id/674833094/photo/cherry-tree-blossom.jpg?s=612x612&w=0&k=20&c=Mcdqod2YZRzIbP3juutyYe2warEFMWHrBsvOoB1xFAc=", word: 'Spring' },
                { id: 4, src: 'https://miro.medium.com/v2/resize:fit:1400/0*1DtL639ZXJQj8ZDA.jpg', word: 'Summer' },
            ]
        }
    },
    {
        "WordImageGame": {
            initialWords: ['Snowman', 'Rainbow', 'Sunflower', 'Snowflake'],
            initialImages: [
                { id: 1, src: 'https://media.istockphoto.com/id/629653980/photo/snowman.jpg?s=612x612&w=0&k=20&c=Mbsnibgwa0VuiwcJQLrzchvPqWnI9GIYVFdGPttx4eE=', word: 'Snowman' },
                { id: 2, src: "https://st3.depositphotos.com/1003352/16380/i/450/depositphotos_163808604-stock-photo-spring-bloom-1.jpg", word: 'Rainbow' },
                { id: 3, src: "https://t4.ftcdn.net/jpg/01/69/35/55/360_F_169355573_FY3tBkkBbk5EuN1lpEij4dqe1biNLK1R.jpg", word: 'Sunflower' },
                { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDPI2-BJO_IZBtQV9xOdFkceLjfYnUwZIAg&s', word: 'Snowflake' },
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
    { "PuzzleImageGame": { imgLink: "https://static.vecteezy.com/system/resources/previews/015/936/079/non_2x/3d-text-winter-market-file-vector.jpg", key: "Winter" } },
    { "PuzzleImageGame": { imgLink: "https://img.freepik.com/free-vector/realistic-text-illustration-fall-season-celebration_23-2150678186.jpg", key: "Autumn" } },
    { "PuzzleImageGame": { imgLink: "https://thumbs.dreamstime.com/b/vector-spring-text-design-colorful-realistic-elements-like-flowers-vines-background-illustration-66925666.jpg", key: "Spring" } },
    { "PuzzleImageGame": { imgLink: "https://img.freepik.com/premium-vector/summer-3d-editable-text-style-effect_57516-987.jpg", key: "Summer" } }
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
                { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg', word: 'Lion' },
                { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg', word: 'Elephant' },
                { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg', word: 'Tiger' },
                { id: 4, src: 'https://imagedelivery.net/0ObHXyjKhN5YJrtuYFSvjQ/i-099e06d2-bfae-4534-b2cc-559ffdcbbb6a-macaw-parrot-yellow-and-blue-bird-12x18-print-andy-evans-photos/display', word: 'Parrot' },
            ]
        }
    },
    { "PronunciationGame": { text: "Elephant" } },
    { "PronunciationGame": { text: "Tiger" } },
    { "PronunciationGame": { text: "Parrot" } },
    { "PronunciationGame": { text: "Lion" } },
    { "PuzzleImageGame": { imgLink: "https://cdn.textstudio.com/output/sample/normal/1/7/8/4/lion-logo-73-4871.png", key: "Lion" } },
    { "PuzzleImageGame": { imgLink: "https://cdn.textstudio.com/output/sample/normal/6/2/9/6/elephant-logo-73-6926.png", key: "Elephant" } },
    { "PuzzleImageGame": { imgLink: "https://cdn.textstudio.com/output/sample/normal/4/1/9/6/tiger-logo-73-6914.png", key: "Tiger" } },
    { "PuzzleImageGame": { imgLink: "https://cdn.textstudio.com/output/sample/normal/3/4/9/6/parrot-logo-73-6943.png", key: "Parrot" } }
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
                { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kYRh8XaskjEVDQ0fY2bVOZYkdYZPCbFeKQ&s', word: 'Mother' },
                { id: 2, src: 'https://static.vecteezy.com/system/resources/previews/045/743/102/non_2x/father-and-son-vector.jpg', word: 'Father' },
                { id: 3, src: 'https://psychologybenefits.org/wp-content/uploads/2016/11/blog-grandparents.jpg', word: 'Grandparents' },
                { id: 4, src: 'https://jedfoundation.org/wp-content/uploads/2021/03/How-to-Follow-Your-Instincts-When-Worried-About-a-Friend-scaled.jpeg', word: 'Friend' },
            ]
        }
    },
    { "PronunciationGame": { text: "Mother" } },
    { "PronunciationGame": { text: "Father" } },
    { "PronunciationGame": { text: "Grandparents" } },
    { "PronunciationGame": { text: "Friend" } },
    { "PuzzleImageGame": { imgLink: "https://thumbs.dreamstime.com/b/floral-family-text-colorful-blossoms-blue-background-global-day-351990640.jpg", key: "Family" } },
    { "PuzzleImageGame": { imgLink: "https://c8.alamy.com/comp/2CCENMG/word-friends-written-with-color-sponge-2CCENMG.jpg", key: "Friends" } },
    { "PuzzleImageGame": { imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQw6oB5ffkB4v0lqw2RVer5g2a8LTuOGyqQ&s", key: "Brother" } },
    { "PuzzleImageGame": { imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iqGoxGLnNZjuPViIPO0jr3rsP50tEAufjA&s", key: "Father" } }
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
                { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Cinderella_and_Prince.jpg', word: 'Cinderella' },
                { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Jack_and_beanstalk.jpg', word: 'Jack' },
                { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Wolf_in_forest.jpg', word: 'Wolf' },
                { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Snow_White_and_the_Seven_Dwarfs.jpg', word: 'Snow White' },
            ]
        }
    },
    { "PronunciationGame": { text: "Cinderella" } },
    { "PronunciationGame": { text: "Beanstalk" } },
    { "PronunciationGame": { text: "Wolf" } },
    { "PronunciationGame": { text: "Snow White" } },
    { "PuzzleImageGame": { imgLink: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Cinderella_carriage.jpg", key: "Cinderella" } },
    { "PuzzleImageGame": { imgLink: "https://upload.wikimedia.org/wikipedia/commons/6/64/Jack_and_giant.jpg", key: "Jack" } },
    { "PuzzleImageGame": { imgLink: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Big_bad_wolf.jpg", key: "Wolf" } },
    { "PuzzleImageGame": { imgLink: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Snow_White_dwarfs.jpg", key: "Snow White" } }
];

const weather = [];
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