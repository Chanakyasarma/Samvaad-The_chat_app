import styled from "styled-components";
import { StyledProps } from "../../library";

export const StyledSideBar = styled.div<StyledProps>`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  background: ${({ theme }) =>
    theme === "light" ? "#ffffff" : "#111827"};
  border-right: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track { background: transparent; }

  @media screen and (min-width: 869px) {
    width: 340px;
  }
`;

export const StyledNavbar = styled.div<StyledProps>`
  z-index: 2;
  height: 72px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#111827"};
  border-bottom: 1px solid ${({ theme }) =>
    theme === "light" ? "#e2e8f0" : "#1e293b"};
  backdrop-filter: blur(10px);

  @media screen and (min-width: 869px) {
    width: 340px;
  }
`;

export const NavBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export const NavTitle = styled.span<StyledProps>`
  font-family: 'Sora', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme === "light" ? "#0f172a" : "#f1f5f9"};
`;

export const Wrapper = styled.div<StyledProps>`
  display: flex;
`;

export const ProfileButtonContainer = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 2px;
`;

export const ProfileMenu = styled.div<StyledProps>`
  z-index: 10;
  position: absolute;
  top: 52px;
  right: -4px;
  width: 180px;
  background: ${({ theme }) => theme === "light" ? "#ffffff" : "#1e293b"};
  border: 1px solid ${({ theme }) => theme === "light" ? "#e2e8f0" : "#334155"};
  border-radius: 14px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  overflow: hidden;
  padding: 6px;
`;

export const MenuButton = styled.button<StyledProps>`
  border: none;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.15s ease;
  background-color: transparent;
  color: ${({ theme }) => theme === "light" ? "#475569" : "#94a3b8"};

  &:hover {
    background: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#334155"};
    color: ${({ theme }) => theme === "light" ? "#1e293b" : "#e2e8f0"};
  }
`;

export const ShowProfileButton = MenuButton;
export const ThemeButton = MenuButton;
export const SignOutButton = styled(MenuButton)`
  color: #ef4444;
  &:hover { background: rgba(239,68,68,0.1); color: #ef4444; }
`;

export const ChatButton = styled.button<StyledProps>`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme === "light" ? "#64748b" : "#94a3b8"};
  background-color: ${({ theme }) => theme === "light" ? "#f1f5f9" : "#1e293b"};
  transition: all 0.2s ease;
  margin-right: 6px;

  &:hover {
    background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
    color: #fff;
    box-shadow: 0 4px 15px rgba(79,142,247,0.3);
  }
`;

export const ProfilePicture = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  object-fit: cover;
  border: 2px solid transparent;
  background: linear-gradient(#111, #111) padding-box,
              linear-gradient(135deg, #4f8ef7, #8b5cf6) border-box;
`;

export const SecondaryContainer = styled.div<StyledProps>`
  position: relative;
`;

export const PrimaryContainer = styled.div<StyledProps>`
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.p<StyledProps>`
  margin: 20px 0;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
  font-size: 0.9rem;
`;

export const SelectConversationButton = styled.button<StyledProps>`
  width: auto;
  border: none;
  padding: 11px 22px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  color: #fff;
  box-shadow: 0 4px 15px rgba(79,142,247,0.35);

  &:hover {
    box-shadow: 0 8px 25px rgba(79,142,247,0.5);
    transform: translateY(-1px);
  }
`;

export const SelectConversationContainer = styled.div`
  margin-top: 20px;
  padding: 0 20px;
`;
