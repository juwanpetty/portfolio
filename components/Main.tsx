type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <div className="pl:0 relative flex min-h-dvh flex-col items-center justify-start overflow-auto bg-white md:m-2 md:ml-72 md:min-h-[calc(100dvh-1rem)] md:rounded-2xl md:border md:border-solid md:border-neutral-200">
      <header className="sticky left-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center gap-6 border-b border-solid border-neutral-200 bg-white px-4" />
      <div className="flex w-full max-w-screen-md grow flex-col p-6 px-4">
        <main role="main" className="grow">
          {children}
        </main>
      </div>
    </div>
  );
}