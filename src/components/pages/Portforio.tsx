"use client";

import { Layout } from "../elements/Layout";
import style from "~/styles/pages/Portforio.module.scss";
import { shrikhand } from "~/utils/fonts";

export const PortforioPage = () => {
  return (
    <Layout>
      <div className={style.inner} style={shrikhand.style}>
        <h1 className={style.title}>Portforio</h1>
        <p className={style.text}>まだ掲載できるものがないんです(; ;)</p>
      </div>
    </Layout>
  );
};
