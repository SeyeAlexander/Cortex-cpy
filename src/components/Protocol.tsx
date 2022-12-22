import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import tag from "../assets/tag.png";
import shield from "../assets/shield.png";
import umbrella from "../assets/umbrella.png";
import secure from "../assets/verify.png";
import risk from "../assets/cloud.png";

const Protocol = () => {
  return (
    <Box id='protocol'>
      <Container maxW='6xl' mt='40px'>
        <VStack>
          <VStack lineHeight={{ xl: "63px", "2xl": "80px" }}>
            <Text fontFamily='Aeonik Regular' fontSize={{ xl: "73px", "2xl": "90px" }}>
              Gain exposure to the
            </Text>
            <Text fontFamily='Aeonik Regular' fontSize={{ xl: "73px", "2xl": "90px" }}>
              highest quality Curves and
            </Text>
            <Text fontFamily='Aeonik Regular' fontSize={{ xl: "73px", "2xl": "90px" }}>
              Convex pools.
            </Text>

            <HStack align='flex-end' spacing='25px' pt='80px'>
              <VStack
                align='flex-start'
                borderRadius='20px'
                p='30px'
                h='280px'
                w='230px'
                bg='white'
              >
                <Image src={tag} w='40px' />
                <Text fontSize='27px' lineHeight='40px'>
                  Hands-off. No ongoing costs or maintenance.
                </Text>
              </VStack>

              <VStack
                align='flex-start'
                borderRadius='20px'
                p='30px'
                h='200px'
                w='400px'
                bg='white'
              >
                <Image src={risk} w='40px' />
                <Text fontSize='27px' lineHeight='40px'>
                  Data-driven risk/reward assessments.
                </Text>
              </VStack>
            </HStack>

            <HStack align='flex-start' spacing='25px' pt='20px'>
              <VStack align='flex-end' spacing='25px'>
                <VStack
                  align='flex-start'
                  borderRadius='20px'
                  p='30px'
                  h='200px'
                  w='550px'
                  bg='white'
                >
                  <Image src={secure} w='40px' />
                  <Text fontSize='27px' lineHeight='40px'>
                    Secure and stable returns are prioritised over risky degen yields.
                  </Text>
                </VStack>

                <VStack
                  align='flex-start'
                  borderRadius='20px'
                  p='30px'
                  h='220px'
                  w='260px'
                  bg='white'
                >
                  <Image src={shield} w='40px' />
                  <Text fontSize='27px' lineHeight='40px'>
                    Secure and audited smart contracts.
                  </Text>
                </VStack>
              </VStack>

              <VStack
                align='flex-start'
                borderRadius='20px'
                p='30px'
                h='260px'
                w='300px'
                bg='white'
              >
                <Image src={umbrella} w='40px' />
                <Text fontSize='27px' lineHeight='40px'>
                  Low correlation to BTC , ETH, Defi blue chips & S&P 500.
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Protocol;
