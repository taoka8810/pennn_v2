"use client";

import React, { useState } from "react";
import style from "~/styles/components/Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <Link href="/">Pennn</Link>
      </div>
      <nav className={style.header__nav}>
        <Link className={style.header__link} href="/notes">
          Notes
        </Link>
        <Link className={style.header__link} href="/works">
          Works
        </Link>
        <Link className={style.header__link} href="/profile">
          Profile
        </Link>
      </nav>
    </header>
  );
};
