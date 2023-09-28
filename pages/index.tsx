import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

type dataServ = {};

export default function Home() {
  const [DataPeople, setDataPeople] = useState<dataServ>();
  const getData = async () => {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_CMU_SERVICE + `sayhisayno/getUserService`,
      {
        headers: {
          Accept: "application/json",
          token: process.env.NEXT_PUBLIC_TOKEN,
          // Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );
    if (res.data.status === true) {
      setDataPeople(res.data.data);
    }
  };
  return (
    <Fragment>
      <div className="grid m-5 h-50 bg-[#FBFBFB] drop-shadow-xl rounded-xl  ms:cols-12">
        <div className="grid m-5  rounded-lg justify-items-center text-gray-400">
          <Image
            src={"/sayhi-sayno.webp"}
            width={"200"}
            height={"30"}
            alt={"ssd"}
          ></Image>
          แบบคัดกรองประสบการณ์การดื่มสุรา <br />
          สูบบุหรี่ และใช้สารเสพติดหรือ ASSIST
        </div>
        <div className="grid m-5  rounded-lg justify-items-center "></div>
        <div className="grid m-5  rounded-lg justify-items-center text-gray-400">
          <Image
            src={"/logo_universities.webp"}
            width={"500"}
            height={"500"}
            alt={"ssd"}
          ></Image>
        </div>
      </div>
    </Fragment>
  );
}
