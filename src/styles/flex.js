import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${props => {
    return props.justifyContent;
  }};
  margin: ${props => {
    if (props.m === "s") {
      return "5%";
    } else if (props.m === "m") {
      return "10%";
    } else if (props.m === "l") {
      return "15%";
    }
  }};
  align-content: ${props => {
    if (props.alignItems === "center") {
      return "center";
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
  margin: ${props => {
    if (props.m === "s") {
      return "0.5%";
    } else if (props.m === "m") {
      return "1%";
    } else if (props.m === "l") {
      return "2%";
    }
  }};
  flex-direction: ${props => props.flexDirection};
`;
