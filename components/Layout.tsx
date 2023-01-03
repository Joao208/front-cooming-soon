import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div className="relative min-h-screen w-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>Comforta</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Novidades em breve..." />
      <meta property="og:title" content="Comforta" />
      <meta property="og:description" content="Novidades em breve..." />
      <meta property="og:url" content="https://comforta.com.br" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
