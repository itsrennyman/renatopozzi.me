import NextLink from "next/link";

export function Link({ children, href, className, isExternal = false }) {
  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
}
