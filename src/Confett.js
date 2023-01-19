import React, {useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';
import './Confett.css'

const Confetti = () => {
    const [windowDi, setWindowDi] = useState({width: window.innerWidth, height: window.innerHeight});

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
            <ReactConfetti
                width={windowDi.width}
                height={500}
                tweenDuration={1000}
            />
            <div>LOL</div>
        </div>
    );
};

export default Confetti;