import { Card, Flex, Text } from "../UI";

export const Stats = ({ title, value }) => {
  return (
    <Card>
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="3">
          <Text size="3" css={{ fontWeight: 500 }}>
            {title}
          </Text>
          <Text size="4" color="secondary" css={{ lineHeight: 1 }}>
            {value}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
