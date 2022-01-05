export function SectionHeading(props) {
  const classNames = (...args) => args.filter(Boolean).join(" ");
  return (
    <div className={classNames("flex flex-col space-y-5", props.className)}>
      <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase text-lg">
        {props.heading}
      </p>

      {props.children}
    </div>
  );
}

SectionHeading.Title = function Title(props) {
  return (
    <h2 className="relative max-w-xl text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-black dark:text-white transition duration-200">
      {props.children}
    </h2>
  );
};

SectionHeading.Description = function Description(props) {
  return (
    <p className="prose prose-lg md:prose-xl dark:prose-inverse text-gray-500 dark:text-gray-400">
      {props.children}
    </p>
  );
};
