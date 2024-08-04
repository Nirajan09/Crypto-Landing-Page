import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'
import Sidenav from './Sidenav'
const SideDrawer = ({isOpen,onClose,onOpen}) => {
  
      
        return (
          <>
            <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              onOpen={onOpen}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                
                <DrawerBody>
                    <Sidenav/>
                </DrawerBody>
      
                
              </DrawerContent>
            </Drawer>
          </>
        )
      }


export default SideDrawer