import { Container, Flex, VStack, Text, HStack, Button, Box, Image } from "@chakra-ui/react";
import eth from "../assets/ethicon.svg";
import logo from "../assets/cortex-logo2.svg";

const Earn = () => {
  return (
    <Container maxW='6xl' mt={{ base: "150px", xl: "200px" }}>
      <Flex
        justify='center'
        align={{ base: "center", xl: "flex-start" }}
        gap={{ base: "30px", xl: "100px" }}
        direction={{ base: "column", xl: "row" }}
        w='full'
      >
        <VStack
          align='flex-start'
          bg='white'
          w={{ base: "250px", xl: "33%" }}
          borderRadius={{ base: "10px", xl: "20px" }}
          p={{ base: "15px", xl: "30px" }}
          ml={{ base: "55px", xl: "0" }}
        >
          <HStack
            w='full'
            borderRadius={{ base: "10px", xl: "20px" }}
            h={{ base: "34px", xl: "57px" }}
            shadow='md'
            mb={{ base: "5px", xl: "10px" }}
            p='5px'
          >
            <HStack
              justify='center'
              bg='#E3F1EC'
              w='50%'
              borderRadius={{ base: "5px", xl: "15px" }}
              h='full'
            >
              <Text
                fontFamily='Aeonik Regular'
                fontSize={{ base: "16px", xl: "21px" }}
                color='green'
              >
                Buy
              </Text>
            </HStack>

            <HStack justify='center' w='50%'>
              <Text
                fontFamily='Aeonik Regular'
                fontSize={{ base: "16px", xl: "21px" }}
                color='gray.500'
              >
                Sell
              </Text>
            </HStack>
          </HStack>

          <HStack
            w='full'
            p='10px'
            borderRadius={{ base: "10px", xl: "20px" }}
            border='2px'
            borderColor='gray.200'
            h={{ base: "35px", xl: "57px" }}
            justify='space-between'
          >
            <HStack>
              <Image src={eth} w={{ base: "27px", xl: "35px" }} />
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "18px", xl: "25px" }}>
                110.5
              </Text>
            </HStack>

            <Text fontSize={{ base: "12px", xl: "16px" }}>~~$$$</Text>
          </HStack>

          <HStack
            w='full'
            p='10px'
            borderRadius={{ base: "10px", xl: "20px" }}
            border='2px'
            borderColor='gray.200'
            h={{ base: "35px", xl: "57px" }}
            justify='space-between'
          >
            <HStack>
              <Image src={logo} w={{ base: "27px", xl: "35px" }} />
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "18px", xl: "25px" }}>
                120.5
              </Text>
            </HStack>

            <Text fontSize={{ base: "12px", xl: "16px" }}>~~$$$</Text>
          </HStack>

          <Box pt={{ base: "5px", xl: "13px" }} w='full'>
            <Button
              fontFamily='Aeonik Regular'
              colorScheme='green'
              w='full'
              borderRadius={{ base: "10px", xl: "20px" }}
              h={{ base: "30px", xl: "55px" }}
              fontSize={{ base: "18px", xl: "21px" }}
              fontWeight='normal'
            >
              Buy
            </Button>
          </Box>
        </VStack>

        <VStack
          w={{ base: "full", xl: "34%" }}
          align={{ base: "center", xl: "flex-start" }}
          lineHeight={{ base: "25px", xl: "44px" }}
        >
          <Text
            align={{ base: "center", xl: "start" }}
            as='span'
            fontFamily='Aeonik Regular'
            fontSize={{ base: "20px", xl: "40px" }}
          >
            Instantly begin earning{" "}
            <Text as='span' fontFamily='Aeonik Bold' fontSize={{ base: "20px", xl: "40px" }}>
              5.74% APR{" "}
            </Text>{" "}
            by simply purchasing the index Token.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Earn;
