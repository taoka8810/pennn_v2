"use client";

import { useState } from "react";
import style from "~/styles/pages/Notes.module.scss";
import { ArticleCard } from "../elements/ArticleCard";
import { changeDateToString } from "~/utils/date";
import { WP_Category, WP_Media, WP_Tag } from "~/utils/wp-type";
import { NoteModel } from "~/app/notes/page";
import { Header } from "../elements/Header";
import { Footer } from "../elements/Footer";

type NotesProps = {
  notes: NoteModel[];
  categories: WP_Category[];
};

export const NotesPage: React.FC<NotesProps> = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
      <Header />
      <div className={style.inner}>
        <h1 className={style.title}>Notes</h1>
        {/* カテゴリーバー */}
        <form className={style.category_button_list}>
          {/* ALL */}
          <div className={style.category_button_wrapper}>
            <input
              className={style.radio_button}
              type="radio"
              id="category-all"
              name="button-group"
              onChange={() => setSelectedCategory("all")}
              checked={selectedCategory === "all"}
            />
            <label
              className={style.category_button}
              htmlFor="category-all"
              data-category="all"
              tabIndex={-1}
            >
              <img src="/icons/earth-white.svg" alt="earth icon" />
            </label>
            <p className={style.category_name}>ALL</p>
          </div>

          {/* Web */}
          <div className={style.category_button_wrapper}>
            <input
              className={style.radio_button}
              type="radio"
              id="category-web"
              name="button-group"
              onChange={() => setSelectedCategory("web")}
              checked={selectedCategory === "web"}
            />
            <label
              className={style.category_button}
              htmlFor="category-web"
              data-category="web"
              tabIndex={-1}
            >
              <img src="/icons/code-white.svg" alt="code icon" />
            </label>
            <p className={style.category_name}>Web</p>
          </div>

          {/* Hobby */}
          <div className={style.category_button_wrapper}>
            <input
              className={style.radio_button}
              type="radio"
              id="category-hobby"
              name="button-group"
              onChange={() => setSelectedCategory("hobby")}
              checked={selectedCategory === "hobby"}
            />
            <label
              className={style.category_button}
              htmlFor="category-hobby"
              data-category="hobby"
              tabIndex={-1}
            >
              <img src="/icons/pen-white.svg" alt="pen icon" />
            </label>
            <p className={style.category_name}>Hobby</p>
          </div>

          {/* Other */}
          <div className={style.category_button_wrapper}>
            <input
              className={style.radio_button}
              type="radio"
              id="category-other"
              name="button-group"
              onChange={() => setSelectedCategory("other")}
              checked={selectedCategory === "other"}
            />
            <label
              className={style.category_button}
              htmlFor="category-other"
              data-category="other"
              tabIndex={-1}
            >
              <img src="/icons/astronaut-white.svg" alt="astronaut icon" />
            </label>
            <p className={style.category_name}>Other</p>
          </div>
        </form>

        {/* 記事セクション */}
        <section className={style.article_list}>
          {props.notes
            // 選択されたカテゴリーに応じてフィルタリング
            .filter((post) =>
              selectedCategory === "all"
                ? true
                : post.category.slug === selectedCategory
            )
            .map((post) => (
              <ArticleCard
                key={post.id}
                id={post.id}
                title={post.title}
                category={post.category}
                icon={post.thumbnail}
                date={changeDateToString(post.publishedDate)}
              />
            ))}
        </section>
      </div>
      <Footer />
    </>
  );
};
