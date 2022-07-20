import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const logoWidth = useBreakpointValue({ base: 81, md: 184.06 });
  const logoHeight = useBreakpointValue({ base: 20, md: 45.92 });

  const route = useRouter();

  const isHome = route.pathname === '/';

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      background="white"
      height={{ base: '50px', md: '100px' }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="100%"
        maxWidth="1160px"
        marginX="20px"
      >
        {!isHome && (
          <Box position="absolute" left={{ base: '16px', md: '0px' }}>
            <Link href="/" passHref>
              <a>
                <Image
                  src="/icons/leftArrow.svg"
                  alt="back to home"
                  width="8px"
                  height="16px"
                />
              </a>
            </Link>
          </Box>
        )}

        <Link href="/" passHref>
          <a>
            <Image
              src="/logo.svg"
              alt="logo"
              width={logoWidth}
              height={logoHeight}
            />
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
