import styled from "styled-components";
import { StyledProps } from "../../library";

export const Wrapper = styled.div<StyledProps>`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) =>
    theme === "light" ? "#f1f5f9" : "#0a0f1e"};
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100vh;
  align-items: stretch;
  flex-direction: column;
  overflow: hidden;
`;

export const Text = styled.p<StyledProps>`
  font-size: 0.95rem;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
`;

export const Image = styled.img`
  width: 80px;
  margin-bottom: 16px;
  opacity: 0.4;
`;

export const Line = styled.div`
  height: 72px;
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const MobileHide = styled.div`
  display: none;
  @media screen and (min-width: 869px) {
    display: block;
  }
`;
