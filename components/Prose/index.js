import { styled } from "../../stitches.config";

export const Prose = styled("div", {
  color: "$text100",
  // maxWidth: "65ch",
  fontSize: "$lg",
  lineHeight: "1.75",
  p: {
    marginTop: "1.25em",
    marginBottom: "1.25em",
  },
  h1: {
    fontSize: "2.25em",
    marginTop: "0",
    marginBottom: "0.8888889em",
    lineHeight: "1.1111111",
  },
  h2: {
    fontSize: "1.5em",
    marginTop: "2em",
    marginBottom: "1em",
    lineHeight: "1.3333333",
  },
  h3: {
    fontSize: "1.25em",
    marginTop: "1.6em",
    marginBottom: "0.6em",
    lineHeight: "1.6",
  },
  code: {
    fontSize: "0.875em",
  },
  pre: {
    fontSize: "0.875em",
    lineHeight: "1.7142857",
    marginTop: "1.7142857em",
    marginBottom: "1.7142857em",
    borderRadius: "0.375rem",
    paddingTop: "0.8571429em",
    paddingBottom: "0.8571429em",
  },
  ol: {
    paddingLeft: "1.625em",
  },
  ul: {
    paddingLeft: "1.625em",
  },
  li: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  "ol > li": {
    paddingLeft: "0.375em",
  },
  "ul > li": {
    paddingLeft: "0.375em",
  },
  "> ul > li p": {
    marginTop: "0.75em",
    marginBottom: "0.75em",
  },
  "> ul > li > *:first-child": {
    marginTop: "1.25em",
  },
  "> ul > li > *:last-child": {
    marginBottom: "1.25em",
  },
  "> ol > li > *:first-child": {
    marginTop: "1.25em",
  },
  "> ol > li > *:last-child": {
    marginBottom: "1.25em",
  },
  "ul ul, ul ol, ol ul, ol ol": {
    marginTop: "0.75em",
    marginBottom: "0.75em",
  },
  hr: {
    marginTop: "3em",
    marginBottom: "3em",
  },
  "hr + *": {
    marginTop: "0",
  },
  "h2 + *": {
    marginTop: "0",
  },
  "h3 + *": {
    marginTop: "0",
  },
  "h4 + *": {
    marginTop: "0",
  },
  table: {
    width: "100%",
    tableLayout: "auto",
    textAlign: "left",
    marginTop: "2em",
    marginBottom: "2em",
    fontSize: "0.875em",
    lineHeight: "1.7142857",
  },
  thead: {
    borderBottomWidth: "1px",
    borderBottomColor: "$text200",
  },
  "thead th": {
    fontWeight: "600",
    verticalAlign: "bottom",
    paddingRight: "0.5714286em",
    paddingBottom: "0.5714286em",
    paddingLeft: "0.5714286em",
  },
  "tbody tr": {
    borderBottomWidth: "1px",
    borderBottomColor: "$text200",
  },
  "tbody tr:last-child": {
    borderBottomWidth: "0",
  },
  "thead th:first-child": {
    paddingLeft: "0",
  },
  "thead th:last-child": {
    paddingRight: "0",
  },
  "tbody td": {
    paddingTop: "0.5714286em",
    paddingRight: "0.5714286em",
    paddingBottom: "0.5714286em",
    paddingLeft: "0.5714286em",
    verticalAlign: "baseline",
  },
  "tbody td:first-child": {
    paddingLeft: "0",
  },
  "tbody td:last-child": {
    paddingRight: "0",
  },
  "> :first-child": {
    marginTop: "0",
  },
  "> :last-child": {
    marginBottom: "0",
  },
});
