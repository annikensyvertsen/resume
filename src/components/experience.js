import React from "react";
import { Box } from "../styles/box";
import { Text } from "../styles/text";
import { Heading } from "../styles/heading";
import { Flex } from "../styles/flex";
import { Grid } from "../styles/grid";
import styled from "styled-components";

export const Experience = () => {
  return (
    <Flex flexDirection="column">
      <Box
        style={{ paddingLeft: "20px", paddingTop: "0px" }}
        my="m"
        border="left"
      >
        <Heading style={{ margin: "0px" }}>Summer intership 2019</Heading>
        <Text>
          The summer of 2019 I had a ten week internship at Oslo Market
          Solutions as a front-end developer.
        </Text>
      </Box>
      <Box
        style={{ paddingLeft: "20px", paddingTop: "0px" }}
        my="m"
        border="left"
      >
        <Heading style={{ margin: "0px" }}>Group projects</Heading>
        <Text>
          We have had a few group projects at school. This semester (fall 2019)
          I am 1/3 of a group who works with React.
        </Text>
      </Box>
      <Box
        style={{ paddingLeft: "20px", paddingTop: "0px" }}
        my="m"
        border="left"
      >
        <Heading style={{ margin: "0px" }}>Private projects, as this</Heading>
        <Text>
          I like to play with React (for now, probably other technologies later)
          at home when I have the time. As a result, you can see this page. If
          you want to take a look at the code, checkout my GitHub-account.
        </Text>
      </Box>
    </Flex>
  );
};
