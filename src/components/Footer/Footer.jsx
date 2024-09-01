import styled from "styled-components";

const FooterLinks = styled.footer`
  position: relative;
  background: url("/map.png") no-repeat center center/cover;
  padding: 3rem 2rem;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  &:not(:last-child) {
    border-right: 1px solid white;

    @media (max-width: 768px) {
      border-right: none;
      border-bottom: 1px solid white;
      padding-bottom: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ccc;
        }
      }
    }
  }
`;

const FooterLogosContainer = styled.div`
  padding: 2rem 0;
  text-align: center;
  background-color: #1a1a1a;
  background-color: #fff;

  /* color: white; */
`;

const LogosList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  img {
    width: 100px;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      width: 80px;
    }
  }
`;

const FooterText = styled.p`
  font-size: 2rem;
  margin-bottom: 0rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const LinksList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ccc;
    }

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }
`;

const DisclaimerText = styled.p`
  font-size: 1rem;
  min-width: 80%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

function Footer() {
  return (
    <>
      <FooterLinks>
        <Overlay />
        <FooterContent>
          <FooterColumn>
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="#packages">Kitchen & Laundry Packages</a>
              </li>
              <li>
                <a href="#refrigerators">Refrigerators</a>
              </li>
              <li>
                <a href="#dishwashers">Dishwashers</a>
              </li>
              <li>
                <a href="#laundry">Laundry</a>
              </li>
              <li>
                <a href="#cooking">Cooking</a>
              </li>
              <li>
                <a href="#range-hoods">Range Hoods</a>
              </li>
              <li>
                <a href="#outdoor">Outdoor</a>
              </li>
              <li>
                <a href="#sinks">Sinks & Faucets</a>
              </li>
              <li>
                <a href="#vacuums">Vacuums</a>
              </li>
              <li>
                <a href="#in-stock">In Stock</a>
              </li>
              <li>
                <a href="#brands">Brands</a>
              </li>
              <li>
                <a href="#outlet">Outlet</a>
              </li>
              <li>
                <a href="#rebate-center">Rebate Center</a>
              </li>
              <li>
                <a href="#financing">Financing</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Yale Services</h3>
            <ul>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#delivery">Delivery</a>
              </li>
              <li>
                <a href="#installation">Installation</a>
              </li>
              <li>
                <a href="#track-appointment">Track Appointment</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>General</h3>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#learning-center">Learning Center</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#yale-foundation">Yale Foundation</a>
              </li>
              <li>
                <a href="#yale-rewards">Yale Appliance Rewards</a>
              </li>
              <li>
                <a href="#builders">Builders</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#warranty">Warranty</a>
              </li>
              <li>
                <a href="#price-guarantee">Price Guarantee</a>
              </li>
              <li>
                <a href="#return-policies">Return & Store Policies</a>
              </li>
              <li>
                <a href="#terms-of-use">Terms of Use</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Locations</h3>
            <ul>
              <li>
                <a href="#framingham">Framingham Appliance Showroom</a>
              </li>
              <li>
                <a href="#hanover">Hanover Appliance Showroom</a>
              </li>
              <li>
                <a href="#dorchester">Dorchester Appliance Showroom</a>
              </li>
              <li>
                <a href="#norton">Norton Appliance Showroom & Outlet</a>
              </li>
              <li>
                <a href="#hyannis">Hyannis Appliance Showroom (Coming Soon)</a>
              </li>
              <li>
                <a href="#corporate-office">
                  Corporate Office & Distribution Center
                </a>
              </li>
            </ul>
          </FooterColumn>
        </FooterContent>
      </FooterLinks>

      <FooterLogosContainer>
        <LogosList>
          <img src="/logo.png" alt="Logo 1" />
          <img src="/logo.png" alt="Logo 2" />
          <img src="/logo.png" alt="Logo 3" />
          <img src="/logo.png" alt="Logo 4" />
          <img src="/logo.png" alt="Logo 5" />
          <img src="/logo.png" alt="Logo 6" />
          <img src="/logo.png" alt="Logo 7" />
          <img src="/logo.png" alt="Logo 8" />
        </LogosList>

        <FooterText>YALE APPLIANCE © 2024</FooterText>

        <LinksList>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#ada-accessibility">ADA Accessibility Menu</a>
        </LinksList>

        <DisclaimerText>
          While every effort is made to ensure that the information on this
          website is correct and current, we are not responsible for errors
          and/or omissions. There may be occurrences when information on our
          website or in our catalog may contain typographical errors,
          inaccuracies or omissions that may pertain to product pricing and
          availability. We reserve the right to correct and/or update any
          content on this website without notice (including after you have
          submitted your order).
        </DisclaimerText>
      </FooterLogosContainer>
    </>
  );
}

export default Footer;
