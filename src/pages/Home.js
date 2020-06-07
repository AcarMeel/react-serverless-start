import React from 'react';
import { Link } from 'react-router-dom'
import { Accent, StyledTitle } from '../styled/Shared'
import CTA from '../styled/CTA'

export default function Home () {
    return (
        <div>
            <StyledTitle>Ready to type?</StyledTitle>
            <CTA to='/game'>Click or type <Accent>'s'</Accent> to start playing!</CTA>
        </div>
    )
}