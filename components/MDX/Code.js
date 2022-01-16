import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function Code({ className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match && match[1];

  if (!language) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  const replaceLast = (str, find, replace) => {
    const index = str.lastIndexOf(find);
    if (index === -1) {
      return str;
    }
    return (
      str.substring(0, index) + replace + str.substring(index + find.length)
    );
  };

  children = replaceLast(children, "\n", "");

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
    >
      {children}
    </SyntaxHighlighter>
  );
}
