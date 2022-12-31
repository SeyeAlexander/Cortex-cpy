import { Container, Text, VStack, HStack, Image } from "@chakra-ui/react";
import backImage from "../assets/tokenomic-circle.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import triplearrow from "../assets/triple-arrows.svg";

const Tokenomics = () => {
  return (
    <Container maxW='6xl' mt={{ base: "150px", xl: "300px" }} id='tokenomics'>
      <HStack
        h={{ base: "270px", xl: "590px" }}
        bgImage={backImage}
        bgPosition='center'
        bgSize='contain'
        bgRepeat='no-repeat'
        justify='space-between'
      >
        <HStack
          bg='white'
          // w={{ base: "300px", xl: "initial" }}
          p={{ base: "7px", xl: "32px" }}
          borderRadius={{ base: "10px", xl: "20px" }}
          flexWrap='wrap'
        >
          <Image src={icon1} w={{ base: "20px", xl: "40px" }} />
          <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
            Earn
          </Text>
          <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }} color='green'>
            CXD
          </Text>
        </HStack>

        <VStack h='full' justify='space-between'>
          <HStack spacing='15px'>
            <Image src={triplearrow} w={{ base: "20px", xl: "40px" }} />
            <HStack
              bg='white'
              p={{ base: "7px", xl: "32px" }}
              flexWrap='wrap'
              borderRadius={{ base: "10px", xl: "20px" }}
            >
              <Image src={icon2} w={{ base: "20px", xl: "40px" }} />
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
                Stake
              </Text>
              <Text id='text' fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
                idxCVX
              </Text>
            </HStack>
            <Image src={triplearrow} w={{ base: "20px", xl: "40px" }} />
          </HStack>

          <Text fontFamily='Aeonik Regular' fontSize={{ base: "25px", xl: "75px" }}>
            Tokenomics
          </Text>

          <HStack spacing='15px'>
            <Image src={triplearrow} w={{ base: "20px", xl: "40px" }} transform='rotate(180deg)' />
            <HStack
              bg='white'
              p={{ base: "7px", xl: "32px" }}
              flexWrap='wrap'
              borderRadius={{ base: "10px", xl: "20px" }}
            >
              <Image src={icon1} w={{ base: "20px", xl: "40px" }} />
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
                Lock
              </Text>
              <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }} color='green'>
                CXD
              </Text>
            </HStack>
            <Image src={triplearrow} w={{ base: "20px", xl: "40px" }} transform='rotate(180deg)' />
          </HStack>
        </VStack>

        <HStack
          bg='white'
          p={{ base: "7px", xl: "32px" }}
          flexWrap='wrap'
          borderRadius={{ base: "10px", xl: "20px" }}
        >
          <Image src={icon2} w={{ base: "20px", xl: "40px" }} />
          <Text fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
            Earn
          </Text>
          <Text id='text' fontFamily='Aeonik Bold' fontSize={{ base: "15px", xl: "28px" }}>
            idxCVX
          </Text>
        </HStack>
      </HStack>
    </Container>
  );
};

export default Tokenomics;
