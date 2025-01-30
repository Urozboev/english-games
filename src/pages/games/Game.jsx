import React from 'react'
import WordSortGame from './WordSortGame';
import './style.css'

function Game() {
    return (
        <div className='game-container'>
            <div className="game-content">
                <WordSortGame />
            </div>
        </div>
    )
}

export default Game