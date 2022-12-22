import { Box, Container, VStack, HStack, Text, Link, Image } from "@chakra-ui/react";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

const Footer = () => {
  return (
    <Box w='full' bg='#191F2D'>
      <Container maxW='6xl'>
        <VStack py='70px' spacing='130px'>
          <HStack w='full' align='flex-start'>
            <VStack w='50%' align='flex-start'>
              <Link href='/'>
                <Text fontSize='3xl' fontFamily='Aeonik Bold ' color='#EFEFEF'>
                  CORTEX DAO
                </Text>
              </Link>
            </VStack>

            <VStack w='15%' align='flex-start'>
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

            <VStack w='20%' align='flex-start'>
              <Link
                fontFamily='Aeonik Regular '
                fontSize='17px'
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

            <VStack w='15%' align='flex-start'>
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

          <HStack w='full' align='flex-start'>
            <HStack w='50%' align='flex-start'>
              <Text fontFamily='Aeonik Medium ' fontSize='16px' color='#A0A6B5'>
                Cortex 2022 All Rights Reserved.
              </Text>
            </HStack>

            <HStack w='35%' align='flex-start' spacing='30px'>
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

            <HStack w='15%' align='flex-start'>
              <Link>
                <Text fontFamily='Aeonik Medium ' fontSize='16px' color='#EFEFEF'>
                  Docs
                </Text>
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
