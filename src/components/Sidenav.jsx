import React from 'react'
import {Box, Heading, HStack, Icon, Stack, Text} from "@chakra-ui/react"
import {BsArrowDownUp} from "react-icons/bs"
import {RxDashboard} from "react-icons/rx"
import {BiSupport} from "react-icons/bi"
import {Link } from "react-router-dom"
const Sidenav  = () => {
    const navLinks=[
        {
            icons:RxDashboard,
            text:"Dashboard",
            link:"/",
        },
        {
            icons:BsArrowDownUp,
            text:"Transactions",
            link:"/transaction",
        }
    ]
  return (
    <Stack bg="white" justify="space-between" boxShadow={{
        base:"none",
        lg:"lg",
    }} w={{
        base:"full",
        lg:"16rem",
    }} height="100vh"
    
    >
        <Box>
            <Heading as="h1" mt="54px" textAlign="center" fontSize="20px" fontWeight="500" color="#5F00D9;
            ">React Crypto</Heading>
                <Box mx="12px" mt="6">
                {navLinks.map((nav) => (
                    <Link to={nav.link}  key={nav.text}>
                    <HStack borderRadius="10px" px="16px" py="12px" _hover={{
                        bg:"#F3F3F7",
                        color:"#171717",
                    }}
                    color="#797E82"
                    >
                        <Icon as={nav.icons}/>
                        <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                    </HStack>
                    </Link>
                    )
                )}
                </Box>
        </Box>
            <Box mx="12px" >
                <Link to="/support">
                <HStack  mb="4" borderRadius="10px" px="16px" py="12px" _hover={{
                        bg:"#F3F3F7",
                        color:"#171717",
                    }}
                    color="#797E82"
                    >
                        <Icon as={BiSupport}/>
                        <Text fontSize="14px" fontWeight="medium">Support</Text>
                    </HStack>
                    </Link>
            </Box>
    </Stack>
  )
}

export default Sidenav