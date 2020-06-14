import React, { useState, useEffect } from 'react';
import { ScoresList, ScoresLI } from '../styled/HighScores';
import { StyledTitle } from '../styled/Shared';

export default function HighScores () {
    const [highScores, setHighScores] = useState([]);
    useEffect(() => {
        const loadHighScores = async () => {
            try {
                const res = await fetch('/.netlify/functions/getHighScores');
                const scores = await res.json();
                setHighScores(scores);
            } catch (error) {
                console.error(error);
            }
        }
        loadHighScores();
    }, []);
    return (
        <div>
            <StyledTitle>High Scores</StyledTitle>
            <ScoresList>
                {
                    highScores.map((score, index) => 
                    <ScoresLI key={score.id}>{ index + 1}. {score.fields.name} - { score.fields.score }</ScoresLI>)
                }
            </ScoresList>
        </div>
    )
}