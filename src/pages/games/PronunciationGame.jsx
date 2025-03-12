import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AudioOutlined, DoubleRightOutlined } from '@ant-design/icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Confetti from 'react-confetti';
import MyButton from '../../components/navbar/button/MyButton';
import { Button, Flex } from 'antd';
import Title from 'antd/es/typography/Title';

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
      <h2 style={{ textTransform: 'uppercase', textAlign: 'center' }}>So'zni To'g'ri Talaffuz Qilish</h2>
      <Flex align='baseline' gap='middle'> So'z: <Title level={4} style={{ textTransform: 'uppercase' }} type="success">{word}</Title></Flex>
      <Button size='large' color="primary" variant="dashed" onClick={SpeechRecognition.startListening} icon={<AudioOutlined />}> Ovozni yozishni boshlash</Button >
      <MyButton onClick={checkPronunciation}>Talaffuzni tekshirish</MyButton>
      <Flex align='baseline' gap='middle'> Siz aytgan so'z: <Title level={4} style={{ textTransform: 'uppercase' }} type="warning">{transcript}</Title></Flex>

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
    </div >
  );
};

export default PronunciationGame;