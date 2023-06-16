"use client";

import React from "react";
import { Footer } from "~/components/elements/Footer";
import { Header } from "~/components/elements/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
