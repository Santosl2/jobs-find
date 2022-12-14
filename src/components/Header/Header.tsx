export function Header(): JSX.Element {
  return (
    <header className="p-7" data-testid="headerTest">
      <div className="w-full h-40 bg-header-bg bg-cover bg-center rounded-md flex items-center justify-center">
        <h1 className="font-bold text-3xl text-white md:text-7xl">
          JOBS <span className="font-light">Find</span>
        </h1>
      </div>
    </header>
  );
}
