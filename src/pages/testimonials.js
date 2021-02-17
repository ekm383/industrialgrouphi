import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
// import Intro from "../components/Intro"
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const TestimonialsPage = () => (
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
        <BannerPage titleSmall="testimonials" />
      </Section>
    </HeaderIndex>
    <Section style={{ width: "80vw", padding: "3rem 0rem" }}>
      {/* <div style={{ marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <FaQuoteLeft />
          &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source.&nbsp;
          <FaQuoteRight />
        </p>
        <Intro heading="John Doe" subheading="Company Name" />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <FaQuoteLeft />
          &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source.&nbsp;
          <FaQuoteRight />
        </p>
        <Intro heading="John Doe" subheading="Company Name" />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          <FaQuoteLeft />
          &nbsp; Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source.&nbsp;
          <FaQuoteRight />
        </p>
        <Intro heading="John Doe" subheading="Company Name" />
      </div> */}
    </Section>
  </Layout>
)

export default TestimonialsPage
