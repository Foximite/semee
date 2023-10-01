"use client";
import { Content } from "@/components/home/content";
import { title } from "@/components/primitives";
import React from "react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

export default function Dashboard() {
  return (
    <Provider store={store}>
      <section>
        <div className="text-center">
          <h1 className={title({ color: "yellow" })}>Dashboard</h1>
        </div>
        <Content />
      </section>
    </Provider>
  );
}
