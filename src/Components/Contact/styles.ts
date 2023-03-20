import styled from "styled-components";

import background from "../../Assets/Logo.png";

export const Container = styled.section`
  width: 100%;
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: url(${background.src});
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 25%);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: left -5% center;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    background-position: center 60%;
    -webkit-mask-image: none;
    background-size: 60%;
  }
`;

export const Title = styled.header`
  display: flex;
  justify-content: center;
  z-index: 20;
  width: 50%;

  h3 {
    width: 80%;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

export const ContactInfo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 700px;

  input:first-of-type {
    margin-top: 56px;
  }

  input, textarea {
    width: 85%;
    font-size: 20px;
    background-color: ${({ theme }) => theme.colors.primary.light};
    border: 1px solid #828282;
    outline: none;
    padding: 12px 16px;
    border-radius: 8px;
    text-align: left;
    margin-top: 16px;

    ::placeholder {
      font-weight: bolder;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
    max-height: 300px;
  }

  button {
    padding: 8px 16px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    border: none;
    transition: .4s;
    margin-top: 24px;

    font-size: 24px;

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }

    a {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 680px) {
    margin-top: 32px;

    input:first-of-type {
      margin-top: 24px;
    }
  }
`;
