import Head from "next/head";
import { AddItemForm, DateView, Meter, Navbar, TodoView } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>todometer</title>
        <link rel="icon" href="/todometer.png" />
      </Head>
      <Navbar />
      <main className="w-11/12 sm:w-8/12 mx-auto sm:px-80">
        <DateView />
        <Meter />
        <AddItemForm />
        <TodoView />
      </main>
    </>
  );
}
