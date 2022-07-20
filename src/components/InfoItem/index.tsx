import {
  Flex,
  FlexProps,
  HStack,
  Image,
  Text,
  Tooltip,
} from '@chakra-ui/react';

interface InfoItemProps extends FlexProps {
  quantity: number;
  label: string;
  tip?: string;
}

export const InfoItem: React.FC<InfoItemProps> = ({
  quantity,
  label,
  tip,
  ...rest
}) => {
  return (
    <Flex direction="column" alignItems="center" {...rest}>
      <Text
        color="yellow.500"
        fontSize={{ base: '24px', md: '48px' }}
        fontWeight="semibold"
      >
        {quantity}
      </Text>
      <HStack>
        <Text
          color="gray.600"
          fontSize={{ base: '18px', md: '24px' }}
          fontWeight={{ base: 'normal', md: 'semibold' }}
        >
          {label}
        </Text>
        {!!tip && (
          <Tooltip
            label={tip}
            fontSize="16px"
            color="gray.600"
            background="gray.100"
          >
            <Image src="/icons/info.svg" width="16px" height="16px" />
          </Tooltip>
        )}
      </HStack>
    </Flex>
  );
};
