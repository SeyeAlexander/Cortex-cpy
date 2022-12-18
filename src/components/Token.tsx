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
    <Container maxW='6xl' mt='200px'>
      <Flex
        w='full'
        bg='#191F2D'
        bgImage='linear-gradient(90deg, #191f2d 0%, #363f53 64%)'
        h='620px'
        borderRadius='30px'
        px='70px'
        color='white'
      >
        <VStack w='52%' align='flex-start' pt='50px' pr='60px'>
          <Image src={logo} w='80px' />
          <HStack>
            <Text id='text' fontFamily='Aeonik Bold' fontSize='58px' lineHeight='60px'>
              idxCVX
            </Text>
            <Text fontFamily='Aeonik Regular' fontSize='58px' lineHeight='60px'>
              instantly
            </Text>
          </HStack>
          <Text fontFamily='Aeonik Regular' fontSize='58px' lineHeight='60px' pb='30px'>
            diversifies your portfolio across the entire Convex Index.
          </Text>
          <Button
            mr='10px'
            colorScheme='green'
            w='230px'
            borderRadius='10px'
            h='60px'
            fontSize='16px'
          >
            Learn more
          </Button>
        </VStack>

        <VStack
          align='flex-start'
          p='30px'
          w='48%'
          bg='white'
          mt='120px'
          borderRadius='30px'
          h='530px'
          color='black'
        >
          <Text fontFamily='Aeonik Bold' fontSize='32px'>
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

          <Image src={chart} />

          <SimpleGrid columns={2} spacing={3} color='black' w='full' pt='35px'>
            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                Price
              </Text>

              <HStack>
                <Text fontSize='25px' fontFamily='Aeonik Bold' pr='5px'>
                  $6.3454
                </Text>
                <Image src={arrow} />
                <Text fontFamily='Aeonik Medium' fontSize='15px' color='green.400'>
                  2.2%
                </Text>
              </HStack>
            </VStack>

            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                APR
              </Text>
              <Text fontSize='25px' fontFamily='Aeonik Bold'>
                5.80%
              </Text>
            </VStack>

            <VStack align='flex-start' h='65px' lineHeight='20px'>
              <Text fontFamily='Aeonik Medium' fontSize='15px' color='gray.500'>
                TVL
              </Text>
              <Text fontSize='25px' fontFamily='Aeonik Bold'>
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
        </VStack>
      </Flex>
    </Container>
  );
};

export default Token;
