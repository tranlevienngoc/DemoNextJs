import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import img from "../../../assets/img/a.png";
import { Button } from "../../../component/Button";
// import "../../../styles/setting.module.css";
export default function Setting() {
  const router = useRouter();
  const refDemo = useRef(null); // ref thuong dươc dùng làm biên toàn cục vì nó ko thay đổi
  const [cou, setCou] = useState(0);
  const [cou1, setCou1] = useState(0);
  const [cou12, setCou12] = useState(0);

  //cái nào chạy trc render  là chảy cả 2 trên server and trình duyệt
  //effect chạy re => chạy trên trình duyệt thôi

  if (typeof document !== "undefined") {
    //doan code nay se ko cho no chay tren sẻver
    console.log("10");
  }
  console.log("1"); //doan code nay chay tren server
  //== contruc in class( run one)
  useEffect(() => {
    //
    console.log("3");
  }, []);
  const coun = () => {
    console.log("4");
    setCou(cou + 1);
  };
  return (
    <>
      <div className="button-setting">page setting</div>
      <div>id of url:{router.query.id} </div>
      {
        //doan code nay chay tren server
        console.log("2")
      }
      <Link href="/login/1">
        <a href="#">{cou}</a>
      </Link>
      <Image src={img} />

      <button onClick={coun}>button1</button>
      <input ref={refDemo} type="file" style={{ visibility: "hidden" }} />
      <button
        onClick={() => {
          refDemo.current.click();
        }}
      >
        button2
      </button>
      {cou === 0 && <Button />}
    </>
  );
}
