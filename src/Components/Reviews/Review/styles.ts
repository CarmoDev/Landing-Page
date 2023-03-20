import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary.light};
  padding: 24px 16px;
  border-radius: 8px;
  
  & + & {
    margin-top: 24px;
  }

  p {
    width: 100%;
    text-align: left;
  }

`;

export const User = styled.aside`
  display: flex;
  align-items: center;
  margin-top: 24px;

  img {
    margin-right: 16px;
  }
`;