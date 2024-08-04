import { Container, Flex, Heading,Button, HStack, Box, Icon } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import {FaBars} from "react-icons/fa"
import React from 'react'
import {FaUserTie} from "react-icons/fa"
const Topnav = ({title,onOpen}) => {
  return (
    <Box boxShadow="xl" px="4" bg="white" color="black">
    <HStack maxW="60rem" height="64px"  mx="auto" justify="space-between">
            <Icon as= {FaBars} onClick={onOpen} display={{
                lg:"none",
                md:"block",
            }}/>
            <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

            <Menu>
                <MenuButton>
                    <Icon as={FaUserTie} fontSize="24px"/>
                </MenuButton>
                <MenuList>
                    <MenuItem>Log Out</MenuItem>
                    <MenuItem>Support</MenuItem>
                </MenuList>
            </Menu>

        
    </HStack>
    </Box>
  )
}

export default Topnav