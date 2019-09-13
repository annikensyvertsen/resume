import styled from "styled-components";
import { textColor } from "./theme";

export const Text = styled.p`
  margin: ${props => {
    if (props.m === "s") {
      return "2px";
    } else if (props.m === "m") {
      return "5px";
    } else if (props.m === "s") {
      return "10px";
    }
  }};
  font-family: ${props => {
    return props.font;
  }};
  font-size: ${props => {
    if (props.size === "s") {
      return "10px";
    } else if (props.size === "m") {
      return "15px";
    } else if (props.size === "l") {
      return "20px";
    }
  }};
  letter-spacing: ${props => {
    return props.spacing;
  }};
  text-transform: ${props => {
    return props.transform;
  }};
  font-style: ${props => {
    return props.fontStyle;
  }};
  color: ${textColor};
`;
