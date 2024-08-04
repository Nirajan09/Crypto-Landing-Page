import React from 'react'
import {Tag,Flex,Button, Card, Icon, HStack} from "@chakra-ui/react"
import DashboardLayout from '../../components/DashboardLayout'
import {AiOutlineDownload} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
const Transaction = () => {
  const tabs=[
    {
      name:"All",
      count:349,
    },
    {
      name:"Deposit",
      count:114,
    },
    {
      name:"Withdraw",
      count:55,
    },
    {
      name:"Trade",
      count:50,
    },

  ]
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload}/>}>Export CSV</Button>
      </Flex>
      <Card borderRadius="16px">
      <Tabs>
  <TabList pt="4" display="flex" w="full" justifyContent="space-between">
    <HStack>
      
    {
      tabs.map((tab)=>{
        return (
          <Tab key={tab.name} display="flex" gap="2" pb="4">
            {tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
          </Tab>
        )
      })
    }
    </HStack>
    <InputGroup maxW="200px" pr="6"> 
    <InputLeftElement pointerEvents='none'>
      <Icon as={BsSearch} />
    </InputLeftElement>
    <Input type='tel' placeholder='Search .......' />
  </InputGroup>

  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
  </TabPanels>
  
</Tabs>
      </Card>
    </DashboardLayout>

  )
}

export default Transaction