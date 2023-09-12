"use client";

import style from "~/styles/pages/Portforio.module.scss";
import { Header } from "../elements/Header";
import { Footer } from "../elements/Footer";

export const WorksPage = () => {
  return (
    <>
      <Header />
      <div className={style.inner}>
        <h1 className={style.title}>Works</h1>
        <p className={style.text}>まだ掲載できるものがないんです(; ;)</p>
      </div>
      <Footer />
    </>
  );
};
