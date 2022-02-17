import { Button, Card, Flex, Text } from "../UI";

export const Project = ({ title, description, href }) => {
  return (
    <Card>
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="3">
          <Text size="3" css={{ fontWeight: 500 }}>
            {title}
          </Text>
          <Text size="1" color="secondary">
            {description}
          </Text>
        </Flex>
        <Button as="a" href={href} color="secondary">
          Learn More
        </Button>
      </Flex>
    </Card>
  );
};
