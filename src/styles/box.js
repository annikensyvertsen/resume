import styled from "styled-components";
import { effectColor } from "./theme";

export const Box = styled.div`
  width: 80%;
  min-height: 10vh;
  border-style: ${props => {
    if (props.border === "solid") {
      return "solid";
    }
  }};
  border-left-style: ${props => {
    if (props.border === "left") {
      return "solid";
    }
  }};
  border-color: ${effectColor};
  margin: ${props => {
    if (props.m === "s") {
      return "5%";
    } else if (props.m === "m") {
      return "10%";
    } else if (props.m === "l") {
      return "15%";
    }
  }};
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
`;
