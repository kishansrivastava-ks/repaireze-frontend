import styled from "styled-components";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaList,
  //   FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa"; // Example icons, replace as needed
import { Link } from "react-router-dom";

// UPPER PART
const NavContainer = styled.div`
  background-color: #dcd0ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-between;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  font-weight: bold;

  &:not(:last-child) {
    border-right: 1px solid #aaa;
    padding-right: 2rem;
  }

  svg {
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    margin-right: 1rem;
    padding-right: 1rem;
  }
`;

const NavButton = styled.button`
  width: 20%;
  height: 100%;
  background-color: #7d5fff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #5a3dbf;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

// MIDDLE PART
const NavbarBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff; /* Adjust the color to match the theme */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333; /* Adjust the color to match the theme */
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TopItems = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const TopItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

// LOWER PART
const NavLinksStrip = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: #f0f0f0; /* Adjust the color to match the theme */

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLinkItem = styled.a`
  padding: 0.5rem 1rem;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #7d5fff;
    border-bottom: 2px solid #7d5fff;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #7d5fff;
      bottom: -2px;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

function Navbar() {
  return (
    <>
      <NavContainer>
        <NavItems>
          <NavItem>
            <FaPhoneAlt />
            <Link to="/delivery-policy">Guaranteed Next Day Delivery</Link>
          </NavItem>
          <NavItem>
            <FaEnvelope />
            <Link to="/financing">12 Months Special Financing Available</Link>
          </NavItem>
          <NavItem>
            <FaMapMarkerAlt />
            <Link to="/outlet-savings">Save up to 60% on Outlet</Link>
          </NavItem>
        </NavItems>
        <NavButton>Contact Us</NavButton>
      </NavContainer>
      <NavbarBottom>
        <Logo>MyCompany</Logo>
        <RightSection>
          <TopItems>
            <TopItem>
              <FaUser />
              <span>Account</span>
            </TopItem>
            <TopItem>
              <FaList />
              <span>List</span>
            </TopItem>
            <TopItem>
              <FaPhoneAlt />
              <span>Contact</span>
            </TopItem>
            <TopItems>
              <FaShoppingCart />
              <span>Cart</span>
            </TopItems>
          </TopItems>
          <SearchBar type="text" placeholder="Search..." />
        </RightSection>
      </NavbarBottom>
      <NavLinksStrip>
        <NavLinkItem href="#home">Refrigeration</NavLinkItem>
        <NavLinkItem href="#about">Dishwashers</NavLinkItem>
        <NavLinkItem href="#services">Laundry</NavLinkItem>
        <NavLinkItem href="#products">Cooking</NavLinkItem>
        <NavLinkItem href="#blog">Range Hoods</NavLinkItem>
        <NavLinkItem href="#careers">Outdoor Kitchen</NavLinkItem>
        <NavLinkItem href="#contact">Sinks & Faucets</NavLinkItem>
        <NavLinkItem href="#faq">Packages</NavLinkItem>
        <NavLinkItem href="#testimonials">Outlet</NavLinkItem>
        <NavLinkItem href="#portfolio">Builders</NavLinkItem>
        <NavLinkItem href="#news">Learning Center</NavLinkItem>
        <NavLinkItem href="#support">Rebate Center</NavLinkItem>
      </NavLinksStrip>
    </>
  );
}

export default Navbar;
