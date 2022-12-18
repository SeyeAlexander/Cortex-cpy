import { Container, Box, Flex, VStack, HStack, Text, Button, Image } from "@chakra-ui/react";
import logo from "../assets/cortex-logo2.svg";
import icon1 from "../assets/icon1.svg";

const Trade = () => {
  return (
    <Container maxW='6xl' mt='40px'>
      {/* bg='#191F2D' */}
      <Flex gap='130px' justify='center'>
        <HStack w='40%' justify='space-between'>
          <VStack w='39%' mt='-70px'>
            <VStack
              w='full'
              bg='white'
              align='flex-start'
              px='30px'
              pt='30px'
              borderRadius='20px'
              mb='10px'
              pb='35px'
              spacing='12px'
            >
              <Text fontFamily='Aeonik Bold'>Home</Text>
              <Text fontFamily='Aeonik Bold' color='green'>
                Trade idxCVX
              </Text>
              <Text fontFamily='Aeonik Bold'>Lock CXD</Text>
              <Text fontFamily='Aeonik Bold'>Liquidity Pools</Text>
            </VStack>

            <Button
              colorScheme='green'
              w='full'
              borderRadius='20px'
              h='54px'
              fontFamily='Aeonik Regular'
              fontSize='21px'
              fontWeight='normal'
            >
              Sell
            </Button>
          </VStack>

          <VStack
            align='flex-start'
            px='30px'
            pt='30px'
            pb='40px'
            w='56%'
            bg='white'
            borderRadius='20px'
          >
            <Text fontFamily='Aeonik Medium' fontSize='25px'>
              My balance
            </Text>

            <HStack align='flex-start'>
              <Image src={logo} w='40px' />
              <VStack align='flex-start' spacing='-5px'>
                <Text fontFamily='Aeonik Bold' fontSize='33px'>
                  64.20
                </Text>
                <Text fontSize='15px' color='gray.500'>
                  Value $$$
                </Text>
              </VStack>

              <Box pt='20px'>
                <Text fontFamily='Aeonik Medium' fontSize='12px' color='gray.500'>
                  idxCVX
                </Text>
              </Box>
            </HStack>

            <HStack align='flex-start'>
              <Image src={icon1} w='40px' />
              <VStack align='flex-start' spacing='-5px'>
                <Text fontFamily='Aeonik Bold' fontSize='33px'>
                  10.60
                </Text>
                <Text fontSize='15px' color='gray.500'>
                  Value $$$
                </Text>
              </VStack>

              <Box pt='20px'>
                <Text fontFamily='Aeonik Medium' fontSize='12px' color='gray.500'>
                  CXD
                </Text>
              </Box>
            </HStack>
          </VStack>
        </HStack>

        <HStack w='30%'>
          <VStack w='full' align='flex-start'>
            <Text fontFamily='Aeonik Bold' fontSize='40px' lineHeight='38px'>
              No commitment.
            </Text>
            <Text fontFamily='Aeonik Regular' fontSize='40px' lineHeight='45px'>
              Sell your Index Token any time.
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Trade;
