import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <div>banner</div>
      <div>travel</div>
      <div>continents</div>
    </Flex>
  );
};

export default Home;
