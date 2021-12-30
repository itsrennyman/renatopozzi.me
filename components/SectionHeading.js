export function SectionHeading(props) {
  return (
    <div className="flex flex-col space-y-5">
      <p className="font-medium tracking-wide text-cyan-500 dark:text-cyan-400 uppercase">
        {props.heading}
      </p>

      {props.children}
    </div>
  );
}

SectionHeading.Title = function Title(props) {
  return (
    <h2 className="relative max-w-xl text-4xl font-semibold tracking-tight leading-tight lg:text-5xl text-black dark:text-white transition duration-200">
      {props.children}
    </h2>
  );
};

SectionHeading.Description = function Description(props) {
  return (
    <p className="prose lg:prose-xl dark:prose-inverse text-gray-500 dark:text-gray-400">
      {props.children}
    </p>
  );
};
