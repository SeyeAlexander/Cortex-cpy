import {
  Container,
  Text,
  Flex,
  Image,
  VStack,
  Button,
  HStack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import logo from "../assets/cortex-logo2.svg";
import chart from "../assets/chart.png";
import arrow from "../assets/arrow.png";
import icon1 from "../assets/download.png";
import icon2 from "../assets/download (2).png";
import icon3 from "../assets/download (3).png";
import icon4 from "../assets/three-crv.5ffb8695.svg";

const Token = () => {
  return (
    <Container maxW='6xl' mt={{ base: "60px", xl: "200px" }}>
      <Flex
        w='full'
        bg='#191F2D'
        bgImage='linear-gradient(90deg, #191f2d 0%, #363f53 64%)'
        h={{ base: "790px", xl: "620px" }}
        borderRadius={{ base: "10px", xl: "30px" }}
        px={{ base: "17px", xl: "70px" }}
        color='white'
        direction={{ base: "column", xl: "row" }}
      >
        <VStack
          w={{ base: "full", xl: "52%" }}
          align='flex-st28t'
          pt={{ base: "18px", xl: "50px" }}
          pr={{ base: "0", xl: "60px" }}
        >
          <Image src={logo} w={{ base: "40px", xl: "80px" }} />

          <Text
            fontFamily='Aeonik Regular'
            fontSize={{ base: "28px", xl: "58px" }}
            lineHeight={{ base: "30px", xl: "60px" }}
            pb='30px'
            as='span'
          >
            <Text
              as='span'
              id='text'
              fontFamily='Aeonik Bold'
              fontSize={{ base: "28px", xl: "58px" }}
            >
              idxCVX
            </Text>{" "}
            instantly diversifies your portfolio across the entire Convex Index.
          </Text>

          {/* <HStack pt={{ base: "15px", xl: "0" }} w='full' lineHeight={{ base: "20px", xl: "60px" }}>
            <Text as='span' id='text' fontFamily='Aeonik Bold' fontSize={{ base: "28px", xl: "58px" }}>
              idxCVX
            </Text>

            <Text
              fontFamily='Aeonik Regular'
              fontSize='58px'
              display={{ base: "none", xl: "block" }}
            >
              instantly
            </Text>

            <Text fontFamily='Aeonik Regular' fontSize='28px' display={{ xl: "none" }}>
              instantly diversifies
            </Text>
          </HStack>

          <Text
            fontFamily='Aeonik Regular'
            fontSize='58px'
            lineHeight='60px'
            pb='30px'
            display={{ base: "none", xl: "block" }}
          >
            diversifies your portfolio across the entire Convex Index.
          </Text>

          <Text
            fontFamily='Aeonik Regular'
            fontSize='28px'
            lineHeight='30px'
            pb='30px'
            display={{ xl: "none" }}
          >
            your portfolio across the entire Convex Index.
          </Text> */}

          <Button
            mr='10px'
            colorScheme='green'
            w='230px'
            borderRadius='10px'
            h='60px'
            fontSize='16px'
            display={{ base: "none", xl: "block" }}
          >
            Learn more
          </Button>
        </VStack>

        <VStack
          align='flex-start'
          p={{ base: "16px", xl: "30px" }}
          w={{ base: "full", xl: "48%" }}
          bg='white'
          mt={{ base: "0px", xl: "120px" }}
          borderRadius={{ base: "10px", xl: "30px" }}
          h={{ xl: "530px" }}
          color='black'
        >
          <Box>
            <Text fontFamily='Aeonik Bold' fontSize={{ base: "25px", xl: "32px" }}>
              Convex Index Token
            </Text>

            <Text
              fontFamily='Aeonik Medium'
              fontSize='22px'
              fontWeight='medium'
              color='gray.500'
              pb='30px'
            >
              idxCVX
            </Text>
          </Box>

          <Image src={chart} />

          <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={3} color='black' w='full' pt='35px'>
            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                Price
              </Text>

              <HStack>
                <Text fontSize={{ base: "20px", xl: "25px" }} fontFamily='Aeonik Bold' pr='5px'>
                  $6.3454
                </Text>
                <Image src={arrow} />
                <Text
                  fontFamily='Aeonik Medium'
                  fontSize={{ base: "14px", xl: "15px" }}
                  color='green.400'
                >
                  2.2%
                </Text>
              </HStack>
            </VStack>

            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                APR
              </Text>
              <Text fontSize={{ base: "20px", xl: "25px" }} fontFamily='Aeonik Bold'>
                5.80%
              </Text>
            </VStack>

            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                TVL
              </Text>
              <Text fontSize={{ base: "20px", xl: "25px" }} fontFamily='Aeonik Bold'>
                $956,237.40
              </Text>
            </VStack>

            <VStack align='flex-start' h='65px' lineHeight='15px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                Allocations
              </Text>

              <HStack>
                <Image src={icon1} w='25px' />
                <Image src={icon4} w='25px' id='iconlap' />
                <Image src={icon2} w='25px' />
                <Image src={icon4} w='25px' id='iconlap' />
                <Image src={icon3} w='25px' />
                <Image src={icon4} w='25px' id='iconlap' />

                <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                  + 6
                </Text>
              </HStack>
            </VStack>
          </SimpleGrid>

          <Button
            colorScheme='green'
            w='full'
            borderRadius='10px'
            h='60px'
            fontSize='16px'
            display={{ xl: "none" }}
          >
            Learn more
          </Button>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Token;
