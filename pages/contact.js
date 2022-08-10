import {
  Container,
  Heading,
  List,
  ListItem,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Section from "../components/section";
import { IoCall, IoHomeSharp } from "react-icons/io5";
import Map from "../components/map";
import Paragraph from "../components/paragraph";
// import { Heading } from "@chakra-ui/react";

function contact() {
  return (
    <Container mt="50px">
      <Section delay={0.1}>
        <Heading>Contact us</Heading>
        <Box mt="20px">
          <Heading as="h6" fontSize="1xl" variant="section-title">
            Mobile no :-
          </Heading>
          <Paragraph>9007793838 / 9831895060 (For any query)</Paragraph>
        </Box>
      </Section>
      <Section delay={0.1}>
        {/* <Heading>Contact us</Heading>
        <Box mt="20px"> */}
        <Heading as="h6" fontSize="1xl" variant="section-title">
          Address :-
        </Heading>
        <Paragraph>
          GC9C+7G6, Kalarait, Chak Kolarkhal, Anandapur, West Bengal, 700150 (3 min walking distance from Heritage institute of Technology)
        </Paragraph>
        {/* </Box> */}
      </Section>
    </Container>
  );
}

export default contact;
