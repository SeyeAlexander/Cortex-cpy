import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
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
          <VStack
            lineHeight={{ base: "35px", xl: "70px", "2xl": "80px" }}
            maxW={{ base: "full", xl: "4xl" }}
          >
            <Text
              align='center'
              fontFamily='Aeonik Regular'
              fontSize={{ base: "28px", xl: "73px", "2xl": "90px" }}
            >
              Gain exposure to the highest quality Curve and Convex pools.
            </Text>

            <Flex
              align={{ base: "center", xl: "flex-end" }}
              flexDirection={{ base: "column", xl: "row" }}
              gap={{ base: "10px", xl: "25px" }}
              pt={{ base: "30px", xl: "80px" }}
            >
              <Flex
                align='flex-start'
                gap='10px'
                borderRadius={{ base: "10px", xl: "20px" }}
                p={{ base: "20px", xl: "30px" }}
                bg='white'
                h={{ xl: "260px" }}
                w={{ base: "full", xl: "226px" }}
                flexDirection={{ base: "row", xl: "column" }}
              >
                <Image src={tag} w={{ base: "30px", xl: "40px" }} />
                <Text
                  fontSize={{ base: "17px", xl: "27px" }}
                  lineHeight={{ base: "28px", xl: "40px" }}
                >
                  Hands-off. No ongoing costs or maintenance.
                </Text>
              </Flex>

              <Flex
                align='flex-start'
                gap='10px'
                bg='white'
                borderRadius={{ base: "10px", xl: "20px" }}
                p={{ base: "20px", xl: "30px" }}
                h={{ xl: "180px" }}
                w={{ base: "full", xl: "400px" }}
                flexDirection={{ base: "row", xl: "column" }}
              >
                <Image src={risk} w={{ base: "30px", xl: "40px" }} />
                <Text
                  fontSize={{ base: "17px", xl: "27px" }}
                  lineHeight={{ base: "28px", xl: "40px" }}
                >
                  Data-driven risk/reward assessments.
                </Text>
              </Flex>
            </Flex>

            <Flex
              align={{ base: "center", xl: "flex-start" }}
              flexDirection={{ base: "column", xl: "row" }}
              gap={{ base: "10px", xl: "25px" }}
              pt={{ base: "0px", xl: "20px" }}
            >
              <VStack
                align={{ base: "center", xl: "flex-end" }}
                spacing={{ base: "10px", xl: "25px" }}
              >
                <Flex
                  align='flex-start'
                  gap='10px'
                  borderRadius={{ base: "10px", xl: "20px" }}
                  p={{ base: "20px", xl: "30px" }}
                  h={{ xl: "180px" }}
                  w={{ base: "full", xl: "550px" }}
                  flexDirection={{ base: "row", xl: "column" }}
                  bg='white'
                >
                  <Image src={secure} w={{ base: "30px", xl: "40px" }} />
                  <Text
                    fontSize={{ base: "17px", xl: "27px" }}
                    lineHeight={{ base: "28px", xl: "40px" }}
                  >
                    Secure and stable returns are prioritised over risky degen yields.
                  </Text>
                </Flex>

                <Flex
                  align='flex-start'
                  gap='10px'
                  borderRadius={{ base: "10px", xl: "20px" }}
                  p={{ base: "20px", xl: "30px" }}
                  h={{ xl: "220px" }}
                  w={{ base: "full", xl: "260px" }}
                  flexDirection={{ base: "row", xl: "column" }}
                  bg='white'
                >
                  <Image src={shield} w={{ base: "30px", xl: "40px" }} />
                  <Text
                    fontSize={{ base: "17px", xl: "27px" }}
                    lineHeight={{ base: "28px", xl: "40px" }}
                  >
                    Secure and audited smart contracts.
                  </Text>
                </Flex>
              </VStack>

              <Flex
                align='flex-start'
                gap='10px'
                borderRadius={{ base: "10px", xl: "20px" }}
                p={{ base: "20px", xl: "30px" }}
                h={{ xl: "260px" }}
                w={{ base: "full", xl: "300px" }}
                flexDirection={{ base: "row", xl: "column" }}
                bg='white'
              >
                <Image src={umbrella} w={{ base: "30px", xl: "40px" }} />
                <Text
                  fontSize={{ base: "17px", xl: "27px" }}
                  lineHeight={{ base: "28px", xl: "40px" }}
                >
                  Low correlation to BTC , ETH, Defi blue chips & S&P 500.
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Protocol;
