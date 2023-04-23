import "./App.css";
import Cart from "./components/Cart";
import Details from "./components/Details";

import { Container, Flex, VStack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" padding={0}>
      {/* main container */}
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        {/* left/upper stack */}
        <Details />
        {/* right/bottom stack */}
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
