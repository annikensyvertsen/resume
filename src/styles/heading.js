import styled from "styled-components";
import { textColor } from "./theme";

export const Heading = styled.h1`
  margin: ${props => {
    if (props.m === "s") {
      return "3%";
    } else if (props.m === "m") {
      return "7%";
    } else if (props.m === "l") {
      return "10%";
    }
  }};
  font-family: ${props => {
    return props.font;
  }};
  font-size: ${props => {
    if (props.size === "xs") {
      return "30px";
    } else if (props.size === "s") {
      return "50px";
    } else if (props.size === "m") {
      return "70px";
    } else if (props.size === "l") {
      return "90px";
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
