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
      <Layout title="Double sharing rooms">
        <Container>
          <Title>Double sharing rooms</Title>
        </Container>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />2 Bed, 2 Table
            and 2 Chair
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
            RENT :- 7300
          </ListItem>
        </List>

        <Container mt={10}>
          <WorkImage src="/rooms/d1.jpeg" alt="Double" />
          <WorkImage src="/rooms/d2.jpeg" alt="Double" />
        </Container>
      </Layout>
    </Container>
  );
};

export default Rooms;
