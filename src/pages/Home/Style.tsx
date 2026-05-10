import styled from "styled-components";
import { StyledProps } from "../../library";

export const Text = styled.p<StyledProps>`
  font-size: 0.95rem;
  color: ${({ theme }) => theme === "light" ? "#94a3b8" : "#475569"};
  margin-top: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const HomeWrapper = styled.div<StyledProps>`
  flex-grow: 1;
  display: none;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)"
      : "linear-gradient(180deg, #0a0f1e 0%, #0f172a 100%)"};

  @media screen and (min-width: 869px) {
    display: flex;
  }
`;
