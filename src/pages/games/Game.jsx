import React, { useState } from 'react';
import WordSortGame from './WordSortGame';
import './style.css';
import PuzzleImageGame from './PuzzleImageGame';
import WordImageGame from './WordImageGame';
import PronunciationGame from './PronunciationGame';
import FillInTheBlanksGame from './FillInTheBlanksGame';
import { Data } from '../../utils/Data';

function Game() {
    const [gameIndex, setGameIndex] = useState(0);

    // Keyingi o'yinga o'tish funksiyasi
    const nextGame = () => {
        if (gameIndex < Data.length - 1) {
            setGameIndex(gameIndex + 1);
        } else {
            // Agar oxirgi o'yin bo'lsa, boshidan boshlash
            setGameIndex(0);
        }
    };

    // O'yin komponentini tanlash
    const renderGame = () => {
        const currentGame = Data[gameIndex];
        const gameName = Object.keys(currentGame)[0];

        switch (gameName) {
            case "WordSortGame":
                return <WordSortGame counter={nextGame}  data={Data[gameIndex][gameName]}/>;
            case "WordImageGame":
                return <WordImageGame counter={nextGame}  data={Data[gameIndex][gameName]}/>;
            case "PuzzleImageGame":
                return <PuzzleImageGame counter={nextGame} data={Data[gameIndex][gameName]} />;
            case "PronunciationGame":
                return <PronunciationGame counter={nextGame}  data={Data[gameIndex][gameName]}/>;
            case "FillInTheBlanksGame":
                return <FillInTheBlanksGame counter={nextGame}  data={Data[gameIndex][gameName]}/>;
            default:
                return <div>O'yin topilmadi!</div>;
        }
    };

    return (
        <div className='game-container'>
            <div className="game-content">
                {renderGame()}
            </div>
        </div>
    );
}

export default Game;