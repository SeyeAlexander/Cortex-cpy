import {
  Container,
  VStack,
  HStack,
  Text,
  Image,
  Box,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";
import icon1 from "../assets/icon1.svg";
import logo from "../assets/cortex-logo.png";
import checkmark from "../assets/checkmark.png";
import halborn from "../assets/halborn.png";

const EndBanner = () => {
  return (
    <Box
      mt={{ base: "20px", xl: "130px" }}
      pb={{ base: "20px", xl: "70px" }}
      bg='linear-gradient(108deg, #191f2d 0%, #363f53 51%)'
      color='#EFEFEF'
      id='cxdtoken'
    >
      <Container maxW='6xl'>
        <VStack spacing={{ base: "20px", xl: "70px" }}>
          <HStack pt={{ base: "60px", xl: "75px" }} pb={{ base: "50px", xl: "0" }}>
            <Image src={icon1} w={{ base: "40px", xl: "80px" }} />
            <Text
              fontFamily='Aeonik Regular'
              fontSize={{ base: "28px", xl: "75px" }}
              color='#EFEFEF'
            >
              Cortex DAO Token
            </Text>
          </HStack>

          <Flex
            w='full'
            align='flex-start'
            flexDirection={{ base: "column", xl: "row" }}
            position='relative'
          >
            <VStack w={{ base: "60%", xl: "29%" }} align='flex-start'>
              <HStack pb='10px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Receive stablecoins as fee distribution from protocol profits
                </Text>
              </HStack>

              <HStack pb='10px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Lock CXD to be rewarded for a long-term commitment
                </Text>
              </HStack>

              <HStack pb='10px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Contribute to the DAO and earn rewards
                </Text>
              </HStack>
            </VStack>

            <VStack w={{ base: "full", xl: "42%" }}>
              <Image
                src={logo}
                position={{ base: "absolute", xl: "initial" }}
                top='-30px'
                left='200px'
              />
            </VStack>

            <VStack w={{ base: "60%", xl: "29%" }} align='flex-start'>
              <HStack pb='10px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Govern and grow the protocol
                </Text>
              </HStack>

              <HStack pb='10px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Help grow the Curve and Convex ecosystem, a fundamental part of Defi
                </Text>
              </HStack>

              <HStack pb='50px' align='flex-start'>
                <Image src={checkmark} />
                <Text
                  fontFamily='Aeonik Regular'
                  fontSize={{ base: "17px", xl: "28px" }}
                  color='#EFEFEF'
                >
                  Become a part of the next layer of Defi
                </Text>
              </HStack>
            </VStack>
          </Flex>

          <VStack w={{ base: "full", xl: "35%" }} spacing='20px'>
            <Button colorScheme='green' w='full' h='50px' borderRadius='10px'>
              Learn more
            </Button>

            <HStack
              justify={{ base: "center", xl: "space-between" }}
              w='full'
              spacing='20px'
              pb={{ base: "40px", xl: "0" }}
              wrap='wrap'
            >
              <Text fontFamily='Aeonik Medium' fontSize='17px' color='#A0A6B5'>
                Price: $2.34
              </Text>
              <Text as='u' fontFamily='Aeonik Medium' fontSize='17px' color='#18A672'>
                Add to Wallet
              </Text>
              <Text as='u' fontFamily='Aeonik Medium' fontSize='17px' color='#18A672'>
                Where to buy CXD?
              </Text>
            </HStack>
          </VStack>

          <Box border='1px' borderRadius='3px' h='1px' borderColor='gray.500' w='full'></Box>

          <HStack>
            <Text
              fontFamily='Aeonik Regular'
              fontSize={{ base: "18px", xl: "30px" }}
              color='#EFEFEF'
            >
              Audited by
            </Text>
            <Image src={halborn} w={{ base: "130px", xl: "initial" }} />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default EndBanner;
