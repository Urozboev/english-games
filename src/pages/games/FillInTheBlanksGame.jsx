import React, { useState, useEffect } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import Confetti from 'react-confetti';
import { DoubleRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const FillInTheBlanksGame = ({ counter, data }) => {
    const sentence = data.sentence;
    const correctAnswers = data['correctAnswers'];
    const allOptions = data['allOptions'];

    const [options, setOptions] = useState(shuffleArray([...allOptions]));
    const [selectedWords, setSelectedWords] = useState([]);
    const [result, setResult] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const [shake, setShake] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (selectedWords.length === correctAnswers.length) {
            if (selectedWords.join(',') === correctAnswers.join(',')) {
                setResult("To'g'ri! 🎉");
                setShowConfetti(true);
                setShow(true);
                // setTimeout(() => setShowConfetti(false), 5000); // 5 soniyadan so'ng zarchalar to'xtaydi
            } else {
                setResult("Noto'g'ri. Qayta urunib ko'ring. ❌");
                setShake(true);
                setTimeout(() => {
                    setShake(false);
                    setSelectedWords([]);
                    setOptions(shuffleArray([...allOptions]));
                }, 500); // 0.5 soniyadan so'ng qaltirash to'xtaydi
            }
        }
    }, [selectedWords, correctAnswers, allOptions]);

    const handleSelectWord = (word) => {
        if (selectedWords.includes(word)) {
            // Agar so'z tanlangan bo'lsa, uni tanlovdan chiqarish
            setSelectedWords(selectedWords.filter((w) => w !== word));
        } else if (selectedWords.length < 2) {
            // Yangi so'zni tanlash
            setSelectedWords([...selectedWords, word]);
        }
    };

    const renderSentence = () => {
        return sentence.split('___').map((part, index) => (
            <span key={index}>
                {part} {index < sentence.split('___').length - 1 ? "___" : ""}
                {index < selectedWords.length && (
                    <Badge>
                        {selectedWords[index]}
                    </Badge>
                )}
            </span>
        ));
    };

    return (
        <div className={shake ? 'shake' : ''}>
            {showConfetti && <Confetti />}
            <h1 className='text-center mb-5'>Gap to'ldirish o'yini</h1>
            <p style={{ fontSize: "20px" }}>{renderSentence()}</p>
            <div>
                {options.map((word, index) => (
                    <Button
                        size='large'
                        key={index}
                        onClick={() => handleSelectWord(word)}
                        style={{
                            marginRight: '8px',
                        }}
                        variant={selectedWords.includes(word) ? 'dashed' : 'outlined'}
                        color={selectedWords.includes(word) ? 'primary' : 'default'}
                    >
                        {word}
                    </Button>
                ))}
            </div>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Button onClick={counter} type="primary" size='large' className='w-100' icon={<DoubleRightOutlined />}>
                        Keyingi
                    </Button>
                </Modal.Body>
            </Modal>
            <p>{result}</p>
        </div>
    );
};

export default FillInTheBlanksGame;