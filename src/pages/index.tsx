import type { NextPage } from 'next';

import { Keyboard, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

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

const continents = [
  {
    id: 1,
    name: 'Europa',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80',
    url: '/europa',
  },
  {
    id: 2,
    name: 'América do Norte',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    url: '/europa',
  },
  {
    id: 3,
    name: 'América do Sul',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1568805746970-0bbae56ab18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    url: '/europa',
  },
  {
    id: 4,
    name: 'África',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    url: '/europa',
  },
  {
    id: 5,
    name: 'Ásia',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80',
    url: '/europa',
  },
  {
    id: 6,
    name: 'Oceania',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    url: '/europa',
  },
];

const Home: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center" paddingBottom="40px">
      <Flex
        width="100%"
        height="335px"
        backgroundImage="url(/background.png)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
      >
        <HStack marginTop="80px" spacing="100px" alignItems="flex-start">
          <Stack maxWidth="530px" spacing="20px" marginTop="16px">
            <Heading as="h2" color="white" fontWeight="medium">
              6 Continentes, infinitas possibilidades.
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

      <Flex width="100%" maxWidth="1240px" height="450px" marginTop="52px">
        <Swiper
          slidesPerView={1}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Keyboard, Pagination, Navigation]}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id}>
              <Flex
                width="100%"
                height="100%"
                alignItems="center"
                justifyContent="center"
                backgroundImage={`url(${continent.image})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                textAlign="center"
                color="gray.50"
              >
                <Stack
                  spacing="16px"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  backdropFilter="auto"
                  backdropBrightness="60%"
                >
                  <Link href={continent.url} passHref>
                    <a>
                      <Heading fontSize="48px" fontWeight="bold">
                        {continent.name}
                      </Heading>
                      <Text fontSize="24px" fontWeight="bold">
                        {continent.label}
                      </Text>
                    </a>
                  </Link>
                </Stack>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Home;
