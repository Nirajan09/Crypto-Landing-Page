import React from 'react'
import {Stack,HStack,Icon,Text,Tag,Button} from "@chakra-ui/react"
import {AiOutlineInfoCircle,AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"
const PortfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6" justify="space-between" flexDir={{
        base:"column",
        xl:"row"
    }}
    align={{
        base:"flex-start",
        xl:"center",
    }}
    >

        <HStack  spacing={{
                        base:0,
                        xl:10,
                        }} flexDir={{
                        base:"column",
                        xl:"row"
                        }}
                        align={{
                            base:"flex-start",
                            xl:"center",
                        }}
                        >
        <Stack>
            <HStack color="black.80" >
                <Text fontSize="sm">Total Portfolio Value</Text>
                <Icon as ={AiOutlineInfoCircle}/>
            </HStack>
            <Text textStyle="h4" fontWeight="medium">Rs 112,312.24</Text>
        </Stack>
        <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Wallet Balances</Text>
            </HStack>
            <HStack spacing={2} flexDir={{
        base:"column",
        sm:"row"
    }}
    align={{
        base:"flex-start",
        sm:"center",
    }}>
            <Text textStyle="h4" fontWeight="medium">Rs 22.39401000</Text>
            <Tag colorScheme='gray'>BTC</Tag>
                <Text textStyle="h4" fontWeight="medium">Rs 1,300.00</Text>
                <Tag colorScheme='gray'>NPR</Tag>
            </HStack>
        </Stack>
        </HStack>

        <HStack mt={{
            sm:1,
            xl:0,
        }}>
            <Button leftIcon={
                <Icon as= {AiOutlineArrowDown}/>
            }
            >Deposit</Button>
            <Button leftIcon={
                <Icon as= {AiOutlineArrowUp}/>
            }
            >Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSection