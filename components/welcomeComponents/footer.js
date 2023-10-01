import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="relative mt-24">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5"></div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
      
        </div>
      </Container>
    </div>
  );
}
