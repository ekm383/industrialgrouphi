import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/listings",
        text: "listings",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      // {
      //   id: 3,
      //   path: "/success",
      //   text: "our success",
      // },
      {
        id: 4,
        path: "/team",
        text: "team",
      },
      {
        id: 5,
        path: "/testimonials",
        text: "testimonials",
      },
      // {
      //   id: 6,
      //   path: "/list",
      //   text: "list with us",
      // },
      // {
      //   id: 7,
      //   path: "/careers",
      //   text: "careers",
      // },
      {
        id: 8,
        path: "/contact",
        text: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
    font-weight: bold;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--mainColor);
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: var(--mainColor);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  height: ${props => (props.open ? "375px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`

export default NavBarLinks
