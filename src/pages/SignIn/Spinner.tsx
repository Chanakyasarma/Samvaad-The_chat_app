import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 15, 30, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
  gap: 16px;
`;

const Logo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4f8ef7, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  animation: ${pulse} 1.5s ease-in-out infinite;
  box-shadow: 0 10px 40px rgba(79,142,247,0.4);
`;

const Text = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
`;

export default function LoadingSpinner() {
  return (
    <Overlay>
      <Logo>💬</Logo>
      <Text>Loading...</Text>
    </Overlay>
  );
}
