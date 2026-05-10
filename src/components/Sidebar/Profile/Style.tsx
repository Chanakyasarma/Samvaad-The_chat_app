import styled from "styled-components";
import { StyledProps } from "../../../library";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 12px 20px;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 88px;
  height: 88px;
  object-fit: cover;
  margin-bottom: 12px;
  border: 3px solid transparent;
  background: linear-gradient(#1e293b, #1e293b) padding-box,
              linear-gradient(135deg, #4f8ef7, #8b5cf6) border-box;
`;

export const Thick = styled.span`
  font-weight: 600;
  color: #4f8ef7;
  padding-right: 6px;
`;

export const Text = styled.p<StyledProps>`
  line-height: 2.2;
  font-size: 0.9rem;
  color: ${({ theme }) => theme === "light" ? "#475569" : "#94a3b8"};
`;

export const Info = styled.p`
  margin: 0 auto;
  padding: 0 20px 16px;
  text-align: center;
  color: #64748b;
  font-size: 0.82rem;
  width: 100%;
`;
