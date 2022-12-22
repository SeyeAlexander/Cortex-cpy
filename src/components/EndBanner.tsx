import { Container, VStack, HStack, Text, Image, Box, Button, Divider } from "@chakra-ui/react";
import icon1 from "../assets/icon1.svg";
import logo from "../assets/cortex-logo.png";
import checkmark from "../assets/checkmark.png";
import halborn from "../assets/halborn.png";

const EndBanner = () => {
  return (
    <Box mt='130px' pb='70px' bg='linear-gradient(108deg, #191f2d 0%, #363f53 51%)' color='#EFEFEF'>
      <Container maxW='6xl'>
        <VStack spacing='70px'>
          <HStack pt='75px'>
            <Image src={icon1} w='80px' />
            <Text fontFamily='Aeonik Regular' fontSize='75px' color='#EFEFEF'>
              Cortex DAO Token
            </Text>
          </HStack>

          <HStack w='full' align='flex-start'>
            <VStack w='29%' align='flex-start'>
              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Receive stablecoins as fee distribution from protocol profits
                </Text>
              </HStack>

              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Lock CXD to be rewarded for a long-term commitment
                </Text>
              </HStack>

              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Contribute to the DAO and earn rewards
                </Text>
              </HStack>
            </VStack>

            <VStack w='42%'>
              <Image src={logo} />
            </VStack>

            <VStack w='29%' align='flex-start'>
              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Govern and grow the protocol
                </Text>
              </HStack>

              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Help grow the Curve and Convex ecosystem, a fundamental part of Defi
                </Text>
              </HStack>

              <HStack pb='40px' align='flex-start'>
                <Image src={checkmark} />
                <Text fontFamily='Aeonik Regular' fontSize='28px' color='#EFEFEF'>
                  Become a part of the next layer of Defi
                </Text>
              </HStack>
            </VStack>
          </HStack>

          <VStack w='35%'>
            <Button colorScheme='green' w='full' h='50px' borderRadius='10px'>
              Learn more
            </Button>

            <HStack justify='space-between' w='full'>
              <Text fontFamily='Aeonik Medium' fontSize='17px' color='#A0A6B5'>
                Price: $2.34
              </Text>
              <Text fontFamily='Aeonik Medium' fontSize='17px' color='#18A672'>
                Add to Wallet
              </Text>
              <Text fontFamily='Aeonik Medium' fontSize='17px' color='#18A672'>
                Where to buy CXD
              </Text>
            </HStack>
          </VStack>

          <Box border='1px' borderRadius='3px' h='1px' borderColor='gray.500' w='full'></Box>

          <HStack>
            <Text fontFamily='Aeonik Regular' fontSize='30px' color='#EFEFEF'>
              Audited by
            </Text>
            <Image src={halborn} />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default EndBanner;
