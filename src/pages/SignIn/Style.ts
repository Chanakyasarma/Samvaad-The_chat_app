import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  gap: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
  img {
    width: 00px;
  }

  @media screen and (max-width: 1110px) {
    gap: 40px;
  }

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (max-width: 1024px) {
    height: 90vh;
    gap: 30px;

    img {
      width: 400px;
    }
  }

  @media screen and (max-width: 580px) {
    gap: 50px;
    text-align: center;
    img {
      width: 300px;
    }
  }

  @media screen and (max-width: 400px) {
    gap: 0px;
  }
`;

export const Wrapper = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  align-item:center;
  @media screen and (max-width: 580px) {
      flex-direction: column;
    }
  }
`;

export const TextWrapper = styled.div`
  gap: 20px;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #001D4A;
    font-size: 2.2rem;
    font-weight: 500;

   
  }

  
`;

