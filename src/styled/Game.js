import styled from "styled-components";

export const StyledGame = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
  height: 75vh;
  max-height: 500px;
`;

export const StyledScore = styled.p`
  font-size: 1.5rem;
`;

export const StyledTimer = styled.p`
  grid-column: 3;
  font-size: 1.5rem;
`;

export const StyledCharacter = styled.p`
  grid-row: 2;
  grid-column: 1/4;
  text-align: center;
  font-size: 15rem;
  color: #e16365;
`;