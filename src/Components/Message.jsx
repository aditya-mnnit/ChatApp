import React from 'react'
import {HStack,Avatar,Text} from "@chakra-ui/react"
 function Message({text,uri,user="other"}) {
  return (
 <HStack bg={"gray.100"} paddingX={user==="me"?"2.5":"1.5"} paddingY={"2"} borderRadius={"base"} alignSelf={user==="me"?"flex-end":"flex-start"}>
    {
        user!=="me"&&<Avatar src={uri}> </Avatar>
    }
    <Text>{text}</Text>
    {
        user==="me"&&<Avatar src={uri}> </Avatar>
    }
    
 </HStack>
  )
}

export default Message
