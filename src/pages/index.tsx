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
  useBreakpointValue,
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
  const isMobileVersion = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingBottom={{ base: '24px', md: '40px' }}
    >
      <Flex
        width="100%"
        height={{ base: '163px', md: '335px' }}
        backgroundImage="url(/background.png)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        justifyContent="center"
      >
        <HStack
          marginTop={{ base: 'none', md: '80px' }}
          marginX={{ base: '16px', md: 'none' }}
          spacing="100px"
          alignItems="flex-start"
        >
          <Stack
            maxWidth="530px"
            spacing={{ base: '8px', md: '20px' }}
            marginTop={{ base: '28px', md: '16px' }}
          >
            <Heading
              as="h2"
              color="white"
              fontSize={{ base: '20px', md: '36px' }}
              fontWeight="medium"
            >
              6 Continentes, infinitas possibilidades.
            </Heading>
            <Text color="gray.100" fontSize={{ base: '14px', md: '20px' }}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          {!isMobileVersion && <Image src="airplane.svg" />}
        </HStack>
      </Flex>

      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        width={{ base: '275px', md: '1200px' }}
        marginTop={{ base: '9px', md: '120px' }}
      >
        {travelTypes.map(travelType => (
          <Stack
            key={travelType.id}
            direction={{ base: 'row', md: 'column' }}
            alignItems="center"
            width={{ base: '128px', md: '160px' }}
            marginTop={{ base: '27px', md: 'none' }}
          >
            {!isMobileVersion ? (
              <Image src={travelType.image} width="85px" height="85px" />
            ) : (
              <Box
                width="8px"
                height="8px"
                borderRadius="lg"
                background="yellow.500"
              />
            )}

            <Text
              textAlign="center"
              fontSize={{ base: '16px', md: '24px' }}
              fontWeight="semibold"
              marginTop="24px"
            >
              {travelType.label}
            </Text>
          </Stack>
        ))}
      </Flex>

      <Box
        background="gray.600"
        width={{ base: '60px', md: '90px' }}
        height="1px"
        marginY={{ base: '36px', md: '80px' }}
      />

      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: '20px', md: '36px' }}
        fontWeight="medium"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Flex
        width="100%"
        maxWidth="1240px"
        height={{ base: '250px', md: '450px' }}
        marginTop={{ base: '20px', md: '52px' }}
      >
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
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                  height="100%"
                  backdropFilter="auto"
                  backdropBrightness="60%"
                >
                  <Link href={continent.url} passHref>
                    <a>
                      <Stack spacing={{ base: '12px', md: '16px' }}>
                        <Heading
                          fontSize={{ base: '24px', md: '48px' }}
                          fontWeight="bold"
                        >
                          {continent.name}
                        </Heading>
                        <Text
                          fontSize={{ base: '14px', md: '24px' }}
                          fontWeight="bold"
                        >
                          {continent.label}
                        </Text>
                      </Stack>
                    </a>
                  </Link>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Home;
