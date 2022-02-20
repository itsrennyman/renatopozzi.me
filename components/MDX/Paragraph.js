import { Text } from "../UI";

export const Paragraph = (props) => (
  <Text
    as="p"
    size="2"
    css={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
    {...props}
  />
);
