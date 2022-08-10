import {
  Box,
  Container,
  useColorModeValue,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  Icon,
  Button,
} from "@chakra-ui/react";
import NextLink from 'next/link'
import Head from "next/head";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import styles from "../styles/Home.module.css";
import { IoCall, IoHomeSharp } from "react-icons/io5";

const Page = () => {
  return (
    <Container maxW="100%" mt={10}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={5}
        mb={10}
        align="center"
      >
        <Text fontSize="2xl" as="samp" color="#C6F6D5">
          Welcome To MPC Boys Hostel
        </Text>
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            MPC Boys Hostel
          </Heading>
          <p> A place where it feels like home</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            // layout="fill"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihkmDwQLWLcelB2QRCTb3uLCK7igNYqwQlA&usqp=CAU"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h6" fontSize="3xl" variant="section-title">
          About us
        </Heading>
        <Paragraph>
          MPC Boys Hostel is one of the best hostel across Anandapur, Kolkata.
          Our aim is to provide luxury service to the students of Heritage. We
          provide all the necessary requirements of a students. MPC empowers
          students with hostel, bringing affordable and trusted accomodation
          that one can book instantly. Crammed-up hostels or cooped-up PGs - not
          much of a choice, is it? That's why we created MPC - a place designed
          by people who've been in your shoes. Understand you. And are inspired
          by you. You needed a place like home, so we moved back home
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h6" fontSize="3xl" variant="section-title">
          Why MPC Boys Hostel ?
        </Heading>
        <Paragraph>
          The location is being in the vicinity of the college saves a student
          of lots of time. The food removes the burden of looking out for food.
          The hostel services include 4 meals a day, and the food being healthy
          and nutritious. The rooms are spacious and airy. Being in the middle
          of open fields, the rooms are not prone to humidity. The big windows
          allow adequate sunlight and breeze. Other essentials: 24X7 electricity
          (generators are used during blackouts), water, and wifi.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h6" fontSize="3xl" variant="section-title">
          Rooms and Facilities
        </Heading>
        <Paragraph>
          The rooms of our hostel are spacious and airy. Being in the middle of
          the open fields, the rooms are not prone to humidity. We have
          single/double/triple sharing rooms as per students requirements. For
          every students, we provide bed, table and chair. Along with these,
          every floor has high speed wifi connection. The hostel provides 4
          meals a day having different dishes every day (veg and non-veg). It
          provides room cleaning service every day and also provides laundry
          services (extra charges required). 
        </Paragraph>
        <Box align="center" my={4} >
          <NextLink href="/rooms">
            <Button colorScheme="teal">
              Know more
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Heading as="h6" fontSize="3xl" variant="section-title">
          Contact us
        </Heading>
        <List>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoCall} />}
            >
              9007793838 / 9831895060
            </Button>
          </ListItem>
          <ListItem>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoHomeSharp} />}
            >
              GC9C+7G6, Kalarait, Chak Kolarkhal, Anandapur, West Bengal
              (700150)
            </Button>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Page;
