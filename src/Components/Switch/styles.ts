import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  span {
    color: #AAA;
    font-weight: bold;
    transition: color .2s;
  }

  .ativo {
    color: #fafafa;
  }
`;

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 20px;
  height: 14px;
  width: 20%;
  cursor: pointer;
  position: relative;

  div {
    position: absolute;
    background: ${({ theme }) => theme.colors.primary.main};
    height: 200%;
    width: 50%;
    border-radius: 50%;
    left: 0;
    transition .2s;
  }

  .second {
    left: 50%;
  }
`;
