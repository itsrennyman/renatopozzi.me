import { default as NextImage } from "next/image";

export function Image({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}) {
  const classNames = (...args) => args.filter(Boolean).join(" ");

  return (
    <NextImage
      className={classNames("rounded-lg", className)}
      alt={alt}
      src={src}
      width={width}
      height={height}
      // layout="responsive"
      objectFit="cover"
      priority={priority}
    />
  );
}
