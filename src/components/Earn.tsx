import { Container, Flex, VStack, Text, HStack, Button, Box, Image } from "@chakra-ui/react";
import eth from "../assets/ethicon.svg";
import logo from "../assets/cortex-logo2.svg";

const Earn = () => {
  return (
    <Container maxW='6xl' mt='200px'>
      <Flex justify='center' gap='100px' direction={{ base: "column", xl: "row" }} w='full'>
        <VStack
          align='flex-start'
          bg='white'
          w={{ base: "full", xl: "33%" }}
          h='340px'
          borderRadius='20px'
          p='30px'
        >
          <HStack w='full' borderRadius='20px' h='57px' shadow='md' mb='10px' p='5px'>
            <HStack justify='center' bg='#E3F1EC' w='50%' borderRadius='15px' h='full'>
              <Text fontFamily='Aeonik Regular' fontSize='21px' color='green'>
                Buy
              </Text>
            </HStack>

            <HStack justify='center' w='50%'>
              <Text fontFamily='Aeonik Regular' fontSize='21px' color='gray.500'>
                Sell
              </Text>
            </HStack>
          </HStack>

          <HStack
            w='full'
            p='10px'
            borderRadius='20px'
            border='2px'
            borderColor='gray.200'
            h='57px'
            justify='space-between'
          >
            <HStack>
              <Image src={eth} />
              <Text fontFamily='Aeonik Bold' fontSize='25px'>
                110.5
              </Text>
            </HStack>

            <Text>~~$$$</Text>
          </HStack>

          <HStack
            w='full'
            p='10px'
            borderRadius='20px'
            border='2px'
            borderColor='gray.200'
            h='57px'
            justify='space-between'
          >
            <HStack>
              <Image src={logo} w='35px' />
              <Text fontFamily='Aeonik Bold' fontSize='25px'>
                120.5
              </Text>
            </HStack>

            <Text>~~$$$</Text>
          </HStack>

          <Box pt='13px' w='full'>
            <Button
              fontFamily='Aeonik Regular'
              colorScheme='green'
              w='full'
              borderRadius='20px'
              h='55px'
              fontSize='21px'
              fontWeight='normal'
            >
              Buy
            </Button>
          </Box>
        </VStack>

        <VStack
          w={{ base: "full", xl: "34%" }}
          h='320px'
          align='flex-start'
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
