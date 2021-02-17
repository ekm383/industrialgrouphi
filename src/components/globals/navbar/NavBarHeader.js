import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import logo from "../../../images/industrial-group-hi-logo-1.png"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="logo" width="120" />
      </Link>
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.5rem;
    color: var(--mainColor);
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`

export default NavBarHeader
