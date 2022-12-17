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
    <Container maxW='6xl'>
      <Flex w='full' justify='space-between'>
        <VStack alignItems='flex-start' justify='center' position='relative' py='140px'>
          <Box lineHeight={{ xl: "80px", "2xl": "100px" }}>
            <Text fontSize={{ xl: "75px", "2xl": "95px" }} fontFamily='Aeonik Medium'>
              Profit from the
            </Text>
            <Text fontSize={{ xl: "75px", "2xl": "95px" }} fontFamily='Aeonik Bold'>
              Curve Wars.
            </Text>
          </Box>

          <Text
            fontSize='18px'
            color='gray.500'
            pb='40px'
            lineHeight={{ xl: "25px", "2xl": "30px" }}
          >
            Diversified exposure to Curve and Convex <br /> through the purchase of a single index
            token.
          </Text>

          <HStack pb={{ xl: "75px", "2xl": "140px" }}>
            <Button
              mr='10px'
              colorScheme='green'
              w='230px'
              borderRadius='10px'
              h='60px'
              fontSize='16px'
              fontWeight='bold'
            >
              Launch App
            </Button>
            <Button
              colorScheme='green'
              w='230px'
              borderRadius='10px'
              h='60px'
              fontSize='16px'
              fontWeight='bold'
              bg='white'
              variant='outline'
            >
              Tokenomics
            </Button>
          </HStack>

          <HStack>
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
          <Image src={logo} id='logo' w={{ xl: "550px", "2xl": "34%" }} />
        </VStack>
      </Flex>
    </Container>
  );
};

export default Herosection;
