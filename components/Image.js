import { default as NextImage } from "next/image";

export function Image({ src, alt, quality = 70, priority = false, className }) {
  const classNames = (...args) => args.filter(Boolean).join(" ");
  const image = `${src}?q=${quality}`;

  return (
    <NextImage
      className={classNames("rounded-lg", className)}
      alt={alt}
      src={image}
      layout="fill"
      objectFit="cover"
      priority={priority}
    />
  );
}
