import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";

interface HomeProps {
  posts: iPosts[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      This is the index page
    </div>
  );
};

export default Home;
