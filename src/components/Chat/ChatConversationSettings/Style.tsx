import styled from "styled-components";
import { StyledProps } from "../../../library";

export const Header = styled.div`
  display: flex;
  padding: 20px 20px 0 20px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1<StyledProps>`
  text-align: center;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  width: 100%;
  color: ${({ theme }) => theme === "light" ? "#0f172a" : "#f1f5f9"};
`;

export const CloseButton = styled.button`
  top: 14px;
  right: 14px;
  border: none;
  font-size: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #334155;
  color: #94a3b8;
  transition: all 0.2s;

  &:hover {
    background: #475569;
    color: #e2e8f0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 0;
`;

export const Button = styled.button<StyledProps>`
  gap: 12px;
  display: flex;
  align-items: center;
  font-size: 0.92rem;
  font-weight: 500;
  border-radius: 10px;
  background: transparent;
  margin: 2px 10px;
  padding: 11px 14px;
  border: none;
  transition: all 0.15s ease;
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};

  svg {
    font-size: 1.3rem;
    color: #4f8ef7;
  }

  &:hover {
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#334155"};
  }

  .chevron {
    font-size: 0.9rem;
    margin-left: auto;
    color: #64748b;
  }
`;

export const Form = styled.form`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
`;

export const NameInput = styled.input<StyledProps>`
  border-radius: 10px;
  font-size: 0.9rem;
  border: 1.5px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  width: 100%;
  margin-left: 10px;
  font-weight: 500;
  padding: 9px 12px;
  outline: none;
  background: ${({ theme }) => theme === "light" ? "#f8fafc" : "#0f172a"};
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  transition: border-color 0.2s;

  &:focus {
    border-color: #4f8ef7;
    box-shadow: 0 0 0 3px rgba(79,142,247,0.12);
  }
`;

export const NameButton = styled.button<StyledProps>`
  color: white;
  font-size: 0.85rem;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  font-weight: 600;
  padding: 9px 16px;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 4px 12px rgba(79,142,247,0.3);
  white-space: nowrap;
  transition: all 0.2s ease;

  &:not(:disabled):hover {
    box-shadow: 0 6px 18px rgba(79,142,247,0.5);
    transform: translateY(-1px);
  }

  &:disabled {
    background: #334155;
    color: #64748b;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
