export function HeaderText({text}:{text: string}) {
  return (
    <p className="xl:text-6xl lg:text-4xl md:text-3xl text-xl font-bold px-10">
      {text}
    </p>
  );
}
