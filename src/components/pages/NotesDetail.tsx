"use client";

import { NoteModel } from "~/app/notes/page";
import style from "~/styles/pages/NotesDetail.module.scss";
import "node_modules/highlight.js/styles/atom-one-dark.css";
import Image from "next/image";
import { changeDateToString } from "~/utils/date";
import { Header } from "../elements/Header";
import { Footer } from "../elements/Footer";

export type NotesDetailProps = {
  note: NoteModel;
};

export const NotesDetailPage: React.FC<NotesDetailProps> = ({ note }) => {
  const publishedDate = changeDateToString(note.publishedDate);
  const modifiedDate = changeDateToString(note.modifiedDate);

  return (
    <>
      <Header />
      <main className={style.post}>
        <section className={style.heading}>
          {/* アイコン */}
          <div className={style.heading_icon}>
            <Image
              src={note.thumbnail.guid.rendered}
              alt="post icon"
              width={70}
              height={70}
            />
          </div>

          {/* タイトル */}
          <h1 className={style.title}>{note.title}</h1>

          <div className={style.tag_wrapper}>
            {/* カテゴリー */}
            <span
              className={style.category_tag}
              data-category={note.category.slug}
            >
              {note.category.name}
            </span>

            {/* タグ */}
            {note.tags.map((tag) => (
              <span className={style.keyword_tag}>{tag.name}</span>
            ))}
          </div>

          {/* 公開日 */}
          <p className={style.date}>公開日: {publishedDate}</p>

          {/* 更新日(公開日と同じなら非表示) */}
          {publishedDate !== modifiedDate && (
            <p className={style.date}>更新日: {modifiedDate}</p>
          )}
        </section>

        {/* 本文 */}
        <section
          id="content"
          className={style.body}
          dangerouslySetInnerHTML={{ __html: note.body }}
        ></section>
      </main>
      <Footer />
    </>
  );
};
