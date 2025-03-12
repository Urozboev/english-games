import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Confetti from 'react-confetti';
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Button, Flex, Input } from "antd";
import Title from "antd/es/typography/Title";
import MyButton from "../../components/navbar/button/MyButton";
import { DoubleRightOutlined } from "@ant-design/icons";

function PuzzleImageGame({ counter, data }) {
    const [show, setShow] = useState(false);
    const [shake, setShake] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [puzzleSolved, setPuzzleSolved] = useState(false);
    const [userInput, setUserInput] = useState(Array(data['key'].length).fill(""));

    const handleInputChange = (value, index) => {
        let newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const checkAnswer = () => {
        if (puzzleSolved && userInput.join("").toUpperCase() === data['key'].toUpperCase()) {
            setShow(true);
            setShowConfetti(true);
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            setUserInput(Array(data['key'].length).fill(""));
        }
    };

    return (
        <>
            <Title level={3} style={{textAlign: 'center'}}>Rasmni to'g'ri joylab chiqing va paydo bo'lgan so'zni pasdagi maydonchalarga kiriting.</Title>
            <div className={`w-100 border ${shake ? 'shake' : ''}`} style={{ height: "auto" }}>
                {showConfetti && <Confetti />}
                <JigsawPuzzle
                    imageSrc={data['imgLink']}
                    rows={4}
                    columns={4}
                    onSolved={() => setPuzzleSolved(true)}
                />
            </div>
            <Flex gap="middle" align="center" vertical style={{ marginTop: 30 }}>
                <Title level={4}>Rasmdagi so'zni kiriting</Title>
                <Flex gap="middle">
                    {data['key'].split("").map((_, index) => (
                        <Input
                            key={index}
                            maxLength={1}
                            size="large"
                            value={userInput[index] || ""}
                            onChange={(e) => handleInputChange(e.target.value, index)}
                            style={{ textAlign: "center", width: 40 }}
                        />
                    ))}
                </Flex>
                <MyButton onClick={checkAnswer}>Tekshirish</MyButton>
            </Flex>
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
        </>
    );
}

export default PuzzleImageGame;
