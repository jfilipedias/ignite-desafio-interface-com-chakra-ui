import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const imageWidth = useBreakpointValue({ base: 81, md: 184.06 });
  const imageHeight = useBreakpointValue({ base: 20, md: 45.92 });

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      background="white"
      height={{ base: '50px', md: '100px' }}
    >
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt="logo"
            width={imageWidth}
            height={imageHeight}
          />
        </a>
      </Link>
    </Flex>
  );
};

export default Header;
