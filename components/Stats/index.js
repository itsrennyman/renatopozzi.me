import { Card, Flex, Text } from "../UI";

export const Stats = ({ title, value }) => {
  return (
    <Card>
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="4">
          <Text size="2xl" weight="medium">
            {title}
          </Text>
          <Text size="5xl" color="secondary" weight="bold">
            {value}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
