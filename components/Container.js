export function Container(props) {
  return (
    <section className="flex flex-col max-w-7xl mx-auto justify-between items-center px-8">
      {props.children}
    </section>
  );
}
