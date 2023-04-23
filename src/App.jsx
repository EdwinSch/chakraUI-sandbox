import "./App.css";
import { Container, Flex, VStack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" padding={0} className="inspect">
      <Flex h="100vh" py={20}>
        <VStack
          w="full"
          h="full"
          alignItems="flex-start"
          p={10}
          spacing={10}
          background={"red.300"}
        >
          <Text>hoi</Text>
          <Text>hoi</Text>
        </VStack>
        <VStack
          w="full"
          h="full"
          alignItems="flex-start"
          p={10}
          spacing={10}
          background="gray.100"
        >
          <Text>hoi</Text>
          <Text>hoi</Text>
        </VStack>
      </Flex>
    </Container>
  );
}

export default App;
