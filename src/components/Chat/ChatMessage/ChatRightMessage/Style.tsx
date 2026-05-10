import styled from "styled-components";
import { StyledProps } from "../../../../library";

export const RightReplyMessage = styled.div<StyledProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -10px;
  padding-right: 8px;

  > div {
    padding: 8px 12px;
    line-height: 1.4;
    font-size: 0.82rem;
    max-width: 420px;
    border-radius: 12px;
    border-bottom-right-radius: 2px;
    color: #94a3b8;
    background: rgba(79,142,247,0.12);
    border-right: 3px solid #4f8ef7;
    opacity: 0.85;
  }
`;

export const RightMessageContainer = styled.div`
  display: flex;
  margin: 4px 0;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;
  position: relative;
`;

export const RightMessageTextLink = styled.div<StyledProps>`
  color: #ffffff;
  padding: 10px 14px;
  line-height: 1.55;
  font-size: 0.92rem;
  max-width: 460px;
  word-break: break-word;
  position: relative;
  border-radius: 18px;
  border-bottom-right-radius: 4px;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 3px 12px rgba(79,142,247,0.3);

  .absolute { position: absolute; }
  a { color: #bfdbfe; text-decoration: underline; }
  span { display: inline; }
`;

export const RightMessageImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .image {
    max-width: 240px;
    width: 100%;
    border-radius: 14px;
    border-bottom-right-radius: 4px;
    display: block;
  }
`;

export const RightMessageFile = styled.a<StyledProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 260px;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 14px;
  border-bottom-right-radius: 4px;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  box-shadow: 0 3px 12px rgba(79,142,247,0.25);
  transition: all 0.2s ease;

  &:hover { box-shadow: 0 6px 18px rgba(79,142,247,0.45); transform: translateY(-1px); }

  svg { font-size: 1.2rem; color: rgba(255,255,255,0.85); flex-shrink: 0; }

  p {
    margin: 0;
    font-size: 0.85rem;
    overflow: hidden;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
  }

  p:last-child {
    font-size: 0.76rem;
    color: rgba(255,255,255,0.6);
    font-weight: 400;
    flex: none;
  }
`;

export const RightMessageRemoved = styled.div<StyledProps>`
  padding: 9px 13px;
  border-radius: 14px;
  border-bottom-right-radius: 4px;
  font-style: italic;
  font-size: 0.85rem;
  color: #64748b;
  border: 1.5px dashed #334155;
`;

export const RightMessageActions = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  opacity: 0;
  transition: opacity 0.15s ease;

  @media screen and (max-width: 1024px) { opacity: 1; }

  ${RightMessageContainer}:hover & { opacity: 1; }

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

export const MessageAvatar = styled.div`
  position: absolute;
`;
