import Head from "next/head";
import { AddItemForm, Navbar, TodoView } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>todometer</title>
        <link rel="icon" href="/todometer.png" />
      </Head>
      <Navbar />
      <main className="w-full sm:px-80">
        <AddItemForm />
        <TodoView />
      </main>
    </>
  );
}
