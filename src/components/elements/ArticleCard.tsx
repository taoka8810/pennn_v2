"use client";

import Link from "next/link";
import React from "react";
import style from "~/styles/components/ArticleCard.module.scss";
import { changeCategoryLabel } from "~/utils/category";

type ArticleCardProps = {
  id: number;
  title: string;
  category: string;
  date: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const label = changeCategoryLabel(props.category);
  return (
    <article className={style.wrapper} data-type="archive">
      <Link href={`/notes/${props.id}`}>
        <p className={style.category} data-category={props.category}>
          {label}
        </p>
        <div className={style.icon}>
          <img src="/icons/sample-icon.svg" alt="" />
        </div>
        <div className={style.info}>
          <h3 className={style.title}>{props.title}</h3>
          <time className={style.date}>{props.date}</time>
        </div>
      </Link>
    </article>
  );
};
