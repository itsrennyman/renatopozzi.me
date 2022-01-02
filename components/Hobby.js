import { Panel } from "./UI/Panel";

export function Hobby({ title, icon: Icon, children }) {
  return (
    <Panel>
      <Icon className="h-8 w-8 text-black dark:text-white" />
      <h3 className="text-black dark:text-white font-bold text-2xl mt-8">
        {title}
      </h3>
      <div className="text-gray-500 dark:text-gray-400 tracking-tight text-lg mt-2">
        {children}
      </div>
    </Panel>
  );
}
