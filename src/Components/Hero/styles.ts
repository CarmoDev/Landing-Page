import styled from "styled-components";

export const Container = styled.main`
  width: 100dvw;
  
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

   img {
    margin-top: 64px;
  }

  h1 {
    font-size: 40px;
    max-width: 600px;
    text-align: center;
  }

  p {
    font-size: 20px;
    max-width: 600px;
  }

  button {
    padding: 16px 16px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    border: none; 
    transition: .4s;

    font-size: 24px;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;