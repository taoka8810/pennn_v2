import React from "react";
import style from "~/styles/pages/About.module.scss";
import { Layout } from "~/components/Layout";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <Layout>
      <div className={style.inner}>
        <h1 className={style.title}>About Me</h1>
        <div className={style.contents}>
          <section className={style.me}>
            <div className={style.icon}>
              <img src="/images/my-icon.jpg" alt="my icon" />
            </div>
            <p className={style.introduction}>
              大学生やりながら都内Webベンチャーでエンジニアやってる21歳。エンジニア歴2年。WordPress,
              Next.js,
              Firebaseあたりをよく使います。無から有を生み出すデザインセンスが欲しい。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
