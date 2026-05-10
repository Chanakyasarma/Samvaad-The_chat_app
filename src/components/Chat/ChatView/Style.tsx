import styled from "styled-components";
import { StyledProps } from "../../../library";

export const Grow = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const StylesChatView = styled.div<StyledProps>`
  padding: 16px 20px;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`;

export const Text = styled.p<StyledProps>`
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
  font-size: 0.95rem;
  margin-top: 12px;
  text-align: center;
`;

export const Image = styled.img`
  width: 80px;
  margin-bottom: 16px;
  opacity: 0.5;

  @media screen and (max-width: 440px) {
    width: 60px;
  }
`;

export const MiniWrapper = styled.div`
  gap: 2px;
  padding: 0 8px;
  display: flex;
  justify-content: end;
`;
