
import { Card, Flex, Icon, Stack,Text,HStack,Input,Textarea,Checkbox, Button } from '@chakra-ui/react'
import {IoMdMail} from "react-icons/io"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
const ContactCard = () => {
  return (
    <Card px="24px" py="24px" display="flex" mb={{
        base:"2",
        xl:"1",
    }} >
            <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
            </Text>

        <Stack pt="12px">
            <HStack flexDirection={{
                base:"column",
                md:"row",
    }}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' placeholder='Enter your name'/>
            </FormControl>
            <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input type='text' placeholder='Enter your surname'/>
            </FormControl>
            </HStack>
            <HStack>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Enter your Email'/>
            </FormControl>
            </HStack>
            <HStack>
            <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder='Your Message' resize="none"/>
            </FormControl>
            </HStack>

            <Checkbox>
                <HStack py="10px" fontSize="xs">
                    <Text>I agree with</Text>
                    <Text as="span" color='p.purple'>Terms & Conditions.</Text>
                </HStack>
            </Checkbox>
            <Stack>
                <Button fontSize="sm">
                    Send a Message
                </Button>
                <Button colorScheme="gray" fontSize="sm">
                    Book a Meeting
                </Button>
            </Stack>
            </Stack>
        </Card>
  )
}

export default ContactCard