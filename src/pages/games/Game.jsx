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

function Game() {
    const { contentName } = useParams();
    const [shuffledGames, setShuffledGames] = useState([]);
    const [gameIndex, setGameIndex] = useState(0);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [userName, setUserName] = useState('');
    const canvasRef = useRef(null);
    const navigate = useNavigate()

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

    // Sertifikatni chizish
    const drawCertificate = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Canvas o‘lchami
        canvas.width = 800;
        canvas.height = 600;

        // Orqa fon
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Ramka
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 5;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Sarlavha
        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.fillText('Sertifikat bilan taqdirlanadi', canvas.width / 2, 120);

        // Foydalanuvchi ismi
        ctx.font = 'bold 30px Arial';
        ctx.fillText(userName, canvas.width / 2, 220);

        // Pastki matn
        ctx.font = '20px Arial';
        ctx.fillText('ushbu mavzuni muvaffaqiyatli tugatganligi uchun!', canvas.width / 2, 300);

        // Sana
        ctx.font = '16px Arial';
        const date = new Date().toLocaleDateString();
        ctx.fillText(`Date: ${date}`, canvas.width / 2, 400);
    };

    // Sertifikatni yuklab olish
    const downloadCertificate = () => {
        drawCertificate();
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificate.png';
        link.click();
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
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
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
                {renderGame()}
            </div>
        </div>
    );
}

export default Game;
