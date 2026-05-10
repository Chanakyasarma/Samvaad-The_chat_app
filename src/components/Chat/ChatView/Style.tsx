import styled from "styled-components";
import { StyledProps } from "../../../library";

/* Takes up all remaining vertical space between header and input */
export const Grow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const StylesChatView = styled.div<StyledProps>`
  flex: 1;
  min-height: 0;          /* critical — lets flex child shrink below content size */
  overflow-y: auto;
  padding: 16px 20px 8px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)"
      : "linear-gradient(180deg, #0a0f1e 0%, #0f172a 100%)"};

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme === "light" ? "#cbd5e1" : "#334155"};
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
  opacity: 0.4;
  @media screen and (max-width: 440px) { width: 60px; }
`;

export const MiniWrapper = styled.div`
  gap: 2px;
  padding: 0 8px 4px;
  display: flex;
  justify-content: flex-end;
`;
