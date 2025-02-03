import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Confetti from 'react-confetti';

const PronunciationGame = ({ counter, data }) => {
  const [word, setWord] = useState(data['text']);
  const [show, setShow] = useState(false);
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // Confetti uchun state


  const { transcript, resetTranscript } = useSpeechRecognition();

  const checkPronunciation = () => {
    if (transcript.toLowerCase() === word.toLowerCase()) {
      setShake(false);
      setShowConfetti(true); // Confetti ishlatish
      // setTimeout(() => setShowConfetti(false), 5000); // 5 soniyadan so'ng confetti to'xtatish
      setShow(true)
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }
    resetTranscript();
  };

  return (
    <div className={shake ? 'shake' : ''}>
      {showConfetti && <Confetti />}
      < h1 > So'zni To'g'ri Talaffuz Qilish</h1>
      < p > So'z: {word}</p>
      < button onClick={SpeechRecognition.startListening} > Ovozni yozishni boshlash</button >
      <button onClick={checkPronunciation}>Talaffuzni tekshirish</button>
      <p>Siz aytgan so'z: {transcript}</p>

      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Button onClick={counter} variant="primary" className='w-100'>
            Keyingi
          </Button>
        </Modal.Body>
      </Modal>
    </div >
  );
};

export default PronunciationGame;