import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import Gallery from "../components/Gallery"
import Fifty from "../components/globals/section/Fifty"
import { FaArrowCircleRight } from "react-icons/fa"

const IndexPage = () => (
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
    <HeaderIndex>
      <Section
        style={{ height: "100vh", width: "100vw", alignItems: "center" }}
      >
        <Banner
          title="COMMERCIAL REAL-ESTATE EXPERTS SERVING THE CONSTRUCTION, DISTRIBUTION, & MANUFACTURING INDUSTRIES"
          subtitle="A service driven team with 17 years of experience in Hawaii. Honesty, Integrity, and Service."
        >
          <AniLink fade to="/listings">
            <Button>
              LISTINGS <FaArrowCircleRight />
            </Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>

    <Fifty
      style={{ margin: "4rem auto" }}
      heading="about us"
      subheading="industrial group HI"
      text="Industrial Group HI services Hawaii's biggest industries: construction,
      distribution, and manufacturing. We have 17 years of experience helping
      businesses and business owners find the right property for their needs
      across the Island. We assist you through the whole process making sure
      we are proactive through every step of sales, leasing, landlord and
      tenant representation, building, environmental due diligence, title
      issues, surveys, and more."
    />
    <Gallery />
  </Layout>
)

export default IndexPage
