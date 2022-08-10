import { Container, Heading, SimpleGrid, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/section";
import single from "../public/single.png";
import double from "../public/double.png";
import triple from "../public/triple.png";
import view from "../public/Veiw.png";
import { CheckCircleIcon } from '@chakra-ui/icons'

function rooms() {
  return (
    <Container>
      <Heading as="h2" fontSize={30} mb={4} mt={50}>
        Rooms
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="single" title="Single rooms" thumbnail={single}>
            Click here to know more details
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="double"
            title="Double sharing rooms"
            thumbnail={double}
          >
            Click here to know more details
          </WorkGridItem>
        </Section>
        <Section >
          <WorkGridItem id="view" title="View from Hostel" thumbnail={view}>
            Click here to know more details
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h2" fontSize={30} mb={4} mt={10}>
        Facilities
      </Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          24X7 electricity (generators are used during blackouts)
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          24X7 water supply
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Healthy Food (4 meals a day)
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Room cleaning service
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          4 washroom in a floor
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          High speed Wi-Fi connection
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Get instant help
        </ListItem>
      </List>
    </Container>
  );
}

export default rooms;
