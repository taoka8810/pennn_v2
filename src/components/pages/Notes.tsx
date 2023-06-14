"use client";

import { useState } from "react";
import style from "~/styles/pages/Notes.module.scss";
import { Layout } from "../elements/Layout";
import { ArticleCard } from "../elements/ArticleCard";
import { shrikhand } from "~/utils/fonts";
import { api } from "~/utils/api";
import { changeDateToString } from "~/utils/date";

export const NotesPage = () => {
  const posts = api.note.index.useQuery().data;
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <Layout>
      <div className={style.inner}>
        <h1 className={style.title} style={shrikhand.style}>
          Notes
        </h1>
        <form className={style.category_button_list} id="button-group">
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

        {/* all articles */}
        <section
          id="contents-all"
          className={style.article_list}
          data-is-show={selectedCategory === "all" ? "true" : "false"}
        >
          {posts?.map((post) => (
            <ArticleCard
              key={post.id}
              title={post.title}
              category={post.category.name}
              date={changeDateToString(post.createdAt)}
            />
          ))}
        </section>

        {/* Web articles */}
        <section
          id="contents-web"
          className={style.article_list}
          data-is-show={selectedCategory === "web" ? "true" : "false"}
        >
          {[...Array(10)].map((_, index) => (
            <ArticleCard
              key={index}
              title="クリックしたらポヨンポヨンするアニメーションの作り方"
              category="hobby"
              date="2023/12/12"
            />
          ))}
        </section>

        {/* hobby articles */}
        <section
          id="contents-hobby"
          className={style.article_list}
          data-is-show={selectedCategory === "hobby" ? "true" : "false"}
        >
          {[...Array(10)].map((_, index) => (
            <ArticleCard
              key={index}
              title="クリックしたらポヨンポヨンするアニメーションの作り方"
              category="hobby"
              date="2023/12/12"
            />
          ))}
        </section>

        {/* other articles */}
        <section
          id="contents-other"
          className={style.article_list}
          data-is-show={selectedCategory === "other" ? "true" : "false"}
        >
          {[...Array(10)].map((_, index) => (
            <ArticleCard
              key={index}
              title="クリックしたらポヨンポヨンするアニメーションの作り方"
              category="other"
              date="2023/12/12"
            />
          ))}
        </section>
      </div>
    </Layout>
  );
};
