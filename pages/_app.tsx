import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Oswald } from "@next/font/google";

const font = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Johnny WEHO</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="The home of Johnny WEHO. A perpetual nomad who finally put down roots in West Hollywood."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component className={font.className} {...pageProps} />
    </>
  );
}
