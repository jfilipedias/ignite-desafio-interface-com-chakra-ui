import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      background="white"
      height="100px"
    >
      <Link href="/">
        <a>
          <Image src="/logo.svg" alt="logo" width={184.06} height={45.92} />
        </a>
      </Link>
    </Flex>
  );
};

export default Header;
