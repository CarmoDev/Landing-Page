import styled from "styled-components";

import background from "../../Assets/Logo.svg";

export const Container = styled.section`
  height: 500px;
  width: 100%;

  display: flex;
  align-items: center;

  background: url(${background.src});
  -webkit-mask-image: linear-gradient(to left, transparent 0%, black 25%);
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: right -5% center;

  border-top: ${({ theme }) => theme.colors.border};
  border-bottom: ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 620px) {
    justify-content: center;
    background: none;
    -webkit-mask-image: none;
  }
`;

export const Content = styled.article`
  max-width: 35%;
  margin-left: 100px;

  h1 {
    font-size: 30px;
  }

  p {
    font-size: 24px;
    margin-top: 32px;
  }

  @media screen and (max-width: 680px) {
    margin-left: 0;
    max-width: 80%;
  }
`;
