import React from "react"
import Layout from "../components/Layout";
import HeaderHome from "../components/HeaderHome";
import Announcements from "../components/Announcements";
import Sponsors from "../components/Sponsors";
import TeamCards from "../components/TeamCards";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <Layout>
      <HeaderHome />
      <Announcements />
      <Sponsors />
      <TeamCards />
      <SignUp />
    </Layout>
  )
}
