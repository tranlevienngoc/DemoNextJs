import { useEffect } from "react";

export const Button = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("no render");
    };
  });
  return <h1>buttom componet</h1>;
};
