import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100dvw;
  padding: 48px 0;
  z-index: 3;
  text-align: left;

  border-top: ${({ theme }) => theme.colors.border};
  border-bottom: ${({ theme }) => theme.colors.border};
`;