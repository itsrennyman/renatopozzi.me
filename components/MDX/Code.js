import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function Code({ className, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match && match[1];

  if (!language) {
    return <code className={className} {...props} />;
  }

  return (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      style={a11yDark}
      customStyle={{
        padding: 0,
        borderRadius: 0,
        background: "rgba(0,0,0,0.1)",
      }}
      lineNumberStyle={{
        color: "rgba(255,255,255,0.7)",
        marginRight: "0.5rem",
      }}
      wrapLines={true}
      showLineNumbers={true}
      {...props}
    />
  );
}
