import styled from "styled-components";
import { StyledProps } from "../../../library";

export const UserList = styled.div<StyledProps>`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CheckBox = styled.input<StyledProps>`
  margin-right: 14px;
  width: 16px;
  height: 16px;
  accent-color: #4f8ef7;
  cursor: pointer;
`;

export const UserButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  transition: all 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#334155"};
  }
`;

export const UserProfilePicture = styled.img`
  border-radius: 10px;
  width: 34px;
  height: 34px;
  margin-right: 12px;
  object-fit: cover;
`;

export const UserName = styled.p<StyledProps>`
  margin: 0;
  font-size: 0.92rem;
  font-weight: 500;
  color: ${({ theme }) => theme === "light" ? "#475569" : "#94a3b8"};
`;

export const ActionButton = styled.button<StyledProps>`
  width: 100%;
  text-align: center;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.92rem;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 4px 15px rgba(79,142,247,0.3);
  transition: all 0.2s ease;

  &:not(:disabled):hover {
    box-shadow: 0 6px 20px rgba(79,142,247,0.5);
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#1e293b"};
    color: #94a3b8;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  margin-top: 16px;
`;
