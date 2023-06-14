"use client";

import { shrikhand } from "~/utils/fonts";
import { Layout } from "../elements/Layout";
import style from "~/styles/pages/Profile.module.scss";

export const ProfilePage = () => {
  return (
    <Layout>
      <div className={style.inner}>
        <h1 className={style.title} style={shrikhand.style}>
          About Me
        </h1>
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
