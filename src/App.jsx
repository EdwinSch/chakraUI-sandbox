import "./App.css";
import Cart from "./components/Cart";
import Details from "./components/Details";

import { Container, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" padding={0}>
      {/* main container */}
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        {/* left || bottom Stack */}
        <Details />
        {/* right || upper Stack */}
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
