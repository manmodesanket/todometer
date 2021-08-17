export default function Navbar() {
  return (
    <header className="w-full px-4 sm:px-80">
      <nav className="flex border-b-2 pb-2">
        <div className="flex justify-items-center items-center ">
          <figure className="w-7 h-7">
            <img src="/todometer.png" alt="todometer" />
          </figure>
          <h1 className="font-bold text-4xl ml-2">todometer</h1>
        </div>
      </nav>
    </header>
  );
}

//export default Header;
