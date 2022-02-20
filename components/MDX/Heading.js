import { Text } from "../UI";

export const H1 = (props) => (
  <Text as="h1" size="4" {...props} css={{ marginBottom: "2rem" }} />
);

export const H2 = (props) => (
  <Text
    as="h2"
    size="3"
    css={{ marginTop: "1.5555556em", marginBottom: "0.8888889em" }}
    {...props}
  />
);
