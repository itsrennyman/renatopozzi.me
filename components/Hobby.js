export function Hobby({ title, Icon, children }) {
  return (
    <div className="p-8 rounded-lg bg-gray-100 dark:bg-gray-800">
      <Icon className="h-8 w-8 text-black dark:text-white" />
      <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
        {title}
      </h3>
      <div className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
        {children}
      </div>
    </div>
  );
}
