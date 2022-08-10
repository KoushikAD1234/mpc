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
      <Layout title="View from Hostel">
        <Container>
          <Title>View from Hostel</Title>
        </Container>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Fresh air and green envioronment
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />3 min walking
            distance from Heritage institute of Technology
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Online Delivery
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Get instant help
          </ListItem>
        </List>

        <Container mt={10}>
          <WorkImage src="/rooms/v1.jpeg" alt="View" />
          <WorkImage src="/rooms/v2.jpeg" alt="View" />
          <WorkImage src="/rooms/v3.jpeg" alt="View" />
        </Container>
      </Layout>
    </Container>
  );
};

export default Rooms;
