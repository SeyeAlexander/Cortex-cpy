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
    <Container maxW='6xl' mt={{ base: "90px", xl: "70px" }}>
      <Flex
        justify='center'
        gap={{ base: "0", xl: "40px" }}
        direction={{ base: "column-reverse", xl: "row" }}
        w='full'
      >
        <VStack
          align={{ base: "center", xl: "flex-start" }}
          w={{ base: "full", xl: "45%" }}
          pt={{ base: "45px", xl: "50px" }}
          lineHeight={{ base: "25px", xl: "44px" }}
        >
          <Text
            as='span'
            align={{ base: "center", xl: "start" }}
            fontFamily='Aeonik Regular'
            fontSize={{ base: "20px", xl: "40px" }}
          >
            Broad and diversified exposure to the
            <Text as='span' fontFamily='Aeonik Bold' fontSize={{ base: "20px", xl: "40px" }}>
              {" "}
              Curve/Convex Ecosystem
            </Text>
          </Text>
        </VStack>

        <VStack w={{ base: "full", xl: "40%" }} align={{ base: "center", xl: "flex-start" }}>
          <HStack
            ml={{ base: "70px", xl: "200px" }}
            px={{ base: "25px", xl: "35px" }}
            py={{ base: "20px", xl: "30px" }}
            borderRadius={{ base: "10px", xl: "15px" }}
            bg='white'
            justify='center'
          >
            <Image src={icon1} w={{ base: "25px", xl: "40px" }} />

            <Image src={icon10} w={{ base: "25px", xl: "40px" }} id='iconlap' />
          </HStack>

          <HStack
            pl={{ base: "0", xl: "35px" }}
            pt={{ base: "5px", xl: "10px" }}
            spacing={{ base: "15px", xl: "20px" }}
          >
            <HStack
              justify='center'
              px={{ base: "25px", xl: "35px" }}
              py={{ base: "20px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "15px" }}
              bg='white'
            >
              <Image src={icon2} w={{ base: "25px", xl: "40px" }} />
              <Image src={icon3} w={{ base: "25px", xl: "40px" }} id='iconlap' />
              <Image src={icon4} w={{ base: "25px", xl: "40px" }} id='iconlap' />
              <Image src={icon5} w={{ base: "25px", xl: "40px" }} id='iconlap' />
            </HStack>

            <HStack
              justify='center'
              px={{ base: "25px", xl: "35px" }}
              py={{ base: "20px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "15px" }}
              bg='white'
            >
              <Image src={icon6} w={{ base: "25px", xl: "40px" }} />
              <Image src={icon10} w={{ base: "25px", xl: "40px" }} id='iconlap' />
            </HStack>
          </HStack>

          <HStack
            pl={{ base: "0px", xl: "70px" }}
            pt={{ base: "5px", xl: "10px" }}
            spacing={{ base: "15px", xl: "20px" }}
          >
            <HStack
              justify='center'
              px={{ base: "25px", xl: "35px" }}
              py={{ base: "20px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "15px" }}
              bg='white'
            >
              <Image src={icon7} w={{ base: "25px", xl: "40px" }} />
              <Image src={icon10} w={{ base: "25px", xl: "40px" }} id='iconlap' />
            </HStack>

            <HStack
              justify='center'
              px={{ base: "25px", xl: "35px" }}
              py={{ base: "20px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "15px" }}
              bg='white'
            >
              <Image src={icon8} w={{ base: "25px", xl: "40px" }} />
              <Image src={icon10} w={{ base: "25px", xl: "40px" }} id='iconlap' />
            </HStack>
          </HStack>

          <Box pl={{ base: "0px", xl: "170px" }} pt={{ base: "5px", xl: "10px" }}>
            <HStack
              justify='center'
              px={{ base: "25px", xl: "35px" }}
              py={{ base: "20px", xl: "30px" }}
              borderRadius={{ base: "10px", xl: "15px" }}
              bg='white'
            >
              <Image src={icon9} w={{ base: "25px", xl: "40px" }} />
              <Image src={icon10} w={{ base: "25px", xl: "40px" }} id='iconlap' />
            </HStack>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Convex;
