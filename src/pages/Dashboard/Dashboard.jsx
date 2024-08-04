import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transaction from './components/Transaction'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base:"repeat(1,1fr)",
        xl:"repeat(2,1fr)",
      }}
      gap="6">
        <GridItem
        colSpan={{
          base:1,
          lg:2,
        }
        }
        >
          <PortfolioSection/>
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection/>
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction/>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          inverted={false}
          tagText="Loans" 
          imgUrl="\Visual.svg"
          text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          inverted={true}
          tagText="Contact" 
          imgUrl="\Visual1.svg"
          text="Learn more about our real estate, mortgage, and corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard