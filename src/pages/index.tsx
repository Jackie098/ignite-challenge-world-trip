import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { api } from "@/services/api";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function getContinents() {
    const { data } = await api.get("continents");

    console.log("data", data);
  }

  getContinents();

  return <>OI</>;
}
