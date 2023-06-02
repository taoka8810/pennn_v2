import React from "react";
import style from "~/styles/components/Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <small className={style.attribution}>
        <span>Icon by </span>
        <a href="https://freeicons.io/profile/75801">
          Hilmy Abiyyu Asad
        </a> on <a href="https://freeicozns.io">freeicons.io</a>
      </small>
    </footer>
  );
};
