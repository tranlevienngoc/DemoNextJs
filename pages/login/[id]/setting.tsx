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
  const refDemo = useRef(null);
  const [cou, setCou] = useState(0);
  const [cou1, setCou1] = useState(0);
  const [cou12, setCou12] = useState(0);
  console.log("1");
  useEffect(() => {
    console.log("3");
  });
  const coun = () => {
    console.log("4");
    setCou(cou + 1);
  };
  return (
    <>
      <div className="button-setting">page setting</div>
      <div>id of url:{router.query.id} </div>
      {console.log("2")}
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
