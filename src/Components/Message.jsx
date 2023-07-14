import React from 'react'
import {HStack,Avatar,Text} from "@chakra-ui/react"
function Message({text,uri,user}) {
  return (
 <HStack bg={"gray.100"} padding={"4"} borderRadius={"base"} alignSelf={user==="me"?"flex-end":"flex:start"}>
    <Text>{text}</Text>
    <Avatar src={uri}> </Avatar>
 </HStack>
  )
}

export default Message
