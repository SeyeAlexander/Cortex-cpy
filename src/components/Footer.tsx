import { Box, Container, VStack, HStack, Flex, Text, Link, Image } from "@chakra-ui/react";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

const Footer = () => {
  return (
    <Box w='full' bg='#191F2D'>
      <Container maxW='6xl'>
        <VStack py={{ base: "40px", xl: "70px" }} spacing={{ base: "40px", xl: "130px" }}>
          <Flex
            w='full'
            align='flex-start'
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "40px", xl: "0" }}
          >
            <VStack w={{ base: "full", xl: "50%" }} align='flex-start'>
              <Link href='/'>
                <Text fontSize='3xl' fontFamily='Aeonik Bold ' color='#EFEFEF'>
                  CORTEX
                </Text>
              </Link>
            </VStack>

            <HStack w={{ base: "full", xl: "50%" }} align='flex-start'>
              <Flex
                w={{ base: "50%", xl: "70%" }}
                align='flex-start'
                direction={{ base: "column", xl: "row" }}
                gap={{ base: "15px", xl: "0" }}
              >
                <VStack w='50%' align='flex-start' spacing={{ base: "15px", xl: "0" }}>
                  <Link
                    fontFamily='Aeonik Regular '
                    fontSize='17px'
                    color='#EFEFEF'
                    _hover={{ color: "green" }}
                    href='#dao'
                  >
                    DAO
                  </Link>

                  <Link
                    fontFamily='Aeonik Regular '
                    fontSize='17px'
                    color='#EFEFEF'
                    _hover={{ color: "green" }}
                    href='#protocol'
                  >
                    Protocol
                  </Link>
                </VStack>

                <VStack w='50%' align='flex-start' spacing={{ base: "15px", xl: "0" }} p={0}>
                  <Link
                    fontFamily='Aeonik Regular '
                    fontSize='16px'
                    color='#EFEFEF'
                    _hover={{ color: "green" }}
                    href='#cxdtoken'
                  >
                    CXD Token
                  </Link>

                  <Link
                    fontFamily='Aeonik Regular '
                    fontSize='17px'
                    color='#EFEFEF'
                    _hover={{ color: "green" }}
                    href='#tokenomics'
                  >
                    Tokenomics
                  </Link>
                </VStack>
              </Flex>

              <VStack
                w={{ base: "50%", xl: "30%" }}
                align='flex-start'
                spacing={{ base: "15px", xl: "0" }}
              >
                <Link display={{ xl: "none" }}>
                  <Text fontFamily='Aeonik Medium ' fontSize='16px' color='#EFEFEF'>
                    Docs
                  </Text>
                </Link>

                <Link
                  fontFamily='Aeonik Regular '
                  fontSize='16px'
                  color='#A0A6B5'
                  _hover={{ color: "green" }}
                >
                  Terms of Service
                </Link>

                <Link
                  fontFamily='Aeonik Regular '
                  fontSize='16px'
                  color='#A0A6B5'
                  _hover={{ color: "green" }}
                >
                  Privacy
                </Link>
              </VStack>
            </HStack>
          </Flex>

          <Flex
            w='full'
            align='flex-start'
            direction={{ base: "column-reverse", xl: "row" }}
            gap={{ base: "25px", xl: "0" }}
          >
            <HStack w={{ base: "full", xl: "50%" }} align='flex-start'>
              <Text fontFamily='Aeonik Regular ' fontSize='16px' color='#A0A6B5'>
                &copy; Cortex 2022 All Rights reserved.
              </Text>
            </HStack>

            <HStack w={{ base: "full", xl: "35%" }} align='flex-start' spacing='30px'>
              <Link>
                <Image src={discord} w='30px' />
              </Link>

              <Link>
                <Image src={medium} w='30px' />
              </Link>

              <Link>
                <Image src={twitter} w='30px' />
              </Link>

              <Link>
                <Image src={telegram} w='30px' />
              </Link>
            </HStack>

            <HStack w='15%' align='flex-start' display={{ base: "none", xl: "block" }}>
              <Link>
                <Text fontFamily='Aeonik Medium ' fontSize='16px' color='#EFEFEF'>
                  Docs
                </Text>
              </Link>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
