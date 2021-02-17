import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"

const ListPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Industrial Group HI is a commercial real estate group.`,
      author: `@industrialgrouphawaii"
      keywords={[
        `Commerical Real Estate`,
        `Hawaii Real Estate`,
        `Industrial Real Estate`,
        `Industrial Group Hawaii`,
      ]}
    />
    <HeaderIndex style={{ padding: "3rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <BannerPage titleSmall="List with us" />
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "3rem 0rem" }}>
      <Intro heading="Confident and Proactive" />
      <p style={{ marginBottom: "1rem" }}>
        <span> Culture:</span> <br />
        We don’t want our clients guessing what to do next. We instill the
        confidence our clients need by staying proactive through each step. Our
        team believes in having the integrity to walk away from a transaction if
        it doesn't benefit the client or business. We understand the industries
        we serve and help to bridge the gap between client and property owners.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        <span> Track Record:</span>
        <br />
        We have clients from all around the world who trust in us to
        strategically help them find a place where their business can grow. From
        companies like CarQuest, Amazon, DHX, A&B Properties and many more,
        we've sold over 40 acres of land, managed over 1 million square feet of
        assignments of leasing, and closed over half a billion in real estate.
      </p>
    </Section>
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default ListPage
