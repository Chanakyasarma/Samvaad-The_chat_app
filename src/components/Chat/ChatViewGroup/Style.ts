import styled from "styled-components";
import { StyledProps } from "../../../library";

export const AddMemberButton = styled.div<StyledProps>`
  color: white;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  border: none;
  background: linear-gradient(135deg, #4f8ef7, #6d6cf7);
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { box-shadow: 0 4px 12px rgba(79,142,247,0.4); }
`;

export const Info = styled.div<StyledProps>`
  text-align: center;
  font-size: 0.88rem;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#64748b"};
`;

export const Header = styled.div`
  display: flex;
  padding: 16px 0;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1<StyledProps>`
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: ${({ theme }) => theme === "light" ? "#0f172a" : "#f1f5f9"};
`;

export const Buttons = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: #475569; color: #e2e8f0; }
`;

export const Button = styled.button<StyledProps & { isActive?: boolean }>`
  width: 100%;
  padding: 8px;
  font-size: 0.88rem;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  margin: 16px 0;
  transition: all 0.2s ease;
  color: ${({ isActive, theme }) =>
    isActive
      ? theme === "light" ? "#1e293b" : "#e2e8f0"
      : theme === "light" ? "#64748b" : "#64748b"};
  background: ${({ isActive, theme }) =>
    isActive
      ? theme === "light" ? "#e0edff" : "rgba(79,142,247,0.15)"
      : theme === "light" ? "#f1f5f9" : "#1e293b"};
  border: 1.5px solid ${({ isActive }) =>
    isActive ? "#4f8ef7" : "transparent"};

  &:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px; }
  &:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px; }

  &:hover { border-color: #4f8ef7; }
`;

export const MemberContainer = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const MemberWrapper = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserProfilePicture = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
  background: #1e293b;
`;

export const MemberItem = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  p {
    font-size: 0.9rem;
    white-space: nowrap;
    font-weight: 500;
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;

export const MembersButtons = styled.div<StyledProps>`
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  button {
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
`;

export const LeaveGroupButton = styled.button<StyledProps>`
  background: rgba(239,68,68,0.15);
  color: #ef4444;
  &:hover { background: rgba(239,68,68,0.25); }
`;

export const KickGroupButton = styled.button<StyledProps>`
  background: rgba(249,115,22,0.15);
  color: #f97316;
  &:hover { background: rgba(249,115,22,0.25); }
`;

export const MakeAdminButton = styled.button<StyledProps>`
  background: rgba(79,142,247,0.15);
  color: #4f8ef7;
  &:hover { background: rgba(79,142,247,0.25); }
`;

export const RemooveAdminButton = styled.button<StyledProps>`
  background: rgba(249,115,22,0.15);
  color: #f97316;
  &:hover { background: rgba(249,115,22,0.25); }
`;

export const AdminBadge = styled.span<StyledProps>`
  font-size: 0.75rem;
  background: rgba(79,142,247,0.15);
  padding: 2px 8px;
  border-radius: 6px;
  color: #4f8ef7;
  font-weight: 600;
`;
