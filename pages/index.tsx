import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

type dataServ = {
  th: string;
  id_subans: number;
};

export default function Home() {
  const [DataPeople, setDataPeople] = useState<dataServ[]>([]);
  useEffect(() => {
    getData();
  }, []);
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
    if (res.data.message === "Success") {
      console.log(res.data.data);
      setDataPeople(res.data.data);
    }
  };
  return (
    <>
      <div className="grid m-5 h-50 bg-[#FBFBFB] drop-shadow-xl rounded-xl  ms:cols-12">
        <div className="grid m-5  rounded-lg justify-items-center text-gray-400 text-center">
          <Image
            src={"/sayhi-sayno.webp"}
            width={"200"}
            height={"30"}
            alt={"ssd"}
          ></Image>
          แบบคัดกรองประสบการณ์การดื่มสุรา <br /> สูบบุหรี่ และใช้สารเสพติดหรือ
          ASSIST
        </div>
        <div className="m-5 rounded-lg flex justify-center  ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          สถาบัน
                        </th>
                        <th scope="col" className="px-6 py-4">
                          จำนวน
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {DataPeople.map((data, key) => (
                        <tr
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                          key={key}
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.th}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.id_subans}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid m-5  rounded-lg justify-items-center text-gray-400">
          <Image
            src={"/logo_universities.webp"}
            width={"500"}
            height={"500"}
            alt={"ssd"}
          ></Image>
        </div>
      </div>
    </>
  );
}
