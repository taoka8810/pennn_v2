"use client";

import React, { useState } from "react";
import style from "~/styles/components/Header.module.scss";
import { usePathname } from "next/navigation";
import { shrikhand } from "~/utils/fonts";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className={style.header}>
      {pathname === "/" ? (
        // トップページならロケットアイコン
        <p></p>
      ) : (
        // トップページ以外ならハンバーガーメニュー
        <>
          <div
            className={style.hamburger_icon}
            data-is-open={`${isOpen}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={style.bar}></span>
            <span className={style.bar}></span>
            <span className={style.bar}></span>
          </div>
          {/* 背景 */}
          <div className={style.overlay} data-is-open={`${isOpen}`}></div>
          {/* 直線 */}
          <div className={style.line} data-is-open={`${isOpen}`}></div>
          {/* 三角形 */}
          <div className={style.triangle_area} data-is-open={`${isOpen}`}></div>
          {/* 閉じるボタン */}
          <div
            className={style.close_button}
            data-is-open={`${isOpen}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={style.cross_bar}></span>
            <span className={style.cross_bar}></span>
          </div>
          {/* ナビゲーション */}
          <nav className={style.nav} data-is-open={`${isOpen}`}>
            <a className={style.nav_item} href="/" data-is-open={`${isOpen}`}>
              <span className={style.nav_text_en} style={shrikhand.style}>
                Top
              </span>
              <span className={style.nav_text_ja}>トップページ</span>
            </a>
            <a
              className={style.nav_item}
              href="/notes"
              data-is-open={`${isOpen}`}
            >
              <span className={style.nav_text_en} style={shrikhand.style}>
                Notes
              </span>
              <span className={style.nav_text_ja}>投稿一覧ページ</span>
            </a>
            <a
              className={style.nav_item}
              href="/portforio"
              data-is-open={`${isOpen}`}
            >
              <span className={style.nav_text_en} style={shrikhand.style}>
                Portforio
              </span>
              <span className={style.nav_text_ja}>制作物一覧ページ</span>
            </a>
            <div className={style.nav_sns} data-is-open={`${isOpen}`}>
              <a className={style.nav_twitter} href="">
                <img src="/icons/x-twitter-black.svg" alt="twitter icon" />
              </a>
              <a className={style.nav_github} href="">
                <img src="/icons/github-black.svg" alt="github icon" />
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};
