import { Container, Box, Text, Flex, VStack, HStack, Image } from "@chakra-ui/react";
import icon1 from "../assets/flag.svg";
import icon2 from "../assets/dsign.svg";
import icon3 from "../assets/dollar-blue.svg";
import icon4 from "../assets/tgreen.svg";
import icon5 from "../assets/susd.png";
import icon6 from "../assets/download (2).png";
import icon7 from "../assets/download (3).png";
import icon8 from "../assets/dollar-black.png";
import icon9 from "../assets/download.png";
import icon10 from "../assets/three-crv.5ffb8695.svg";

const Convex = () => {
  return (
    <Container maxW='6xl' mt='70px'>
      <Flex justify='center' gap='40px' direction={{ base: "column-reverse", xl: "row" }} w='full'>
        <VStack align='flex-start' w={{ base: "full", xl: "45%" }} h='300px' pt='50px'>
          <Text fontFamily='Aeonik Regular' fontSize='40px' lineHeight='45px'>
            Broad and diversified exposure to the
          </Text>
          <Text fontFamily='Aeonik Bold' fontSize='40px' lineHeight='45px'>
            Curve/Convex Ecosystem
          </Text>
        </VStack>

        <VStack w={{ base: "full", xl: "40%" }} h='500px' align='flex-start'>
          <HStack ml='240px' w='150px' h='100px' borderRadius='15px' bg='white' justify='center'>
            <Image src={icon1} w='40px' />

            <Image src={icon10} w='40px' id='iconlap' />
          </HStack>

          <HStack pl='35px' pt='10px' spacing='20px'>
            <HStack justify='center' w='230px' h='100px' borderRadius='15px' bg='white'>
              <Image src={icon2} w='40px' />
              <Image src={icon3} w='40px' id='iconlap' />
              <Image src={icon4} w='40px' id='iconlap' />
              <Image src={icon5} w='40px' id='iconlap' />
            </HStack>

            <HStack justify='center' w='150px' h='100px' borderRadius='15px' bg='white'>
              <Image src={icon6} w='40px' />
              <Image src={icon10} w='40px' id='iconlap' />
            </HStack>
          </HStack>

          <HStack pl='70px' pt='10px' spacing='20px'>
            <HStack justify='center' w='150px' h='100px' borderRadius='15px' bg='white'>
              <Image src={icon7} w='40px' />
              <Image src={icon10} w='40px' id='iconlap' />
            </HStack>

            <HStack justify='center' w='150px' h='100px' borderRadius='15px' bg='white'>
              <Image src={icon8} w='40px' />
              <Image src={icon10} w='40px' id='iconlap' />
            </HStack>
          </HStack>

          <Box pl='170px' pt='10px'>
            <HStack justify='center' w='150px' h='100px' borderRadius='15px' bg='white'>
              <Image src={icon9} w='40px' />
              <Image src={icon10} w='40px' id='iconlap' />
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Convex;
