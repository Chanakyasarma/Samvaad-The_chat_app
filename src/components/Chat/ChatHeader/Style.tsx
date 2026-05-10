import styled from "styled-components";
import { StyledProps, color } from "../../../library";
import { Link } from "react-router-dom";

export const Header = styled.div<StyledProps>`
  height: 72px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};
  background: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#111827"};
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const Name = styled.p<StyledProps>`
  font-weight: 600;
  font-size: 0.95rem;
  margin-left: 12px;
  color: ${({ theme }) =>
    theme === "light" ? "#1e293b" : "#e2e8f0"};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(Link)<StyledProps>`
  display: flex;
  font-size: 1.3rem;
  margin-right: 12px;
  color: ${({ theme }) =>
    theme === "light" ? "#64748b" : "#94a3b8"};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;

export const SingleImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 13px;
  object-fit: cover;
`;

export const Relative = styled.div`
  position: relative;
  margin: 0 12px;
  padding-right: 8px;
`;

export const ImagePrimary = styled.img<StyledProps>`
  top: -4px;
  left: -28px;
  z-index: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #4f8ef7;
  background: #111;
`;

export const ImageSecondary = styled.img`
  top: -18px;
  left: -6px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #8b5cf6;
  background: #111;
`;

export const SettingButton = styled.button<StyledProps>`
  border: none;
  display: flex;
  font-size: 1.4rem;
  padding: 8px;
  border-radius: 10px;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  background: transparent;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;

export const GroupButton = styled(SettingButton)`
  font-size: 1.6rem;
`;
