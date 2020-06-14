import React, { useEffect, useState } from 'react';
import {useScore} from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";
import { StyledCharacter } from "../styled/Game";

export default function GameOver ({ history }) {
    const [score] = useScore();
    const [ scoreMessage, setScoreMessage ] = useState('');

    if (score === -1) {
        history.push('/');
    }

    useEffect(() => {
        const saveHighScore = async () => {
            try {
                const options = {
                    method: 'POST',
                    body: JSON.stringify({ name: 'Mel', score: score })
                }
                const res = await fetch('/.netlify/functions/saveHighScores', options);
                const data = await res.json();
                if (data.id) {
                    setScoreMessage('You got a high score');
                } else {
                    setScoreMessage('You didn\'t get a high score');
                }
            } catch (error) {
                console.error(error)
            }
        }
        saveHighScore();
    }, [])

    return (
        <div>
            <h1>GameOver</h1>
            <StyledCharacter>{ score }</StyledCharacter>
            <p>{ scoreMessage }</p>
            <StyledLink to='/'>Go Home</StyledLink>
            <StyledLink to='/game'>Play again</StyledLink>
        </div>
    )
}