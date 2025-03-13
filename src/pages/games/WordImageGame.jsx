import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Confetti from 'react-confetti';
import { Modal } from 'react-bootstrap';
import { Button } from 'antd';
import MyButton from '../../components/navbar/button/MyButton';
import { ReloadOutlined, LoadingOutlined, DoubleRightOutlined } from '@ant-design/icons';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const WordImageGame = ({ counter, data }) => {
  const initialWords = data['initialWords'];
  const initialImages = data['initialImages']

  const [show, setShow] = useState(false);
  const [words, setWords] = useState([]);
  const [images, setImages] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [incorrectPairs, setIncorrectPairs] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shake, setShake] = useState(false);
  const [lines, setLines] = useState({}); // Har bir rasm uchun bitta chiziq saqlash

  const shuffleGame = () => {
    setWords(shuffleArray([...initialWords]));
    setImages(shuffleArray([...initialImages]));
    setMatchedPairs([]);
    setIncorrectPairs([]);
    setShowConfetti(false);
    setLines({}); // Chiziqlarni tozalash
  };

  useEffect(() => {
    shuffleGame();
  }, [initialWords, initialImages]);

  const handleDrop = (word, image, initialOffset, currentOffset) => {
    if (word === image.word) {
      setMatchedPairs([...matchedPairs, { word, image }]);
    } else {
      setIncorrectPairs([...incorrectPairs, { word, image }]);
    }

    // Yangi chiziq qo'shish
    const newLine = {
      x1: initialOffset.x + 50, // So'zning o'rtasi
      y1: initialOffset.y + 10, // So'zning o'rtasi
      x2: currentOffset.x + 50, // Rasmning o'rtasi
      y2: currentOffset.y + 50, // Rasmning o'rtasi
      word, // So'zni ham saqlash (agar kerak bo'lsa)
    };

    // Avvalgi chiziqni o'chirish va yangisini qo'shish
    setLines((prevLines) => ({
      ...prevLines,
      [image.id]: newLine, // Har bir rasm uchun bitta chiziq saqlash
    }));
  };

  const checkAnswers = () => {
    if (matchedPairs.length === initialWords.length) {
      setShowConfetti(true); // Hammasi to'g'ri bo'lsa, zarchalar otish
      setShow(true);
    } else {
      setShake(true); // Xato bo'lsa, ekran qaltirash
      setTimeout(() => setShake(false), 500); // 0.5 soniyadan so'ng qaltirashni to'xtatish
      shuffleGame(); // Barcha belgilanganlar bosh holatiga qaytadi
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={shake ? 'shake' : ''}>
        {showConfetti && <Confetti />}
        <Button type='primary' size='large' onClick={shuffleGame} style={{ marginBottom: '20px' }} icon={<ReloadOutlined />}>
          Yangilash
        </Button>
        <MyButton onClick={checkAnswers} style={{ marginBottom: '20px', marginLeft: '10px' }}>
          Tekshirish
        </MyButton>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div>
            <h2>Words</h2>
            {words.map((word, index) => (
              <Word key={index} word={word} onDrop={handleDrop} />
            ))}
          </div>
          <div>
            <h2>Images</h2>
            {images.map((image) => (
              <Image key={image.id} image={image} onDrop={handleDrop} />
            ))}
          </div>
        </div>
        <DragPreview lines={lines} />
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
    </DndProvider>
  );
};

const Word = ({ word, onDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'WORD',
    item: { word },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Button
      color="primary"
      variant="dashed"
      size='large'
      ref={drag}
      style={{
        display: 'block',
        opacity: isDragging ? 0.5 : 1,
        // padding: '10px',
        margin: '10px',
        cursor: 'move',
        fontWeight: 700
      }}
      icon={<LoadingOutlined />}
    >
      {word}
    </Button>
  );
};

const Image = ({ image, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'WORD',
    drop: (item, monitor) => {
      const initialOffset = monitor.getInitialSourceClientOffset();
      const currentOffset = monitor.getSourceClientOffset();
      onDrop(item.word, image, initialOffset, currentOffset);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        padding: '5px',
        margin: '10px',
        border: '1px solid #1677ff',
        borderRadius: '5px',
        backgroundColor: isOver ? 'lightgrey' : 'white',
      }}
    >
      <img src={image.src} alt={image.word} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
    </div>
  );
};

const DragPreview = ({ lines }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 100,
        width: '100%',
        height: '100%',
      }}
    >
      <svg style={{ width: '100%', height: '100%' }}>
        {Object.entries(lines).map(([imageId, line]) => (
          <line
            key={imageId}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#1677ff"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
};

// CSS animatsiyalari
const styles = `
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }
  .shake {
    animation: shake 0.5s;
  }
`;

// CSS qo'shish
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default WordImageGame;