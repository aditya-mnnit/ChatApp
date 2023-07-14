import { useEffect, useState } from "react";
import {Box, Button,Container,Input,HStack,VStack} from "@chakra-ui/react"
import Message from "./Components/Message";
import { app } from "./firebase";
import { signOut ,onAuthStateChanged,  getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const auth =getAuth(app);
const loginHandler=()=>
{ 
   const provider=new GoogleAuthProvider();
   signInWithPopup(auth,provider); 

};
const logoutHandler=()=>
{
  signOut(auth);
};
function App() {
  const [user,setuser]=useState(false);
  useEffect(()=>
  {
    onAuthStateChanged(auth,(data)=>{
console.log(data);
setuser(data);
    });
  })
  return (
    <Box bg={"red.50"}> 
    {
   user?(
    <Container h={"100vh"} bg={"white"}>
      <VStack h={"full"} paddingY={"4"}>
         <Button onClick={logoutHandler} w="full" colorScheme={"red"}>Logout</Button>
         <VStack  h={"full"} w={"full"} overflowY={"auto"}> 
         <Message user="me" text="Some Message" />
          </VStack>
        <form style={{width:"100%"}}>
          <HStack>
          <Input placeholder="Message"/>
          <Button colorScheme={"purple"} type="submit">Send</Button>
          </HStack>
        </form>
        
      </VStack>
      </Container>
   ):(
  <VStack h={"100vh"}  justifyContent={"center"} bg={"white"}>
    <Button onClick={loginHandler} colorScheme="purple">Sign In with Google</Button>
  </VStack>
   )
}
    </Box>
  );
}

export default App;
