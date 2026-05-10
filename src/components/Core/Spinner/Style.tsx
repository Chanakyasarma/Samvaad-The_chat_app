import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.div`
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    z-index: 5;
    color: #4f8ef7;
    font-size: 2rem;
    position: relative;
    animation: ${spin} 0.6s linear infinite;
  }
`;
