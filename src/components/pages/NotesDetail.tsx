"use client";

import { Layout } from "../elements/Layout";
import style from "~/styles/pages/NotesDetail.module.scss";

export const NotesDetailPage = () => {
  return (
    <Layout>
      <main className={style.post}>
        <section className={style.heading}>
          <div className={style.heading_icon}>
            <img src="/icons/post-icon.svg" alt="post icon" />
          </div>
          <h1 className={style.title}>記事タイトル</h1>
          <div className={style.tag_wrapper}>
            <span className={style.category_tag} data-category="web">
              Web
            </span>
            <span className={style.keyword_tag}>HTML</span>
            <span className={style.keyword_tag}>CSS</span>
            <span className={style.keyword_tag}>JavaScript</span>
          </div>
          <div className={style.date}>公開日: 2023/05/28</div>
          <div className={style.date}>更新日: 2023/05/28</div>
        </section>
        <section className={style.body} id="content">
          <h2>見出しです</h2>
          <p>
            本文です本文です本文です本文です本文です本文です本文です本文です本文です
          </p>
        </section>
      </main>
    </Layout>
  );
};
