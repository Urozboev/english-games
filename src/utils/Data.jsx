export const Data = [
    { "WordSortGame": { text: "The game is working fine." } },
    { "FillInTheBlanksGame": { sentence: "The ___ is red and the ___ is blue.", correctAnswers: ['apple', 'sky'], allOptions: ['apple', 'sky', 'banana', 'ocean'] } },
    {
        "WordImageGame": {
            initialWords: ['Apple', 'Banana', 'Cherry', 'Kiwi'],
            initialImages: [
                { id: 1, src: 'https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg', word: 'Apple' },
                { id: 2, src: "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Banana.jpeg", word: 'Banana' },
                { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZOawtuIvO8EDc-6oVm8c2hgQkoL3Qn0Y8Q&s", word: 'Cherry' },
                { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour_edit.jpg/640px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour_edit.jpg', word: 'Kiwi' },
            ]
        }
    },
    { "PronunciationGame": { text: "apple" } },
    { "PuzzleImageGame": { imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJ3xNTmn2uHnn_rjwt3oMaoNAnjtbHXRl2A&s", key: "english" } }
]