import styled from "styled-components";

export const Container = styled.section`
  padding-top: 100px;
  width: 80%;
  display: flex;
  justify-content: center;

  h1 {
    position: sticky;
    font-size: 56px;
    max-width: 40%;
    text-align: left;
    align-self: flex-start;
    top: 20px;
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;

    h1 {
      position: initial;
      font-size: 36px;
      max-width: 100%;
    }
  }
`;

export const Clients = styled.aside`
  max-width: 50%;

  @media screen and (max-width: 620px) {
    max-width: 100%;
  }

  :last-child {
    margin-bottom: 24px;
  }
`;