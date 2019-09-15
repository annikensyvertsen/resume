import React from "react";
import { Box } from "../styles/box";
import { Text } from "../styles/text";
import { Heading } from "../styles/heading";
import { Flex } from "../styles/flex";
import { Grid } from "../styles/grid";
import styled from "styled-components";

export const Contact = () => {
  return (
    <GridWrapper>
      <Flex flexDirection="column">
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              E-mail
            </Heading>
            <Text>annikensyvertsen@hotmail.com</Text>
          </Flex>
        </Box>
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              LinkedIn
            </Heading>
            <Text>Anniken Syvertsen</Text>
          </Flex>
        </Box>
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              Phone
            </Heading>
            <Text>+47 951 27 174</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDirection="column">
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              E-mail
            </Heading>
            <Text>annikensyvertsen@hotmail.com</Text>
          </Flex>
        </Box>
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              LinkedIn
            </Heading>
            <Text>Anniken Syvertsen</Text>
          </Flex>
        </Box>
        <Box m="s">
          <Flex flexDirection="column" my="s" mx="m">
            <Heading size="xxs" transform="upperCase" spacing="5px">
              Phone
            </Heading>
            <Text>+47 951 27 174</Text>
          </Flex>
        </Box>
      </Flex>
    </GridWrapper>
  );
};

const GridWrapper = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
`;
