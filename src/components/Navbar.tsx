import {
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import expand from "../assets/expand.svg";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";

const Navbar = () => {
  return (
    <Container h='77px' maxW='6xl'>
      <Flex w='full' h='full'>
        <HStack w='26%'>
          <Text fontSize='3xl' fontWeight='bold'>
            CORTEX DAO
          </Text>
        </HStack>

        <HStack w='74%' justify='space-between' color='gray.600' px='10px'>
          <Link _hover={{ color: "black" }}>Protocol</Link>

          <Link _hover={{ color: "black" }}>Tokenomics</Link>

          <Link _hover={{ color: "black" }}>DAO</Link>

          <Link _hover={{ color: "black" }}>CXD Token</Link>

          <Popover trigger='hover'>
            <PopoverTrigger>
              <HStack spacing={0}>
                <Link _hover={{ color: "black" }}>Community</Link>
                <Image src={expand} w='18px' />
              </HStack>
            </PopoverTrigger>

            <PopoverContent w='125px' borderRadius='10px'>
              <PopoverBody>
                <VStack alignItems='flex-start' py={3}>
                  <HStack spacing={3}>
                    <Image src={discord} w='18px' />
                    <Link _hover={{ color: "green" }}>Discord</Link>
                  </HStack>

                  <HStack spacing={3}>
                    <Image src={medium} w='18px' />
                    <Link _hover={{ color: "green" }}>Medium</Link>
                  </HStack>

                  <HStack spacing={3}>
                    <Image src={twitter} w='18px' />
                    <Link _hover={{ color: "green" }}>Twitter</Link>
                  </HStack>

                  <HStack spacing={3}>
                    <Image color='gray.500' src={telegram} w='18px' />
                    <Link _hover={{ color: "green" }}>Telegram</Link>
                  </HStack>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Button
            colorScheme='green'
            borderRadius='10px'
            w='200px'
            fontSize='15px'
            fontWeight='bold'
            h='39px'
          >
            Launch App
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
