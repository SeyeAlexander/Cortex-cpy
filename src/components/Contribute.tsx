import { Box, Button, Container, Flex, Text, VStack, HStack, Image } from "@chakra-ui/react";
import daoBanner from "../assets/dao-banner.png";
import icon1 from "../assets/icon1.svg";

const Contribute = () => {
  return (
    <Container maxW='6xl' mt='120px'>
      <Flex w='full' justify='space-between' gap='20px'>
        <VStack
          className='bg'
          align='flex-start'
          bg='linear-gradient(74deg, #ececec 0%, #e1e1e1 58%)'
          w='full'
          h='300px'
          p='50px'
          borderRadius='20px'
        >
          <Box mb='55px' lineHeight='40px'>
            <Text fontFamily='Aeonik Bold' fontSize='33px' color='green'>
              Understanding
            </Text>
            <Text fontFamily='Aeonik Bold' fontSize='33px'>
              Cortex Tokenomics
            </Text>
          </Box>

          <Button colorScheme='green' w='220px' h='50px' borderRadius='10px'>
            Read Whitepaper
          </Button>
        </VStack>

        <Flex
          w='full'
          position='relative'
          h='300px'
          borderRadius='20px'
          bg='linear-gradient(108deg, #191f2d 0%, #363f53 51%)'
        >
          <VStack align='flex-start' p='50px'>
            <Box mb='55px' lineHeight='40px'>
              <Text fontFamily='Aeonik Bold' fontSize='33px' color='#18A672'>
                Contribute
              </Text>

              <HStack>
                <Text fontFamily='Aeonik Bold' fontSize='33px' color='white'>
                  to the
                </Text>
                <Image src={icon1} w='30px' />
                <Text fontFamily='Aeonik Bold' fontSize='33px' color='white'>
                  DAO
                </Text>
              </HStack>
            </Box>

            <Button colorScheme='green' w='220px' h='50px' borderRadius='10px'>
              Contribute
            </Button>
          </VStack>

          <VStack>
            <Image src={daoBanner} id='logo' />
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Contribute;
