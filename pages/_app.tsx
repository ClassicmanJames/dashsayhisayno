import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { Fragment } from "react";
import MainLayouts from "@/components/layouts/MainLayouts";
export default function App(
  { Component, pageProps }: AppProps,
  { children }: any
) {
  return (
    <Fragment>
      <MainLayouts>
        {children}
        <Component {...pageProps} />
      </MainLayouts>
    </Fragment>
  );
}
