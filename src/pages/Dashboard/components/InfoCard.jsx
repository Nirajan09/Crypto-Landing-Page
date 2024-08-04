import React from 'react'
import { Tag, Text } from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'

const InfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
    <CustomCard bg={inverted?"p.purple":"white"}  bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
      <Tag 
      
      bg={
        inverted?"white":"p.purple"
      } color={
        inverted?"p.purple":"white"
      } 
      borderRadius="full"
      
      >{tagText}</Tag>
      <Text color={
      inverted?"white":"black"
    } textStyle="h5" mt="1" fontWeight="medium">
      {text}
      </Text>
    </CustomCard>
   
  )
}

export default InfoCard