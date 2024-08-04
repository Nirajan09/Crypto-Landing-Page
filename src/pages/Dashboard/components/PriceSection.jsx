import React from 'react'
import {Stack,HStack,Icon,Text,Flex,Button, Image} from "@chakra-ui/react"
import { CustomCard } from '../../../chakra/CustomCard'
import { BsArrowUpRight } from "react-icons/bs"
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const PriceSection = () => {
    const timestamps=["7:15 PM","12:55 AM","6:35 AM","12:15 PM","5:55 PM"]
  return (
    <CustomCard>
        <Flex justify="space-between" align="start">
        <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Current Price</Text>
            </HStack>
            <HStack spacing={2} flexDir={{
            base:"column",
            sm:"row"
            }}
            align={{
                base:"flex-start",
                sm:"center",
            }}>
                <HStack>
                    <Text textStyle="h4" fontWeight="medium">Rs 26,670.25</Text>
                    
                <HStack fontWeight="medium" color="green">

                    <Icon as={BsArrowUpRight}/>
                    <Text fontSize="sm" fontWeight="medium">0.04%</Text>
                </HStack>
                </HStack>
            </HStack>
        </Stack>
        <HStack mt={{sm:1,xl:0,}}>
            <Button leftIcon={<Icon as= {AiFillPlusCircle}/>}>Buy</Button>
            <Button leftIcon={<Icon as= {AiFillMinusCircle}/>}>Sell</Button>
        </HStack>
        </Flex>
        <Tabs variant='soft-rounded'>
 <Flex justify="end">
 <TabList  bg="black.5" p="3px">
    {["1H","1D","1W","1M"].map((time)=>(

                <Tab _selected={{bg:"white"}}
                 key={time} fontSize="sm" p="6px" borderRadius="4">{time}</Tab>
            ))}
            
    
  </TabList>
 </Flex>
  <TabPanels>
    <TabPanel>
    <Image w="100%" src="/Graph.svg" mt="48px"/>
        <HStack justify="space-between">
        {timestamps.map((time,key)=>{return(
            <Flex fontSize="sm" color="black.80">
                {time}
            </Flex>
        )
        })}
        </HStack>
    </TabPanel>
    
  </TabPanels>
</Tabs>
        
    </CustomCard>
  )
}

export default PriceSection