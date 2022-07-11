import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

interface TravelTypes {
  id: number;
  label: string;
  image: string;
}

const travelTypes: TravelTypes[] = [
  {
    id: 1,
    label: 'vida noturna',
    image: 'icons/cocktail.svg',
  },
  {
    id: 2,
    label: 'praia',
    image: 'icons/surf.svg',
  },
  {
    id: 3,
    label: 'moderno',
    image: 'icons/building.svg',
  },
  {
    id: 4,
    label: 'clássico',
    image: 'icons/museum.svg',
  },
  {
    id: 5,
    label: 'e mais...',
    image: 'icons/earth.svg',
  },
];

const Home: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center" paddingBottom="40px">
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
            <Heading as="h2" color="white" fontWeight="medium">
              5 Continentes, infinitas possibilidades.
            </Heading>
            <Text color="gray.100" fontSize="20px">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Image src="airplane.svg" />
        </HStack>
      </Flex>

      <Flex justifyContent="space-between" width="1200px" marginTop="120px">
        {travelTypes.map(travelType => (
          <Stack key={travelType.id} alignItems="center" width="160px">
            <Image src={travelType.image} width="85px" height="85px" />
            <Text
              textAlign="center"
              fontSize="24px"
              fontWeight="semibold"
              marginTop="24px"
            >
              {travelType.label}
            </Text>
          </Stack>
        ))}
      </Flex>

      <Box background="gray.600" width="90px" height="2px" marginY="80px" />

      <Heading as="h2" textAlign="center" fontSize="36px" fontWeight="medium">
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <div>continents</div>
    </Flex>
  );
};

export default Home;
