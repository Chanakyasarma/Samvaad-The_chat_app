import styled from "styled-components";
import { StyledProps } from "../../../../library";

export const LeftMessageContainer = styled.div`
  gap: 8px;
  display: flex;
  margin: 16px 0;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;

  .extraMarginBottom { margin-bottom: 20px; }

  @media screen and (max-width: 480px) { margin: 12px 0; }
`;

export const LeftMessageImage = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  .image {
    width: 200px;
    border-radius: 14px;
    overflow: hidden;
  }
`;

export const LeftReplyMessage = styled.div<StyledProps>`
  gap: 8px;
  display: flex;
  margin-bottom: -32px;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  > div {
    padding: 10px 14px;
    line-height: 1.5;
    font-size: 0.88rem;
    max-width: 500px;
    position: relative;
    border-radius: 14px;
    color: ${({ theme }) => theme === "light" ? "#64748b" : "#64748b"};
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#1e293b"};
    border-left: 3px solid #4f8ef7;
    border-bottom-left-radius: 4px;
    opacity: 0.85;
  }
`;

export const MessageAvatar = styled.div`
  position: relative;
  flex-shrink: 0;
`;

export const LeftMessageTextLink = styled.div<StyledProps>`
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  padding: 10px 14px;
  line-height: 1.6;
  font-size: 0.92rem;
  max-width: 500px;
  position: relative;
  border-radius: 18px;
  border-bottom-left-radius: 4px;
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);

  .absolute { position: absolute; }
  a { color: #4f8ef7; text-decoration: underline; }
`;

export const LeftMessageFile = styled.a<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 14px;
  border-bottom-left-radius: 4px;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: all 0.2s ease;

  &:hover {
    border-color: #4f8ef7;
    box-shadow: 0 4px 12px rgba(79,142,247,0.15);
  }

  svg {
    font-size: 1.3rem;
    color: #4f8ef7;
    flex-shrink: 0;
  }

  p {
    margin: 0 10px;
    flex: 1;
    font-size: 0.88rem;
    overflow: hidden;
    font-weight: 500;
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p:last-child {
    font-size: 0.78rem;
    color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
    font-weight: 400;
    flex: none;
  }
`;

export const LeftMessageRemoved = styled.div<StyledProps>`
  padding: 10px 14px;
  border-radius: 14px;
  border-bottom-left-radius: 4px;
  font-style: italic;
  font-size: 0.88rem;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
  border: 1.5px dashed ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
`;

export const LeftMessageActions = styled.div<StyledProps>`
  transition: opacity 0.2s ease;
  opacity: 0;

  @media screen and (max-width: 1024px) { opacity: 1; }

  &:hover { opacity: 1; }

  button {
    border: none;
    margin: 0 3px;
    padding: 6px;
    border-radius: 8px;
    color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
    font-size: 1.2rem;
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
    transition: all 0.2s ease;

    &:hover {
      color: #4f8ef7;
      background: ${({ theme }) => theme === "light" ? "#e0edff" : "#1a2540"};
    }

    &:first-child { font-size: 1rem; }
  }
`;
