"use client";

import Link from "next/link";
import React from "react";
import style from "~/styles/components/ArticleCard.module.scss";
import { WP_Category, WP_Media } from "~/utils/wp-type";

type ArticleCardProps = {
  id: number;
  title: string;
  category: WP_Category;
  icon: WP_Media;
  date: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  return (
    <article className={style.wrapper} data-type="archive">
      <Link href={`/notes/${props.id}`}>
        <p className={style.category} data-category={props.category.slug}>
          {props.category.name}
        </p>
        <div className={style.icon}>
          <img src={props.icon.guid.rendered} alt="" />
        </div>
        <div className={style.info}>
          <h3 className={style.title}>{props.title}</h3>
          <time className={style.date}>{props.date}</time>
        </div>
      </Link>
    </article>
  );
};
