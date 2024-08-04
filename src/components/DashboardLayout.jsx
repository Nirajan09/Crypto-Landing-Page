
import { Flex,Box, Container, useDisclosure } from '@chakra-ui/react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import SideDrawer from './SideDrawer';
const DashboardLayout = ({title,children}) => {
    const {isOpen,onClose,onOpen}=useDisclosure();
  return (
    <Flex>
        <Box display={{
        base:"none",
        lg:"flex",
    }}>

            <Sidenav /> 
        </Box>
    <SideDrawer onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
    <Box  flexGrow={1}>
      <Topnav title={title} onOpen={onOpen}/>
    <Container overflowX="hidden" overflowY="auto" h="calc(100h-88px)" mt="6" maxW="60rem">{children}</Container>
    </Box>
  </Flex>
  )
}

export default DashboardLayout