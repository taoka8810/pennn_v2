"use clinet";

import style from "~/styles/pages/Home.module.scss";
import u from "~/styles/utils/display.module.scss";
import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <section className={style.title__wrapper}>
        <h1 className={style.title}>Pennn</h1>
      </section>

      <section className={style.tiles}>
        {/* Notes Tile */}
        <Link
          className={`${style.tile_notes} ${style.tile_animation}`}
          href="/notes"
        >
          <span>Notes</span>
        </Link>

        {/* Works Tile */}
        <Link
          className={`${style.tile_works} ${style.tile_animation}`}
          href="/works"
        >
          <span>Works</span>
        </Link>

        {/* About Tile */}
        <Link
          className={`${style.tile_about} ${style.tile_animation} ${u.only_pc}`}
          href="/profile"
        >
          <span>About</span>
          <span>Me</span>
        </Link>

        <div className={style.snsTiles}>
          {/* X Tile */}
          <Link
            className={`${style.tile_twitter} ${style.tile_animation}`}
            href="https://twitter.com/yasai_tarinai"
          >
            <img src="/icons/x-twitter-white.svg" alt="twitter icon" />
          </Link>

          {/* GitHub Tile */}
          <Link
            className={`${style.tile_github} ${style.tile_animation}`}
            href=""
          >
            <img src="/icons/github-gray.svg" alt="github icon" />
          </Link>
        </div>
      </section>
    </>
  );
};
