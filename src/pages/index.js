import Head from "next/head";
import { AddItemForm, DateView, Navbar, TodoView } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>todometer</title>
        <link rel="icon" href="/todometer.png" />
      </Head>
      <Navbar />
      <main className="w-full sm:px-80">
        <DateView />
        <AddItemForm />
        <TodoView />
      </main>
    </>
  );
}
