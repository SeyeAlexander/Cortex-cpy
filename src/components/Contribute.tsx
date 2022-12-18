import { Container, Flex, Text, VStack } from "@chakra-ui/react";

const Contribute = () => {
  return (
    //     background-color: #ececec;
    // background-image: linear-gradient(74deg, #ececec 0%, #e1e1e1 58%);

    <Container maxW='6xl' mt='120px' pb='120px'>
      <Flex w='full' justify='space-between' gap='20px'>
        <VStack
          bg='linear-gradient(74deg, #ececec 0%, #e1e1e1 58%)'
          w='full'
          h='300px'
          borderRadius='20px'
        ></VStack>

        <VStack
          w='full'
          h='300px'
          borderRadius='20px'
          bg='#191F2D'
          bgImage='linear-gradient(108deg, #191f2d 0%, #363f53 51%)'
        ></VStack>
      </Flex>
    </Container>
  );
};

export default Contribute;
