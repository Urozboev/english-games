import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Confetti from 'react-confetti';

// So'zlarni aralashtirish uchun yordamchi funksiya
const shuffleArray = (array) => {
  return array
    .map((word) => ({ word, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ word }) => word);
};

// Har bir so'z uchun sortable element
const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#fff",
    borderRadius: "8px",
    cursor: "grab",
    margin: "5px",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

const WordSortGame = ({ counter, data }) => {
  const originalSentence = data['text'];
  const [userWords, setUserWords] = useState(shuffleArray(originalSentence.split(" "))); // So'zlar aralashtirilgan

  const [show, setShow] = useState(false);
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // Confetti uchun state

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setUserWords((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const checkAnswer = () => {
    if (userWords.join(" ") === originalSentence) {
      setShake(false);
      setShowConfetti(true); // Confetti ishlatish
      // setTimeout(() => setShowConfetti(false), 5000); // 5 soniyadan so'ng confetti to'xtatish
      setShow(true)
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }
  };

  // Modal ochilganda natijani tekshirish
  // useEffect(() => {
  //   if (show) {
  //     checkAnswer();
  //   }
  // }, [show]);

  return (
    <div className={shake ? 'shake' : ''} style={{ padding: "20px", textAlign: "center" }}>
      {showConfetti && <Confetti />}
      <h1>So'zlarni to'g'ri tartibga soling</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={userWords} strategy={rectSortingStrategy}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {userWords.map((word) => (
              <SortableItem key={word} id={word} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        onClick={checkAnswer}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#2196f3",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Javobni tekshirish
      </button>
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
    </div>
  );
};

export default WordSortGame;