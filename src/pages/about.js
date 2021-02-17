import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"
import ContactForm from "../components/ContactForm"

const AboutPage = () => (
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
        <BannerPage titleSmall="about us" />
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "3rem 0rem" }}>
      <Intro heading="Our Advantage" subheading="Industrial Group HI" />
      <p style={{ marginBottom: "1rem" }}>
        Industrial Group HI services Hawaii's biggest industries: construction,
        distribution, and manufacturing. We have 17 years of experience helping
        businesses and business owners find the right property for their needs
        across the Island. We assist you through the whole process making sure
        we are proactive through every step of sales, leasing, landlord and
        tenant representation, building, environmental due diligence, title
        issues, surveys, and more.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        With honesty, integrity, and service at the forefront of our company’s
        culture, we will never lose sight of your needs, short and long term.
        The market we serve on a daily basis (but not limited to) is Kaka’ako,
        Kalihi, Kalihi-Kai, Kalihi-Mauka, Kapalama, Sand Island, Halawa,
        Bougainville - Salt Lake, Aiea, Pearl City Industrial Park, Waipahu
        Industrial, Milltown Business Park, Waipio Gentry Business Park, James
        Campbell Industrial Park, Kapolei Business Park, Kinai Industrial,
        Harborside Industrial, and Kunia.
      </p>
    </Section>
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default AboutPage
