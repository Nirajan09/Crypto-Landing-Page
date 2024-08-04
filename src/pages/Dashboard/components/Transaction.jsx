import { Grid, Flex, Stack, Text,Icon, Divider, Button } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import {BsCurrencyRupee} from "react-icons/bs"
import {FaBtc} from "react-icons/fa"
const Transaction = () => {
    const Transactions=[
        {
            id:"1",
            icon:BsCurrencyRupee,
            text:"RS Deposit",
            amount:"+ Rs 81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        },
        {
            id:"2",
            icon:FaBtc,
            text:"BTC",
            amount:"- 12.48513391 BTC",
            timestamp:"2022-05-27 12:32 PM"
        },
        {
            id:"3",
            icon:BsCurrencyRupee,
            text:"RS Deposit",
            amount:"+ Rs 81,123.10",
            timestamp:"2022-06-09 7:06 PM"
        }
    ]
  return (
    <CustomCard h="full">
        <Text mb="6" fontSize="sm" color="black">RecentTransaction</Text>
        <Stack spacing="4">
            {Transactions.map((Transaction,i)=>{
                return (
                    <Fragment key={Transaction.id}>
                    {i!=0 && <Divider/>}
                        <Flex key={Transaction.id} gap="4" w="full">
                        <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                            <Icon as={Transaction.icon}/>
                        </Grid>
                        <Flex justify="space-between" w="full">
                            <Stack spacing="0">
                                <Text  textStyle="h6">{Transaction.text}</Text>
                                <Text fontSize="sm" color="black.40">{Transaction.timestamp}</Text>
                            </Stack>
                            <Text  textStyle="h6">{Transaction.amount}</Text>
                        </Flex>
                    </Flex>
                    </Fragment>
                )
            })}
        </Stack>
        <Button w="full" colorScheme="gray" mt="6">View All</Button>
    </CustomCard>
  )
}

export default Transaction