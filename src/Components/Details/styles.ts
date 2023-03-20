import styled from "styled-components";

export const Container = styled.article`
  padding: 16px;

  & + & {
    margin-top: 36px;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  h2 {
    padding: 0px 12px 3px 0;
    font-size: 16px;
    transform: rotate(0deg);
    transition: all .2s;
  }
  
  .ativo {
    transform: rotate(90deg);
    padding-top: 16px;
  }

  .detail {
    max-width: 80%;
    padding-left: 30px;
    text-align: left;
    
    > p {
      text-align: left;
    }
  }
  
  @media screen and (max-width: 620px) {
    h1 {
      font-size: 24px;
      text-align: center;
    }
    
    .detail {
      padding-left: 0;
      max-width: 100%;
      margin-top: 16px;

      > p {
        text-align: center;
      }
    }
  }
`;