import styled from "styled-components";

export const Container = styled.section`
  width: 100dvw;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 0;
  border-top: ${({ theme }) => theme.colors.border};
  border-bottom: ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 620px) {
    flex-direction: column;
    height: 95dvh;
    align-items: 16px;
  }
`;

export const JobContainer = styled.article`
  height: 100%;
  width: 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 24px;
`;