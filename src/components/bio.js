import React from "react";
import { Heading } from "../styles/heading";
import { Text } from "../styles/text";
import { Flex } from "../styles/flex";
import { Grid } from "../styles/grid";
import { List } from "../styles/list";
import styled from "styled-components";

export const Bio = () => {
  return (
    <GridWrapper>
      <Flex flexDirection="column">
        <Heading size="s">about me</Heading>
        <Text fontStyle="italic" spacing="3px">
          22 years / student / developer
        </Text>
        <Text>
          Jeg er utrolig glad i programmering og nyskaping, og jeg brenner etter
          å lære. Programmering er en fantastisk måte for meg å få utslipp for
          den kreative energien og behovet mitt for å skape. I tillegg gir det
          en fantastisk mestringsfølelse som det er vanskelig å finne andre
          steder.{" "}
        </Text>
      </Flex>
      <Flex mx="l">
        <ul style={{ listStyle: "none" }}>
          <Heading size="xs">nøkkelegenskaper</Heading>

          <List>React</List>
          <List>JavaScript</List>
          <List>CSS</List>
          <List>HTML</List>
          <List>Java</List>
          <List>Python</List>
        </ul>
      </Flex>
    </GridWrapper>
  );
};

const GridWrapper = styled(Grid)`
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "first last";
`;
