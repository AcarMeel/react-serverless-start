import React, { useState, useEffect } from 'react';
import { ScoresList, ScoresLI } from '../styled/HighScores';

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
            <h1>HighScores</h1>
            <ScoresList>
                {
                    highScores.map(score => 
                    <ScoresLI key={score.id}>{score.fields.name} - { score.fields.score }</ScoresLI>)
                }
            </ScoresList>
        </div>
    )
}