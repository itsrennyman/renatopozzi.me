import { Button, Card, Flex, Text } from "../UI";

export const Project = ({ title, description, href, alt }) => {
  return (
    <Card>
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="4">
          <Text size="2xl" weight="medium">
            {title}
          </Text>
          <Text color="secondary">{description}</Text>
        </Flex>
        <Button as="a" alt={alt} href={href} color="secondary">
          Learn More
        </Button>
      </Flex>
    </Card>
  );
};
