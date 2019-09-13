import styled from "styled-components";
import { textColor, effectColor } from "../styles/theme";

export const NavbarButton = styled.button`
  background: none;
  color: ${props => {
    if (props.page === props.children) {
      return effectColor;
    } else {
      return textColor;
    }
  }};
  padding: 4px;
  border: none;
  font-family: "arial";
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-left: ${props => {
    if (props.mx === "s") {
      return "1%";
    } else if (props.mx === "m") {
      return "5%";
    } else if (props.mx === "l") {
      return "10%";
    }
  }};
  margin-right: ${props => {
    if (props.mx === "s") {
      return "1%";
    } else if (props.mx === "m") {
      return "5%";
    } else if (props.mx === "l") {
      return "10%";
    }
  }};
  margin-top: ${props => {
    if (props.my === "s") {
      return "1%";
    } else if (props.my === "m") {
      return "5%";
    } else if (props.my === "l") {
      return "10%";
    }
  }};
  margin-bottom: ${props => {
    if (props.my === "s") {
      return "1%";
    } else if (props.my === "m") {
      return "5%";
    } else if (props.my === "l") {
      return "10%";
    }
  }};
  margin: ${props => {
    if (props.m === "s") {
      return "0.5%";
    } else if (props.m === "m") {
      return "1%";
    } else if (props.m === "l") {
      return "2%";
    }
  }};

  &:hover {
    color: ${effectColor};
  }
  &:focus {
    color: ${effectColor};
    outline: 0;
  }
`;
