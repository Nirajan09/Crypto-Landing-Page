import React from 'react'
import { Card, Flex, Icon, Stack,Text,HStack,Input,Textarea,Checkbox, Button, Box } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import ContactCard from './ContactCard'
const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex  flexDirection={{
                base:"column",
                xl:"row",
    }}>
        <Stack maxW="386px">
            <Icon as={icon} boxSize={6} color="purple"/>
            <Text fontWeight="medium" as="h1" textStyle="h1">
                {title}
                </Text>
            <Text fontSize="sm" color="black.60">
                {text}
                </Text>
        </Stack>
        <Box maxW="550px" w="full" >

        {leftComponent}
        </Box>
    </Flex>
  )
}

export default SupportCard