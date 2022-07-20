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
import { continents, travelTypes } from '../data';

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
            <Text color="gray.200" fontSize={{ base: '14px', md: '20px' }}>
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
