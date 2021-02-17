import React from "react"
import styled from "styled-components"
import Intro from "../components/Intro"
import jay from "../images/Jay-Elicker-Senior-Vice-President.jpg"
import sean from "../images/Sean-Do-Vice-President.jpg"

const agent = () => {
  return (
    <AgentWrapper>
      <div className="container">
        <div className="box">
          <img src={jay} alt="jay" width="100" />
        </div>
        <div className="box">
          <Intro heading="Jay Elicker" subheading="Senior Vice President" />
          <p>
            Jay has established himself as one of Oahu’s leading commercial real
            estate brokers developing relationships with local and national
            companies including A&B Properties, Inc., Irongate Partners, Jupiter
            Holdings and Fergus & Company. Jay has been involved with over 1
            million square feet of leasing assignments and has competed over
            $300 million in sales transactions.
          </p>
          <p>
            Jay continues to foster relationships in the commercial real estate
            arena and has consistently been a top performer for most of his
            career. Jay specializes in the industrial sector with a focus on
            sales of industrial buildings, vacant land and project leasing
            representing landlords in Hawaii. Jay is a licensed real estate
            broker and is a member of the Society of Industrial & Office
            Realtors (SIOR), a Certified Commercial Investment Member (CCIM) and
            an active member of the National Association of Realtors (NAR).
          </p>
          <p>
            Jay is an avid surfer and enjoys spending time in the water while he
            also makes time to train at the gym. Most of all Jay enjoys being a
            father to his two kids, Dawn (13 years old) and Evan (10 years old).
            Both Dawn and Evan are students at Punahou and play club soccer.
            Weekends are enjoyed at the Waipio Soccer Complex supporting their
            games.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <img src={sean} alt="jay" width="100" />
        </div>
        <div className="box">
          <Intro heading="Sean Do" subheading="Vice President" />
          <p>
            As a Senior Associate at Commercial Asset Advisor, Sean specializes
            in industrial leasing and investment sales. His professional
            experience includes representation of landlords, tenants, and
            investors from locally owned small businesses to multinational
            corporations.
          </p>
          <p>
            Sean was raised in Hawaii and graduated from the University of
            Hawaii, Shidler College of Business with a degree in Finance. He
            holds the Certified Commercial Investment Member (CCIM) designation
            and is a licensed Hawaii Real Estate Salesperson.
          </p>
        </div>
      </div>
    </AgentWrapper>
  )
}

const AgentWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
  }
  img {
    border-radius: 5px;
  }
  .box {
    margin: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
`

export default agent
