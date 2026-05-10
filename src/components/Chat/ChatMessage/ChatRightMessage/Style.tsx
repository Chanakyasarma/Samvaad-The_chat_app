import styled from "styled-components";
import { StyledProps } from "../../../../library";

export const RightReplyMessage = styled.div<StyledProps>`
  gap: 8px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -32px;
  flex-direction: row-reverse;

  > div {
    padding: 10px 14px;
    line-height: 1.5;
    font-size: 0.88rem;
    max-width: 500px;
    position: relative;
    border-radius: 14px;
    border-bottom-right-radius: 4px;
    color: #94a3b8;
    background: rgba(79,142,247,0.12);
    border-right: 3px solid #4f8ef7;
    opacity: 0.85;
  }
`;

export const RightMessageContainer = styled.div`
  gap: 8px;
  display: flex;
  margin: 16px 0;
  position: relative;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row-reverse;

  @media screen and (max-width: 480px) { margin: 12px 0; }
`;

export const RightMessageTextLink = styled.div<StyledProps>`
  color: #ffffff;
  padding: 10px 14px;
  line-height: 1.6;
  font-size: 0.92rem;
  max-width: 500px;
  position: relative;
  border-radius: 18px;
  border-bottom-right-radius: 4px;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 4px 14px rgba(79,142,247,0.3);

  .absolute { position: absolute; }
  a { color: #bfdbfe; text-decoration: underline; }
`;

export const RightMessageImage = styled.div`
  gap: 8px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;

  .image {
    width: 200px;
    border-radius: 14px;
    overflow: hidden;
  }
`;

export const RightMessageFile = styled.a<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 14px;
  border-bottom-right-radius: 4px;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 4px 14px rgba(79,142,247,0.25);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(79,142,247,0.45);
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.3rem;
    color: rgba(255,255,255,0.8);
    flex-shrink: 0;
    transition: color 0.2s;
  }

  &:hover svg { color: #fff; }

  p {
    margin: 0 10px;
    flex: 1;
    font-size: 0.88rem;
    overflow: hidden;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p:last-child {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.6);
    font-weight: 400;
    flex: none;
  }
`;

export const RightMessageRemoved = styled.div<StyledProps>`
  padding: 10px 14px;
  margin-left: 30px;
  border-radius: 14px;
  border-bottom-right-radius: 4px;
  font-style: italic;
  font-size: 0.88rem;
  color: #64748b;
  border: 1.5px dashed #334155;
`;

export const RightMessageActions = styled.div<StyledProps>`
  transition: opacity 0.2s ease;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) { opacity: 1; }
  &:hover { opacity: 1; }

  button {
    border: none;
    margin: 0 3px;
    padding: 6px;
    border-radius: 8px;
    color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#64748b"};
    font-size: 1.1rem;
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
    transition: all 0.2s ease;

    &:hover {
      color: #4f8ef7;
      background: ${({ theme }) => theme === "light" ? "#e0edff" : "#1a2540"};
    }

    &:first-child { font-size: 1.3rem; }
  }
`;

export const MessageAvatar = styled.div`
  position: absolute;
`;
