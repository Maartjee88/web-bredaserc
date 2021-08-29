import React from "react"
import Layout from "../components/Layout";
import HeaderHome from "../components/HeaderHome";
import Announcements from "../components/Announcements";

export default function Home() {
  return (
    <Layout>
      <HeaderHome />
      <Announcements />
    </Layout>
  )
}
