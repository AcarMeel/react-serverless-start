import React, { useState, useEffect } from 'react';
import { StyledGame, StyledScore, StyledTimer, StyledCharacter } from '../styled/Game'
import { Strong } from '../styled/Shared'

export default function Game ({ history }) {
    const [score, setScore] = useState(0);
    const MAX_SECONDS = 5;
    const [ms, setMs] = useState(0);
    const [seconds, setSeconds] = useState(MAX_SECONDS);

    useEffect(() => {
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime),1);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (seconds <= 0 && ms <= 100) {
            history.push('/gameOver');
        }
    }, [seconds, ms, history]);

    const updateTime = (startTime) => {
        const endTime = new Date();
        const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
        const formattedMsString = ('0000' + msPassedStr).slice(-5);
        const updatedSeconds = MAX_SECONDS - parseInt(formattedMsString.substr(0,2)) - 1;
        const updateMs = 1000 - parseInt(formattedMsString.substring(formattedMsString.length - 3));
        setSeconds(addLeadingZeros(updatedSeconds,2));
        setMs(addLeadingZeros(updateMs,3));
    };

    const addLeadingZeros = (num, length) => {
        let zeros = '';
        for (let i = 0; i < length; i++) {
            zeros += '0';
        }
        return (zeros + num).slice(-length);
    };

    return (
        <StyledGame>
            <StyledScore>Score: {score}</StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>Time: <Strong>{seconds}:{ms}</Strong></StyledTimer>
        </StyledGame>
    )
}