import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';
import './Confett.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'

const Confetti = () => {
    const [windowDi, setWindowDi] = useState({width: window.innerWidth, height: window.innerHeight});
    const [showButton, setShowButton] = useState(false);

    const detectSize = () => {
        setWindowDi({width: window.innerWidth, height: window.innerHeight});
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDi])

    return (
        <div className="confetti-container">
            {showButton && <ReactConfetti
                width={windowDi.width}
                height={600}
                tweenDuration={1000}
            />}
            <div className="inner-container">
                <h1>新年快乐!</h1>
            </div>
            <div className="inner-container">
                <Stack direction="row" spacing={10}>
                    <Button color="error " onClick={()=> {setShowButton(!showButton)}}>点我!</Button>
                    <Button color="secondary">再点我!</Button>
                </Stack>
            </div>
        </div>
    );
};

export default Confetti;