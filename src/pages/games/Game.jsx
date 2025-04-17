import './style.css'
import React, { useState, useEffect, useRef } from 'react';
import WordSortGame from './WordSortGame';
import PuzzleImageGame from './PuzzleImageGame';
import WordImageGame from './WordImageGame';
import PronunciationGame from './PronunciationGame';
import FillInTheBlanksGame from './FillInTheBlanksGame';
import { Data } from '../../utils/Data';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Flex, Input } from 'antd';
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';

function Game() {
    const { contentName } = useParams();
    const [shuffledGames, setShuffledGames] = useState([]);
    const [gameIndex, setGameIndex] = useState(0);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate()
    const certificateRef = useRef(null);

    // Shuffle qilish funksiyasi
    useEffect(() => {
        if (!contentName || !Data[contentName]) {
            navigate('/404');
            return;
        }

        const shuffleArray = (array) => {
            let shuffled = array.slice();
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        setShuffledGames(shuffleArray(Data[contentName]));
    }, [contentName, navigate]);

    // Keyingi o‘yinga o‘tish
    const nextGame = () => {
        if (gameIndex < shuffledGames.length - 1) {
            setGameIndex(gameIndex + 1);
        } else {
            setIsGameFinished(true);
        }
    };

    const downloadCertificate = () => {
        if (certificateRef.current) {
            html2canvas(certificateRef.current, {
                scale: 1, // Sifatni yaxshilash
                width: 1754, // A4 eni
                height: 1240, // A4 bo‘yi
                useCORS: true // Agar tashqi rasmlar bo‘lsa, CORS muammolarini oldini olish
            }).then((canvas) => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "certificate.png";
                link.click();
            });
            setUserName("");
        }
    };

    // Hozirgi o‘yinni chiqarish
    const renderGame = () => {
        if (isGameFinished) {
            return (
                <div className="certificate-container">
                    <h2>🎉 Tabriklaymiz! O‘yin tugadi! 🎉</h2>
                    <p>Ism familiyangizni kiriting va sertifikatni yuklab oling.</p>
                    <Input
                        size='large'
                        type="text"
                        placeholder="Ismingizni kiriting"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Flex justify='space-between' style={{ marginTop: 20 }}>
                        <Button size='large' type='primary' onClick={downloadCertificate} disabled={!userName.trim()} icon={<DownloadOutlined />}>
                            Sertifikatni yuklab olish
                        </Button>
                        <Button size='large' type='primary' href='/' icon={<HomeOutlined />}>
                            Bosh sahifa
                        </Button>
                    </Flex>
                </div>
            );
        }

        const currentGame = shuffledGames[gameIndex];
        if (!currentGame) return <div>O‘yin yuklanmoqda...</div>;

        const gameName = Object.keys(currentGame)[0];

        switch (gameName) {
            case "WordSortGame":
                return <WordSortGame counter={nextGame} data={currentGame[gameName]} />;
            case "WordImageGame":
                return <WordImageGame counter={nextGame} data={currentGame[gameName]} />;
            case "PuzzleImageGame":
                return <PuzzleImageGame counter={nextGame} data={currentGame[gameName]} />;
            case "PronunciationGame":
                return <PronunciationGame counter={nextGame} data={currentGame[gameName]} />;
            case "FillInTheBlanksGame":
                return <FillInTheBlanksGame counter={nextGame} data={currentGame[gameName]} />;
            default:
                return <div>O‘yinni yuklashda xatolik!</div>;
        }
    };

    return (
        <div className='game-container'>
            <div className="game-content">
                <div className="hidden">
                    <div ref={certificateRef} className="certificate">
                        <h1 className='certificate-own'>{userName}</h1>
                        <p className='certificate-theme'>{contentName}</p>
                    </div>
                </div>
                {renderGame()}
            </div>
        </div>
    );
}

export default Game;
