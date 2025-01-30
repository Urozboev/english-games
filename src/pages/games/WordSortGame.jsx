import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable, rectSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

const WordSortGame = () => {
  const originalSentence = "The game is working fine."; // Asl jumla
  const [userWords, setUserWords] = useState(shuffleArray(originalSentence.split(" "))); // So'zlar aralashtirilgan

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      return "To'g'ri! 🎉";
    } else {
      return "Xato. Qayta urinib ko'ring! ❌";
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
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
        onClick={handleShow}
        // onClick={checkAnswer}
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
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Natijangiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{checkAnswer()}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Yopish
          </Button>
          <Button variant="primary">Keyingisi</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WordSortGame;
