import styled from "styled-components";
import { StyledProps } from "../../../library";

export const Flex = styled.div<StyledProps>`
  display: flex;
  height: 72px;
  padding: 10px 14px;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  margin: 2px 8px;
  transition: background 0.15s ease;

  &:hover {
    background: ${({ theme }) =>
      theme === "light" ? "#f1f5f9" : "rgba(255,255,255,0.05)"};
  }

  &.active {
    background: ${({ theme }) =>
      theme === "light"
        ? "rgba(79,142,247,0.1)"
        : "rgba(79,142,247,0.12)"};
    border: 1px solid ${({ theme }) =>
      theme === "light" ? "rgba(79,142,247,0.2)" : "rgba(79,142,247,0.2)"};
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  margin-right: 12px;
  object-fit: cover;
  flex-shrink: 0;
  background: #1e293b;
`;

export const Name = styled.p<StyledProps>`
  font-weight: 600;
  font-size: 0.92rem;
  padding-bottom: 3px;
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
`;

export const LastMessage = styled.p<StyledProps>`
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;

export const Notify = styled.div<StyledProps>`
  right: 14px;
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #4f8ef7;
  box-shadow: 0 0 8px rgba(79,142,247,0.7);
  font-size: 0;
  color: transparent;

  svg { display: none; }
`;

export const Relative = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`;

export const ImagePrimary = styled.img`
  top: -4px;
  left: -32px;
  z-index: 1;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #4f8ef7;
  background: #111;
  object-fit: cover;
`;

export const ImageSecondary = styled.img`
  top: -24px;
  left: -8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #8b5cf6;
  background: #111;
  object-fit: cover;
`;
