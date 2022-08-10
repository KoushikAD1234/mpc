import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layout/article";
import { Title, WorkImage } from "../../components/room";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Rooms = () => {
  return (
    <Container mt={50}>
      <Layout title="Single sharing rooms">
        <Container>
          <Title>Single sharing rooms</Title>
        </Container>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />1 Bed, 1 Table
            and 1 Chair
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />3 min walking
            distance from Heritage institute of Technology
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            High speed Wi-Fi connection
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Get instant help
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            RENT :- 10300
          </ListItem>
        </List>

        <Container mt={10}>
          <WorkImage src="/rooms/s1.jpeg" alt="single" />
          {/* <WorkImage src="/works/n2.png" alt="single" /> */}
          {/* <WorkImage src="/works/n3.png" alt="single" /> */}
        </Container>
      </Layout>
    </Container>
  );
};

export default Rooms;
