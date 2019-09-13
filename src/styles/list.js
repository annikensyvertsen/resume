import styled, { keyframes } from "styled-components";

export const keyFrame = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1; 
    }
`;
export const List = styled.li`
  &:before {
    content: "";
    border-color: transparent #ffffff;
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    height: 0;
    width: 0;
    left: -1.5em;
    top: 0.9em;
    position: relative;
  }
  color: white;
  font-size: 26px;
  animation: ${keyFrame} 2s ease-in-out 0s;
`;

//animation: ${keyFrame} 2s ease-in-out 0s
