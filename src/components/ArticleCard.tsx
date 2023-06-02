import React from "react";
import style from "~/styles/components/ArticleCard.module.scss";

type ArticleCardProps = {
  title: string;
  category: "web" | "hobby" | "other";
  date: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  return (
    <article className={style.wrapper} data-type="archive">
      <a href="/">
        <p className={style.category} data-category={props.category}>
          {props.category}
        </p>
        <div className={style.icon}>
          <img src="/icons/sample-icon.svg" alt="" />
        </div>
        <div className={style.info}>
          <h3 className={style.title}>{props.title}</h3>
          <time className={style.date}>{props.date}</time>
        </div>
      </a>
    </article>
  );
};
