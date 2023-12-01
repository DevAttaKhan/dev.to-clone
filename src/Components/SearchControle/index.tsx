import { IconSearch } from "@/Assets/icons";
import React from "react";
import styles from "./styles.module.css";
export const SearchControle = () => {
  return (
    <div
      className={`${styles.searchcontrole} flex justify-between items-center`}
    >
      <input
        type="text"
        className=" bg-transparent border border-gray-200 rounded p-[6px] lg:w-[420px] "
        placeholder="Search"
      />
      <IconSearch />
    </div>
  );
};
