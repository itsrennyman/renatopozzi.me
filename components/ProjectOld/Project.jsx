import { Button, Flex, Text } from "../UI";

export const Project = ({ title, description, href, alt }) => {
  return (
    <div className="card">
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="4">
          <Text size="2xl" weight="medium">
            {title}
          </Text>
          <Text color="secondary">{description}</Text>
        </Flex>
        <Button as="a" alt={alt} href={href} color="secondary">
          View more about {title}!
        </Button>
      </Flex>
    </div>
  );
};
