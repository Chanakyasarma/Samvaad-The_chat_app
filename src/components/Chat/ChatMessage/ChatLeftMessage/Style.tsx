import styled from "styled-components";
import { StyledProps } from "../../../../library";

export const LeftMessageContainer = styled.div`
  display: flex;
  margin: 4px 0;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
  position: relative;

  &.extraMarginBottom { margin-bottom: 16px; }
`;

export const LeftMessageImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  .image {
    max-width: 240px;
    width: 100%;
    border-radius: 14px;
    display: block;
  }
`;

export const LeftReplyMessage = styled.div<StyledProps>`
  display: flex;
  margin-bottom: -10px;
  padding-left: 44px;
  position: relative;
  align-items: center;
  justify-content: flex-start;

  > div {
    padding: 8px 12px;
    line-height: 1.4;
    font-size: 0.82rem;
    max-width: 420px;
    border-radius: 12px;
    border-bottom-left-radius: 2px;
    color: ${({ theme }) => theme === "light" ? "#64748b" : "#64748b"};
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#1e293b"};
    border-left: 3px solid #4f8ef7;
    opacity: 0.85;
  }
`;

export const MessageAvatar = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
`;

export const LeftMessageTextLink = styled.div<StyledProps>`
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  padding: 10px 14px;
  line-height: 1.55;
  font-size: 0.92rem;
  max-width: 460px;
  word-break: break-word;
  position: relative;
  border-radius: 18px;
  border-bottom-left-radius: 4px;
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);

  .absolute { position: absolute; }
  a { color: #4f8ef7; text-decoration: underline; }
  p { margin: 0; }
`;

export const LeftMessageFile = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 260px;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 14px;
  border-bottom-left-radius: 4px;
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  transition: all 0.2s ease;

  &:hover { border-color: #4f8ef7; box-shadow: 0 4px 12px rgba(79,142,247,0.15); }

  svg { font-size: 1.3rem; color: #4f8ef7; flex-shrink: 0; }

  p {
    margin: 0;
    font-size: 0.85rem;
    overflow: hidden;
    font-weight: 500;
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
  }

  p:last-child {
    font-size: 0.76rem;
    color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
    font-weight: 400;
    flex: none;
  }
`;

export const LeftMessageRemoved = styled.div<StyledProps>`
  padding: 9px 13px;
  border-radius: 14px;
  border-bottom-left-radius: 4px;
  font-style: italic;
  font-size: 0.85rem;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
  border: 1.5px dashed ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
`;

export const LeftMessageActions = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 0.15s ease;

  @media screen and (max-width: 1024px) { opacity: 1; }

  ${LeftMessageContainer}:hover & { opacity: 1; }

  button {
    border: none;
    padding: 5px 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
    font-size: 1rem;
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
    transition: all 0.15s ease;

    &:hover { color: #4f8ef7; background: ${({ theme }) => theme === "light" ? "#e0edff" : "#1a2540"}; }
  }

  select {
    font-size: 0.8rem;
    padding: 4px 6px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: #1e293b;
    color: #e2e8f0;
    outline: none;
    cursor: pointer;
  }
`;
