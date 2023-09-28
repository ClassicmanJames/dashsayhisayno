import React, { Fragment } from "react";
import MainNav from "./partials/MainNav";
import MainFooter from "./partials/MainFooter";
import Head from "next/head";
type Props = { children: React.ReactNode };
const MainLayouts = (props: Props) => {
  return (
    <Fragment>
      <Head>
        <title>CMU</title>
      </Head>
      <div className="flex flex-row w-screen max-w-screen min-h-[100dvh] ">
        <div className="flex flex-gorw flex-col min-h-[100dvh] w-[100vw] relative">
          <MainNav />
          <div className={"p-5 flex-grow"}>{props.children}</div>
          <div className="sm:w-[calc(100vw)] w-[100vw]">
            <MainFooter />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MainLayouts;
