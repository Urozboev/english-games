import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Confetti from 'react-confetti';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function PuzzleImageGame({ counter, data }) {
    const [show, setShow] = useState(false);
    const [shake, setShake] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false); // Confetti uchun state
    return (
        <div className={`w-100 border ${shake ? 'shake' : ''}`} style={{ height: "auto" }}>
            {showConfetti && <Confetti />}
            <JigsawPuzzle
                imageSrc={data['imgLink']}
                rows={3}
                columns={3}
                onSolved={() => {
                    setShowConfetti(true)
                    setShow(true)
                }}
            />
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
    )
}

export default PuzzleImageGame