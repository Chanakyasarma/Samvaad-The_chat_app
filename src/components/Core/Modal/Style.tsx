import styled from "styled-components";
import { StyledProps } from "../../../library";

export const ModalContainer = styled.div<StyledProps>`
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  padding: 24px;
  width: 420px;
  position: relative;
  z-index: 1;
  max-height: 560px;
  margin: 0 8px;
  overflow-y: auto;
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }
`;

export const ModalHeader = styled.h1<StyledProps>`
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 1.4rem;
  font-family: 'Sora', sans-serif;
  color: ${({ theme }) => theme === "light" ? "#0f172a" : "#f1f5f9"};
  text-align: center;
`;

export const CloseButton = styled.button<StyledProps>`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#334155"};
  cursor: pointer;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  transition: all 0.2s ease;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#475569"};
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;
