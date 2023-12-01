import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { NextComponentType, NextPageContext } from "next";

const roboto = Roboto({
  weight: ["400", "300", "500", "700"],
  subsets: ["latin"],
});

type NextPageWithLayout<T = {}, TP = T> = NextPage<T, TP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <main className={roboto.className}>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </main>
  );
}
