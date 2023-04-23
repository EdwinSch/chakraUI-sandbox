import "./App.css";
import Cart from "./components/Cart";
import Details from "./components/Details";

import { Container, Flex, VStack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" padding={0} className="inspect">
      {/* main container */}
      <Flex h="100vh" py={20}>
        {/* left/upper stack */}
        <Details />
        {/* right/bottom stack */}
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
