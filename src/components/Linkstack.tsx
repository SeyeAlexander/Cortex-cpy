import {
  HStack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Link,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import expand from "../assets/expand.svg";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import menu from "../assets/more.png";
import { useRef } from "react";

const Linkstack = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <HStack display={{ base: "flex", xl: "none" }}>
      <Image ref={btnRef} onClick={onOpen} src={menu} w='27px' />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt='10px' w='30px' border='0px' bg='none' />
          <DrawerHeader>
            <Text fontSize='3xl' fontFamily='Aeonik Bold'>
              CORTEX
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing='17px'>
              <Button
                colorScheme='green'
                borderRadius='10px'
                w='full'
                fontSize='15px'
                fontWeight='bold'
                h='55px'
                mb='30px'
              >
                Launch App
              </Button>

              <Link fontSize='22px' _hover={{ color: "black" }} href='#protocol' onClick={onClose}>
                Protocol
              </Link>

              <Link
                fontSize='22px'
                _hover={{ color: "black" }}
                href='#tokenomics'
                onClick={onClose}
              >
                Tokenomics
              </Link>

              <Link fontSize='22px' _hover={{ color: "black" }} href='#dao' onClick={onClose}>
                DAO
              </Link>

              <Link fontSize='22px' _hover={{ color: "black" }} href='#cxdtoken' onClick={onClose}>
                CXD Token
              </Link>

              <Popover trigger='click'>
                <PopoverTrigger>
                  <HStack spacing={0}>
                    <Link fontSize='22px' _hover={{ color: "black" }}>
                      Community
                    </Link>
                    <Image src={expand} w='18px' />
                  </HStack>
                </PopoverTrigger>

                <PopoverContent w='140px' border='0px' boxShadow={0}>
                  <PopoverBody>
                    <VStack alignItems='flex-start' py={3}>
                      <HStack spacing={3}>
                        <Image src={discord} w='18px' />
                        <Link fontSize='22px' _hover={{ color: "green" }} onClick={onClose}>
                          Discord
                        </Link>
                      </HStack>

                      <HStack spacing={3}>
                        <Image src={medium} w='18px' />
                        <Link fontSize='22px' _hover={{ color: "green" }} onClick={onClose}>
                          Medium
                        </Link>
                      </HStack>

                      <HStack spacing={3}>
                        <Image src={twitter} w='18px' />
                        <Link fontSize='22px' _hover={{ color: "green" }} onClick={onClose}>
                          Twitter
                        </Link>
                      </HStack>

                      <HStack spacing={3}>
                        <Image color='gray.500' src={telegram} w='18px' />
                        <Link fontSize='22px' _hover={{ color: "green" }} onClick={onClose}>
                          Telegram
                        </Link>
                      </HStack>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default Linkstack;
