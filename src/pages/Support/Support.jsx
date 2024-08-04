import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import {AiTwotoneMessage} from "react-icons/ai"
import {IoMdMail} from "react-icons/io"
import InfoCard from '../Dashboard/components/InfoCard'
import { Stack } from '@chakra-ui/react'
const Support = () => {
  return (
    <DashboardLayout>
      
      <Stack spacing=".2rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Chat with us now"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  )
}

export default Support