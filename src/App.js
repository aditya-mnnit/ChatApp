import {Box, Button,Container,Input,HStack,VStack, background} from "@chakra-ui/react"
import Message from "./Components/Message";
function App() {
  return (
    <Box bg={"red.50"}> 
      <Container h={"100vh"} bg={"white"}>
      <VStack h={"full"} paddingY={4}>
         <Button w="full" colorScheme={"red"}>Logout</Button>
         <VStack  h={"full"} w={"full"}>
          <Message text="Sample message"/> 
          </VStack>
        <form style={{width:"100%"}}>
          <HStack>
          <Input placeholder="Message"/>
          <Button colorScheme={"purple"} type="submit">Send</Button>
          </HStack>
        </form>
        
      </VStack>
      </Container>
   
    </Box>
  );
}

export default App;
