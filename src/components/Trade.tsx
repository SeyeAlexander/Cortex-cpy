import { Container, Box, Flex, VStack, HStack, Text, Button, Image } from "@chakra-ui/react";
import logo from "../assets/cortex-logo2.svg";
import icon1 from "../assets/icon1.svg";

const Trade = () => {
  return (
    <Container maxW='6xl' mt='80px'>
      <Flex
        gap={{ base: "30px", xl: "130px" }}
        justify='center'
        direction={{ base: "column", xl: "row" }}
        w='full'
      >
        <HStack
          w={{ base: "full", xl: "40%" }}
          justify={{ base: "center", xl: "space-between" }}
          spacing={{ base: "20px", xl: "0px" }}
        >
          <VStack mt={{ base: "-20px", xl: "-70px" }}>
            <VStack
              w='full'
              bg='white'
              align='flex-start'
              px={{ base: "15px", xl: "30px" }}
              pt={{ base: "15px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "20px" }}
              mb={{ base: "5px", xl: "10px" }}
              pb={{ base: "15px", xl: "35px" }}
              spacing='12px'
            >
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "9px", xl: "initial" }}>
                Home
              </Text>
              <Text
                fontFamily='Aeonik Bold'
                fontSize={{ base: "9px", xl: "initial" }}
                color='green'
              >
                Trade idxCVX
              </Text>
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "9px", xl: "initial" }}>
                Lock CXD
              </Text>
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "9px", xl: "initial" }}>
                Liquidity Pools
              </Text>
            </VStack>

            <Button
              colorScheme='green'
              w='full'
              borderRadius={{ base: "10px", xl: "20px" }}
              h={{ base: "35px", xl: "54px" }}
              fontFamily='Aeonik Regular'
              fontSize={{ base: "14px", xl: "21px" }}
              fontWeight='normal'
            >
              Sell
            </Button>
          </VStack>

          <VStack
            align='flex-start'
            px={{ base: "15px", xl: "30px" }}
            pt={{ base: "15px", xl: "30px" }}
            pb={{ base: "15px", xl: "40px" }}
            bg='white'
            borderRadius={{ base: "10px", xl: "20px" }}
          >
            <Text fontFamily='Aeonik Medium' fontSize={{ base: "14px", xl: "25px" }}>
              My balance
            </Text>

            <HStack align='flex-start'>
              <Box pt={{ base: "7px", xl: "5px" }}>
                <Image src={logo} w={{ base: "20px", xl: "40px" }} />
              </Box>

              <VStack align='flex-start' spacing='-5px'>
                <Text fontFamily='Aeonik Bold' fontSize={{ base: "23px", xl: "33px" }}>
                  64.20
                </Text>
                <Text fontSize={{ base: "9px", xl: "15px" }} color='gray.500'>
                  Value $$$
                </Text>
              </VStack>

              <Box pt={{ base: "14px", xl: "20px" }}>
                <Text
                  fontFamily='Aeonik Medium'
                  fontSize={{ base: "9px", xl: "12px" }}
                  color='gray.500'
                >
                  idxCVX
                </Text>
              </Box>
            </HStack>

            <HStack align='flex-start'>
              <Box pt={{ base: "7px", xl: "5px" }}>
                <Image src={icon1} w={{ base: "20px", xl: "40px" }} />
              </Box>

              <VStack align='flex-start' spacing='-5px'>
                <Text fontFamily='Aeonik Bold' fontSize={{ base: "23px", xl: "33px" }}>
                  10.60
                </Text>
                <Text fontSize={{ base: "9px", xl: "15px" }} color='gray.500'>
                  Value $$$
                </Text>
              </VStack>

              <Box pt={{ base: "14px", xl: "20px" }}>
                <Text
                  fontFamily='Aeonik Medium'
                  fontSize={{ base: "9px", xl: "12px" }}
                  color='gray.500'
                >
                  CXD
                </Text>
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <VStack w={{ base: "full", xl: "30%" }} justify='center'>
          <VStack
            w={{ base: "xs", xl: "full" }}
            justify='center'
            lineHeight={{ base: "20px", xl: "45px" }}
          >
            <Text
              as='span'
              align={{ base: "center", xl: "start" }}
              fontFamily='Aeonik Bold'
              fontSize={{ base: "20px", xl: "40px" }}
            >
              No commitment. {""} <br />
              <Text as='span' fontFamily='Aeonik Regular' fontSize={{ base: "20px", xl: "40px" }}>
                Sell your Index Token any time.
              </Text>
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Trade;
