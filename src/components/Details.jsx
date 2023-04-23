import {
  VStack,
  Text,
  Heading,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  // Set breakpoint values for inputs
  const colspan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" alignItems="flex-start" p={10} spacing={10}>
      {/* heading element with sub-text */}
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      {/* Form */}
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        {/* Input 1 */}
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John"></Input>
          </FormControl>
        </GridItem>
        {/* Input 2 */}
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe"></Input>
          </FormControl>
        </GridItem>
        {/* Input 3 */}
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="123 Somewhere Street"></Input>
          </FormControl>
        </GridItem>
        {/* Input 4 */}
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="New Somewhere"></Input>
          </FormControl>
        </GridItem>
        {/* Input 5 */}
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uk">United Kingdom</option>
              <option value="nl">Netherlands</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
