import { Container, Text, VStack, HStack, Image } from "@chakra-ui/react";
import backImage from "../assets/tokenomic-circle.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import triplearrow from "../assets/triple-arrows.svg";

const Tokenomics = () => {
  return (
    <Container maxW='6xl' mt='300px'>
      <HStack
        h='590px'
        bgImage={backImage}
        bgPosition='center'
        bgRepeat='no-repeat'
        justify='space-between'
      >
        <HStack bg='white' p='32px' borderRadius='20px'>
          <Image src={icon1} w='40px' />
          <Text fontFamily='Aeonik Bold' fontSize='28px'>
            Earn
          </Text>
          <Text fontFamily='Aeonik Bold' fontSize='28px' color='green'>
            CXD
          </Text>
        </HStack>

        <VStack h='full' justify='space-between'>
          <HStack spacing='15px'>
            <Image src={triplearrow} w='40px' />
            <HStack bg='white' p='32px' borderRadius='20px'>
              <Image src={icon2} w='40px' />
              <Text fontFamily='Aeonik Bold' fontSize='28px'>
                Stake
              </Text>
              <Text id='text' fontFamily='Aeonik Bold' fontSize='28px'>
                idxCVX
              </Text>
            </HStack>
            <Image src={triplearrow} w='40px' />
          </HStack>

          <Text fontFamily='Aeonik Regular' fontSize='75px'>
            Tokenomics
          </Text>

          <HStack spacing='15px'>
            <Image src={triplearrow} w='40px' transform='rotate(180deg)' />
            <HStack bg='white' p='32px' borderRadius='20px'>
              <Image src={icon1} w='40px' />
              <Text fontFamily='Aeonik Bold' fontSize='28px'>
                Lock
              </Text>
              <Text fontFamily='Aeonik Bold' fontSize='28px' color='green'>
                CXD
              </Text>
            </HStack>
            <Image src={triplearrow} w='40px' transform='rotate(180deg)' />
          </HStack>
        </VStack>

        <HStack bg='white' p='32px' borderRadius='20px'>
          <Image src={icon2} w='40px' />
          <Text fontFamily='Aeonik Bold' fontSize='28px'>
            Earn
          </Text>
          <Text id='text' fontFamily='Aeonik Bold' fontSize='28px'>
            idxCVX
          </Text>
        </HStack>
      </HStack>
    </Container>
  );
};

export default Tokenomics;
