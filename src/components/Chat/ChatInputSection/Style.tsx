import styled from "styled-components";
import { StyledProps, color } from "../../../library";

export const Container = styled.div<StyledProps>`
  display: flex;
  padding: 12px 16px;
  position: relative;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};
  background: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#111827"};
`;

export const EmojiPicker = styled.div<StyledProps>`
  position: absolute;
  bottom: 80px;
  left: 10px;

  @media screen and (max-width: 869px) {
    display: none;
  }
`;

export const Form = styled.form`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const EmojiButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover { color: ${({ theme }) => theme === "light" ? "#4f8ef7" : "#4f8ef7"}; }

  @media screen and (max-width: 869px) {
    display: none;
  }
`;

export const ImageButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  background: transparent;
  padding: 6px;
  border-radius: 8px;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
  transition: all 0.2s;

  &:hover { color: #4f8ef7; }
`;

export const FileButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  background: transparent;
  padding: 6px;
  border-radius: 8px;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
  transition: all 0.2s;

  &:hover { color: #4f8ef7; }
`;

export const InputWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  position: relative;
  align-items: center;
`;

export const Input = styled.input<StyledProps>`
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.95rem;
  padding: 11px 18px;
  border-radius: 24px;
  background: ${({ theme }) =>
    theme === "light" ? "#f1f5f9" : "#1e293b"};
  border: 1.5px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#334155"};
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  transition: all 0.2s ease;

  &:focus {
    border-color: #4f8ef7;
    box-shadow: 0 0 0 3px rgba(79,142,247,0.12);
  }

  &::placeholder {
    color: ${({ theme }) => theme === "light" ? "#cbd5e1" : "#475569"};
  }
`;

export const CloseButton = styled.button<StyledProps>`
  top: 10px;
  right: 10px;
  border: none;
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
  font-size: 1rem;
  transition: color 0.2s;

  &:hover { color: #ef4444; }
`;

export const SendButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(135deg, #4f8ef7, #8b5cf6)"
      : "linear-gradient(135deg, #4f8ef7, #8b5cf6)"};
  color: #fff;
  box-shadow: 0 4px 15px rgba(79,142,247,0.35);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    box-shadow: 0 6px 20px rgba(79,142,247,0.5);
    transform: scale(1.05);
  }

  &:disabled {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#1e293b"};
    color: ${({ theme }) => theme === "light" ? "#cbd5e1" : "#334155"};
    box-shadow: none;
  }
`;

export const DragFile = styled.div`
  z-index: 5;
  width: 100vw;
  display: flex;
  height: 100vh;
  position: fixed;
  user-select: none;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  transition: all 0.2s ease;
  background: rgba(10,15,30,0.7);
  backdrop-filter: blur(8px);
`;

export const Title = styled.div<StyledProps>`
  z-index: 30;
  color: #e2e8f0;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Sora', sans-serif;
`;

export const ReplyContainer = styled.div<StyledProps>`
  display: flex;
  position: relative;
  align-items: center;
  padding: 12px 20px;
  justify-content: space-between;
  background: ${({ theme }) =>
    theme === "light" ? "#f8fafc" : "#0f172a"};
  border-top: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};
`;

export const ReplyTitle = styled.div<StyledProps>`
  display: flex;
  font-weight: 600;
  font-size: 0.85rem;
  color: #4f8ef7;
  align-items: baseline;
  padding-bottom: 6px;
  gap: 5px;

  svg { font-size: 1rem; }
`;

export const ReplyText = styled.p<StyledProps>`
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  font-size: 0.85rem;
`;
