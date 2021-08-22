import Head from "next/head";
import { AddItemForm, DateView, Meter, Navbar, TodoView } from "../components";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { darkMode } = useAppContext();
  return (
    <div
      className={
        darkMode
          ? `${"dark transition-all duration-1000"}`
          : "transition-all duration-1000"
      }
    >
      <div className="w-full min-h-screen dark:bg-dark dark:text-white">
        <Head>
          <title>todometer</title>
          <link rel="icon" href="/todometer.png" />
        </Head>

        <main className="w-11/12 sm:w-9/12 min-h-screen mx-auto sm:px-80">
          <Navbar />
          <DateView />
          <Meter />
          <AddItemForm />
          <TodoView />
        </main>
      </div>
    </div>
  );
}
