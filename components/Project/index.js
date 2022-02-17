import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { Flex } from "../UI/Flex";
import { Paragraph } from "../UI/Paragraph";
import { Title } from "../UI/Title";

export const Project = ({ title, description, href }) => {
  return (
    <Card>
      <Flex direction="column" gap="7" align="baseline">
        <Flex direction="column" gap="3">
          <Title css={{ fontWeight: 500 }}>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </Flex>
        <Button as="a" href={href} color="secondary">
          Learn More
        </Button>
      </Flex>
    </Card>
  );
};
