import { styled } from "../../stitches.config";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

export const Prose = styled("div", {
  color: "$text100",
  maxWidth: "65ch",
  fontSize: "1.125rem",
  lineHeight: round(28 / 16),
  p: {
    marginTop: em(20, 16),
    marginBottom: em(20, 16),
  },
  h1: {
    fontSize: em(36, 16),
    marginTop: "0",
    marginBottom: em(32, 36),
    lineHeight: round(40 / 36),
  },
  h2: {
    fontSize: em(24, 16),
    marginTop: em(48, 24),
    marginBottom: em(24, 24),
    lineHeight: round(32 / 24),
  },
  h3: {
    fontSize: em(20, 16),
    marginTop: em(32, 20),
    marginBottom: em(12, 20),
    lineHeight: round(32 / 20),
  },
  code: {
    fontSize: em(14, 16),
  },
  "h2 code": {
    fontSize: em(21, 24),
  },
  "h3 code": {
    fontSize: em(18, 20),
  },
  pre: {
    fontSize: em(14, 16),
    lineHeight: round(24 / 14),
    marginTop: em(24, 14),
    marginBottom: em(24, 14),
    borderRadius: rem(6),
    paddingTop: em(12, 14),
    paddingBottom: em(12, 14),
  },
  ol: {
    marginTop: em(20, 16),
    marginBottom: em(20, 16),
  },
  ul: {
    marginTop: em(20, 16),
    marginBottom: em(20, 16),
  },
  li: {
    marginTop: em(8, 16),
    marginBottom: em(8, 16),
  },
  ol: {
    paddingLeft: em(26, 16),
  },
  "ol > li": {
    paddingLeft: em(6, 16),
  },
  ul: {
    paddingLeft: em(26, 16),
  },
  "ul > li": {
    paddingLeft: em(6, 16),
  },
  "> ul > li p": {
    marginTop: em(12, 16),
    marginBottom: em(12, 16),
  },
  "> ul > li > *:first-child": {
    marginTop: em(20, 16),
  },
  "> ul > li > *:last-child": {
    marginBottom: em(20, 16),
  },
  "> ol > li > *:first-child": {
    marginTop: em(20, 16),
  },
  "> ol > li > *:last-child": {
    marginBottom: em(20, 16),
  },
  "ul ul, ul ol, ol ul, ol ol": {
    marginTop: em(12, 16),
    marginBottom: em(12, 16),
  },
  hr: {
    marginTop: em(48, 16),
    marginBottom: em(48, 16),
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
    marginTop: em(32, 16),
    marginBottom: em(32, 16),
    fontSize: em(14, 16),
    lineHeight: round(24 / 14),
  },
  thead: {
    borderBottomWidth: "1px",
    borderBottomColor: "$text200",
  },
  "thead th": {
    fontWeight: "600",
    verticalAlign: "bottom",
    paddingRight: em(8, 14),
    paddingBottom: em(8, 14),
    paddingLeft: em(8, 14),
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
    paddingTop: em(8, 14),
    paddingRight: em(8, 14),
    paddingBottom: em(8, 14),
    paddingLeft: em(8, 14),
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
