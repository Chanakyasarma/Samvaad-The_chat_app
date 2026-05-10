import styled from "styled-components";
import { StyledProps } from "../../../library";
import { Link } from "react-router-dom";

export const Header = styled.div<StyledProps>`
  height: 64px;
  min-height: 64px;      /* prevent shrinking */
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};
  background: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#111827"};
  flex-shrink: 0;        /* never shrink in flex column */
`;

export const Name = styled.p<StyledProps>`
  font-weight: 600;
  font-size: 0.95rem;
  margin-left: 10px;
  color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(Link)<StyledProps>`
  display: flex;
  font-size: 1.3rem;
  margin-right: 8px;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"}; }
`;

export const SingleImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Relative = styled.div`
  position: relative;
  margin: 0 10px;
  padding-right: 8px;
`;

export const ImagePrimary = styled.img`
  top: -4px;
  left: -28px;
  z-index: 1;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #4f8ef7;
  background: #111;
  object-fit: cover;
`;

export const ImageSecondary = styled.img`
  top: -18px;
  left: -6px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #8b5cf6;
  background: #111;
  object-fit: cover;
`;

export const SettingButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.3rem;
  padding: 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  background: transparent;
  flex-shrink: 0;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;

export const GroupButton = styled(SettingButton)`
  font-size: 1.5rem;
`;
