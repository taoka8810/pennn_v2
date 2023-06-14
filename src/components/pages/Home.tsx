"use clinet";

import style from "~/styles/pages/Home.module.scss";
import u from "~/styles/utils/display.module.scss";
import { Layout } from "../elements/Layout";
import { pacifico, shrikhand } from "~/utils/fonts";

export const HomePage = () => {
  return (
    <Layout>
      <section className={style.title_wrapper}>
        <h1 className={style.title} style={pacifico.style}>
          Pennn
        </h1>
      </section>
      <section className={style.tiles}>
        <div className={style.tiles_top}>
          {/* Notes Tile */}
          <a
            className={`${style.tile_notes} ${style.tile_animation}`}
            href="/notes"
          >
            <span style={shrikhand.style}>Notes</span>
          </a>
          {/* Portforio Tile */}
          <a
            className={`${style.tile_portforio} ${style.tile_animation}`}
            href="/portforio"
          >
            <span style={shrikhand.style}>Portforio</span>
          </a>
        </div>
        {/* About Me Tile (only SP) */}
        <a
          className={`${style.tile_about} ${style.tile_animation} ${u.only_sp}`}
          href="/profile"
        >
          <span style={shrikhand.style}>About</span>
          <span style={shrikhand.style}>Me</span>
        </a>
        <div className={style.tiles_bottom}>
          {/* About Tile (only PC) */}
          <a
            className={`${style.tile_about} ${style.tile_animation} ${u.only_pc}`}
            href="/profile"
          >
            <span style={shrikhand.style}>About</span>
            <span style={shrikhand.style}>Me</span>
          </a>
          {/* Twitter Tile */}
          <a
            className={`${style.tile_twitter} ${style.tile_animation}`}
            href="https://twitter.com/yasai_tarinai"
          >
            <img src="/icons/twitter-white.svg" alt="twitter icon" />
          </a>
          {/* GitHub Tile */}
          <a className={`${style.tile_github} ${style.tile_animation}`} href="">
            <img src="/icons/github-gray.svg" alt="github icon" />
          </a>
        </div>
      </section>
    </Layout>
  );
};
