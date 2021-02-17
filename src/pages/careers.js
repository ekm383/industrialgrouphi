import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Intro from "../components/Intro"

const CareersPage = () => (
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
        <BannerPage titleSmall="Careers" />
      </Section>
    </HeaderIndex>
    <Section style={{ paddingTop: "3rem" }}>
      <Intro heading="Join the team" />
      <p style={{ marginBottom: "1rem" }}>
        Industrial Group HI is always looking to add dedicated and talented
        individuals and brokers to our roster. A brokerage company is really
        only the sum of its brokers, and our brokers are some of the best and
        brightest. Interested in joining the IGH Team?
      </p>
    </Section>
    <Section style={{ paddingBottom: "1rem" }}>
      <p>
        <span>Current Career Openings:</span>
        <ul style={{ marginLeft: "3rem" }}>
          <li>Associate Advisors</li>
          <li>Real Estate Interns</li>
          <li>Marketing Interns</li>
        </ul>
      </p>
    </Section>
    <Section style={{ paddingBottom: "1rem" }}>
      <p>
        <span>ADVISOR APPLICANT QUALITIES SOUGHT:</span>
        <ul style={{ marginLeft: "3rem" }}>
          <li>Ability to communicate effectively and efficiently.</li>
          <li>
            Bachelor’s Degree or Real Estate Industry Equivalent Experience.
          </li>
          <li>1 + years of experience in sales preferred, but not required.</li>
          <li>
            Proficient in Microsoft Office – plus ability to learn new systems
          </li>
          <li>
            Management of the complete sales cycle, including telephone
            prospecting, prospect nurturing and assist in sales closing
          </li>
          <li>Professional work ethic and integrity</li>
          <li>Competitive nature, Go – Getter Personality</li>
          <li>Ability to work well in a team environment</li>
          <li>Good organizational Skills</li>
          <li>Excellent written and verbal communication skills</li>
          <li>
            Must be confident and comfortable with cold calling, and the cold
            calling process.
          </li>
          <li>
            Maintain regular contact with a large database of clients and
            prospects
          </li>
          <li>Meet and exceed assigned quotas</li>
          <li>
            Strong understanding of effective prospecting and proven ability to
            new penetrate accounts
          </li>
        </ul>
      </p>
    </Section>
    <Section style={{ padding: "1rem 0rem" }}>
      <p>
        <span>AVERAGE ADVISORS INCOME:</span>
        <ul style={{ marginLeft: "3rem" }}>
          <li>Months 1-18: $50k-$150K</li>
          <li>Months 18-36: $150K +</li>
          <li>Months 36+: $250K +</li>
        </ul>
      </p>
    </Section>
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default CareersPage
