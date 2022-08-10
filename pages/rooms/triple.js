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
      <Layout title="Triple sharing rooms">
        <Container>
          <Title>Triple sharing rooms</Title>
        </Container>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />3 Bed, 3 Table
            and 3 Chair
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

        {/* <WorkImage src="/works/n1.png" alt="Netflix" />
        <WorkImage src="/works/n2.png" alt="Netflix" />
        <WorkImage src="/works/n3.png" alt="Netflix" /> */}

      </Layout>
    </Container>
  );
};

export default Rooms;
