import {
  Container,
  Box,
  Flex,
  VStack,
  Image,
  Text,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/curve-glass.png";
import iconone from "../assets/icon1.svg";
import icontwo from "../assets/icon2.svg";

const Herosection = () => {
  return (
    <Container maxW={{ base: "90%", xl: "6xl" }}>
      <Flex w='full' justify='space-between' direction={{ base: "column-reverse", xl: "row" }}>
        <VStack
          alignItems='flex-start'
          justify='center'
          position='relative'
          pt={{ base: "380px", xl: "140px" }}
          pb={{ base: "70px", xl: "140px" }}
        >
          <Box lineHeight={{ base: "50px", xl: "80px", "2xl": "100px" }}>
            <Text fontSize={{ base: "40px", xl: "75px", "2xl": "95px" }} fontFamily='Aeonik Medium'>
              Profit from the
            </Text>
            <Text fontSize={{ base: "40px", xl: "75px", "2xl": "95px" }} fontFamily='Aeonik Bold'>
              Curve Wars.
            </Text>
          </Box>

          <Text
            fontSize={{ base: "16px", xl: "18px" }}
            color='gray.500'
            pb={{ base: "20px", xl: "40px" }}
            lineHeight={{ xl: "25px", "2xl": "30px" }}
            display={{ base: "none", xl: "block" }}
          >
            Diversified exposure to Curve and Convex <br /> through the purchase of a single index
            token.
          </Text>

          <Text
            fontSize={{ base: "16px", xl: "18px" }}
            color='gray.500'
            pb={{ base: "20px", xl: "40px" }}
            lineHeight={{ xl: "25px", "2xl": "30px" }}
            display={{ base: "block", xl: "none" }}
          >
            Diversified exposure to Curve and Convex through the purchase of a single index token.
          </Text>

          <Flex
            pb={{ base: "0", xl: "75px", "2xl": "140px" }}
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "5px", xl: "10px" }}
            w='full'
          >
            <Button
              colorScheme='green'
              w={{ base: "full", xl: "230px" }}
              borderRadius='10px'
              h='60px'
              fontSize='16px'
              fontWeight='bold'
            >
              Launch App
            </Button>

            <Button
              colorScheme='green'
              borderRadius='10px'
              w={{ base: "full", xl: "230px" }}
              h='60px'
              fontSize='16px'
              fontWeight='bold'
              bg='white'
              variant='outline'
            >
              Tokenomics
            </Button>
          </Flex>

          <HStack display={{ base: "none", lg: "flex" }}>
            <HStack spacing={1} pr='10px'>
              <Image src={iconone} w='30px' />
              <Text color='gray.500' fontWeight='15px'>
                Cortex DAO governs the
              </Text>
            </HStack>

            <HStack spacing={1}>
              <Image src={icontwo} w='30px' />
              <Text color='gray.500' fontWeight='15px'>
                Convex Index
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack>
          <Image
            src={logo}
            id='logo'
            w={{ base: "320px", xl: "550px", "2xl": "34%" }}
            position='absolute'
          />
        </VStack>
      </Flex>
    </Container>
  );
};

export default Herosection;
