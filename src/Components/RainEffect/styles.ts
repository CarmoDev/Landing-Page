import styled, {keyframes} from "styled-components";

const Rain = keyframes`
  from {
    opacity: 1;
    top: 0;
    right: 0
  } to {
    opacity: 0;
    top: 1000px;
    left: 0;
  }
`;

const rain = keyframes`
  0% {
    -webkit-transform: translateY(-100px) translateX(1000px) rotate(60deg);
            transform: translateY(-100px) translateX(1000px) rotate(60deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px) translateX(0) rotate(60deg);
            transform: translateY(1000px) translateX(0) rotate(60deg);
    opacity: 1;
  }
`;
export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: fixed;
  z-index: -5;

  .rain {
    background: white;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #0094F3 100%);
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    opacity: 0;
    animation: ${rain} 8s linear infinite;
  }
`;

