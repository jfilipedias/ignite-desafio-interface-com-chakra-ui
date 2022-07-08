import { Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Flex
        position="relative"
        width="100vw"
        height="335px"
        justifyContent="center"
      >
        <Image src="background.png" objectFit="cover" />

        <HStack
          position="absolute"
          top="80px"
          spacing="100px"
          alignItems="flex-start"
        >
          <Stack maxWidth="530px" spacing="20px" marginTop="16px">
            <Heading color="white" fontWeight="medium">
              5 Continentes, infinitas possibilidades.
            </Heading>
            <Text color="gray.100" fontSize="20px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Image src="airplane.svg" />
        </HStack>
      </Flex>
      <div>travel</div>
      <div>continents</div>
    </Flex>
  );
};

export default Home;
