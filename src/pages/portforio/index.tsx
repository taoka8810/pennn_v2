import React from "react";
import style from "~/styles/pages/Portforio.module.scss";
import { Layout } from "~/components/Layout";
import { NextPage } from "next";

const Portforio: NextPage = () => {
  return (
    <Layout>
      <div className={style.inner}>
        <h1 className={style.title}>Portforio</h1>
        <p className={style.text}>まだ掲載できるものがないんです(; ;)</p>
      </div>
    </Layout>
  );
};

export default Portforio;
