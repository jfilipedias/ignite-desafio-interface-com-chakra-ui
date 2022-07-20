import { Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { CityCard } from '../../components/CityCard';
import { InfoItem } from '../../components/InfoItem';
import { cities } from '../../data';

const Europa: NextPage = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingBottom={{ base: '24px', md: '40px' }}
    >
      <Flex
        width="100%"
        height={{ base: '150px', md: '500px' }}
        backgroundImage="url(https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex
          justifyContent="center"
          width="100%"
          height="100%"
          backdropFilter="auto"
          backdropBrightness="60%"
          paddingBottom={{ base: '0', md: '60px' }}
        >
          <Flex
            alignItems={{ base: 'center', md: 'flex-end' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            width="100%"
            maxWidth="1160px"
            marginX="20px"
          >
            <Heading
              color="white"
              fontWeight="semibold"
              fontSize={{ base: '28px', md: '48px' }}
            >
              Europa
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        as="main"
        direction="column"
        width="100%"
        maxWidth="1180px"
        marginTop={{ base: '24px', md: '80px' }}
        paddingX="20px"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: '16px', md: '70px' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Text
            color="gray.600"
            fontSize={{ base: '14px', md: '24px' }}
            textAlign="justify"
          >
            A Europa é, por convenção, um dos sete continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex
            flexShrink={0}
            alignItems="center"
            justifyContent="space-between"
            width={{ base: '340px', md: '490px' }}
          >
            <InfoItem quantity={50} label="países" />
            <InfoItem quantity={60} label="línguas" />
            <InfoItem
              quantity={27}
              label="cidades +100"
              tip="As 100 cidades mais visitadas do mundo."
            />
          </Flex>
        </Stack>

        <Heading
          marginTop={{ base: '32px', md: '80px' }}
          fontSize={{ base: '24px', md: '36px' }}
          fontWeight="medium"
        >
          Cidades +100
        </Heading>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap="46px"
          marginTop={{ base: '20px', md: '40px' }}
        >
          {cities.map(city => (
            <GridItem>
              <CityCard
                city={city.name}
                country={city.country}
                cityImageURL={city.image}
                countryImageURL={city.countryImage}
                margin="auto"
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Europa;
