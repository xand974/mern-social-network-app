import Contact from "components/Contact";
import Feed from "components/Feed";
import React from "react";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Feed />
      <Contact />
    </Layout>
  );
}
