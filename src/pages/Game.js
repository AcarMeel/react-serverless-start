import React from 'react';
import { StyledGame, StyledScore, StyledTimer, StyledCharacter } from '../styled/Game'
import { Strong } from '../styled/Shared'

export default function Game () {
    return (
        <StyledGame>
            <StyledScore>Score: 0</StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>Time: <Strong>00:00</Strong></StyledTimer>
        </StyledGame>
    )
}