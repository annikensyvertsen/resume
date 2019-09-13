import React from "react";
import { Bio } from "./bio";
import { CV } from "./cv";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Flex } from "../styles/flex";
import { Heading } from "../styles/heading";
import styled from "styled-components";
import cvPhoto from "../cvphoto.svg";
import { Grid } from "../styles/grid";

export const Content = ({ page, setPage }) => {
  if (page === "bio") {
    return <Bio />;
  }
  if (page === "experience") {
    return <Experience />;
  }
  if (page === "cv") {
    return <CV />;
  }
  if (page === "contact") {
    return <Contact />;
  }
  return (
    <GridWrapper>
      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <Heading size="m">Anniken Syvertsen.</Heading>
        <img id="self" width="80%" src={cvPhoto} alt="cvphoto" />
      </Flex>
      <Quote>
        <Heading fontStyle="italic" m="l" size="s">
          "I am a developer who loves to create. I love React and React Hooks
          and I love the sence of achievement."
        </Heading>
      </Quote>
    </GridWrapper>
  );
};

const GridWrapper = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
`;

const Quote = styled.div`
  grid-area: right;
`;

export default Content;
