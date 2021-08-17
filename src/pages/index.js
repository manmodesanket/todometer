import Head from "next/head";
import { Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>todometer</title>
        <link rel="icon" href="/todometer.png" />
      </Head>
      <Navbar />
      <main className="w-full px-80"></main>
    </>
  );
}
