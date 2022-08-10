import {
  Container,
  Heading,
  Button,
  Wrap,
  Box,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import Section from "../components/section";
import React from "react";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";

function book() {
  return (
    <Container mt="50px">
      <Section delay={0.3}>
        <Heading as="h3" fontSize="2xl" variant="section-title">
          Book now
        </Heading>
        <Paragraph>
          Book your seat now by accepting our Terms and Conditions
        </Paragraph>
        <Box mt="10px">
          <Wrap spacing={4}>
            <NextLink href="https://drive.google.com/file/d/1-YkHxcnhTifs4ov8F0wBSKBLo1PTV3l4/view?usp=sharing">
              <Button>Terms and Conditions</Button>
            </NextLink>
            <NextLink href="https://docs.google.com/forms/d/e/1FAIpQLSfelBX5CAg_Tk2J4DtAnIVZ6eyGkorJ-ng-4qxLrg0_Vtcy-g/viewform?vc=0&c=0&w=1&flr=0">
              <Button>Book Now</Button>
            </NextLink>
          </Wrap>
        </Box>
      </Section>
    </Container>
  );
}

export default book;
