import { Flex, FlexProps, Image, Stack, Text } from '@chakra-ui/react';

interface CityCardProps extends FlexProps {
  city: string;
  country: string;
  cityImageURL: string;
  countryImageURL: string;
}

export const CityCard: React.FC<CityCardProps> = ({
  city,
  country,
  cityImageURL,
  countryImageURL,
  ...rest
}) => {
  return (
    <Flex direction="column" width="256px" height="279px" {...rest}>
      <Flex
        width="100%"
        height="173px"
        borderTopRadius="4px"
        backgroundImage={`url(${cityImageURL})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      />
      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        border="1px"
        borderTop="0"
        borderBottomRadius="4px"
        borderColor="yellow.500"
        paddingX="24px"
      >
        <Stack>
          <Text color="gray.600" fontSize="20px" fontWeight="semibold">
            {city}
          </Text>
          <Text fontSize="16px">{country}</Text>
        </Stack>

        <Flex width="30px" height="30px" borderRadius="full" overflow="hidden">
          <Image src={countryImageURL} objectFit="cover" height="100%" />
        </Flex>
      </Flex>
    </Flex>
  );
};
