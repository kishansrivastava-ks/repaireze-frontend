import styled from "styled-components";
import {
  FaGoogle,
  FaTruck,
  FaDollarSign,
  FaTag,
  FaWrench,
  FaTools,
} from "react-icons/fa"; // For Google icon
import MostPopular from "../components/HomePage/MostPopular";
import NextDayDelivery from "../components/HomePage/NextDayDelivery";
import OurBrands from "../components/HomePage/OurBrands";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #f39b9b;
   */
`;

// SECTION 1
const Section1 = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f8f9fa;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LeftColumn = styled.div`
  width: 70%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  background-image: url("/kitchen.jpg");
  background-size: cover;
  background-position: center;
  height: 400px; /* Adjust height as needed */

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const TiltedStrip = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #7d5fff;
  color: white;
  padding: 0.5rem 1rem;
  transform: rotate(-15deg);
  font-weight: bold;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: white;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.h2`
  position: absolute;
  top: 65%;
  left: 20px;
  color: white;
  font-size: 1.25rem;
`;

const Button = styled.button`
  position: absolute;
  top: 75%;
  left: 20px;
  padding: 0.5rem 1.5rem;
  background-color: #7d5fff;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a41db;
  }
`;

const RatingContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const Box = styled.div`
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LinkItem = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:hover {
    color: #7d5fff;
    border-color: #7d5fff;
  }

  & h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
  }

  & p {
    margin: 0;
    font-size: 0.875rem;
    color: #666;
  }

  & span {
    margin-left: auto;
    font-size: 1rem;
  }
`;

// SECTION 2
const Section2 = styled.div`
  background-color: #ffe58f; /* Yellowish background color */
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  transition: background-color 0.4s ease;
  background-color: transparent;

  &:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: #ff9900; /* Orange color for icons */
  margin-right: 1rem;
`;

const TextContainer = styled.div`
  color: #333;

  & h3 {
    margin: 0;
    font-size: 1.25rem; /* Larger font size for the title */
    font-weight: bold;
  }

  & p {
    margin: 0;
    font-size: 1rem; /* Larger font size for the small text */
    color: #666;
  }
`;

// GUIDE CONTAINER
const GuideContainer = styled.div`
  width: 70vw;
  background: linear-gradient(
    to right,
    #1e3a5f,
    #2e5984
  ); /* Dark blue gradient */
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr auto 2fr auto;
  align-items: center;
  border-radius: 8px;
  position: relative;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  margin: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeadingColumn = styled.div`
  color: #fff;

  & h2 {
    margin: 0;
    font-size: 1.5rem; /* Larger font size for heading */
  }

  & hr {
    border: none;
    height: 2px;
    background-color: white;
    width: 80px;
    margin: 0.5rem 0;
  }

  & p {
    margin: 0;
    font-size: 1rem; /* Font size for the text below heading */
    color: #ffd700; /* Golden yellow color for the text */
  }
`;

const ButtonColumn = styled.div`
  display: flex;
  justify-content: center;

  & button {
    background-color: #ffd700;
    color: #333;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem; /* Font size for button text */
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #ffc700; /* Slightly lighter yellow on hover */
    }
  }
`;

const TextColumn = styled.div`
  color: #fff;
  font-size: 1rem; /* Font size for the main text */
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & img {
    width: 100%;
    max-width: 180px;
    transform: rotate(5deg);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: -30px;
    right: 0;
    z-index: 5;
  }
`;

function Home() {
  return (
    <Container>
      <Section1>
        <LeftColumn>
          <ImageContainer>
            <TiltedStrip>Since 1923</TiltedStrip>
            <Title>Appliance Shopping made easy</Title>
            <SubTitle>Sales | Service | Installation</SubTitle>
            <Button>Schedule showroom visit</Button>
            <RatingContainer>
              <FaGoogle />
              <span>4.8 out of 5 | 8133 reviews</span>
            </RatingContainer>
          </ImageContainer>
        </LeftColumn>
        <RightColumn>
          <Box>
            <LinkItem href="#account">
              <div>
                <h3>Account</h3>
                <p>Manage your account</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
            <LinkItem href="#list">
              <div>
                <h3>List</h3>
                <p>View your saved items</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
            <LinkItem href="#contact">
              <div>
                <h3>Contact</h3>
                <p>Get in touch with us</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
          </Box>
          <Box>
            <LinkItem href="#product-1">
              <div>
                <h3>Product 1</h3>
                <p>Discover this product</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
            <LinkItem href="#product-2">
              <div>
                <h3>Product 2</h3>
                <p>Check out this product</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
            <LinkItem href="#product-3">
              <div>
                <h3>Product 3</h3>
                <p>Learn more about this product</p>
              </div>
              <span>&rarr;</span>
            </LinkItem>
          </Box>
        </RightColumn>
      </Section1>
      <Section2>
        <Item>
          <IconContainer>
            <FaTruck />
          </IconContainer>
          <TextContainer>
            <h3>Next Day Delivery</h3>
            <p>In-stock products ready for delivery</p>
          </TextContainer>
        </Item>
        <Item>
          <IconContainer>
            <FaDollarSign />
          </IconContainer>
          <TextContainer>
            <h3>Special Financing</h3>
            <p>Pay over time options</p>
          </TextContainer>
        </Item>
        <Item>
          <IconContainer>
            <FaTag />
          </IconContainer>
          <TextContainer>
            <h3>Price Match Guarantee</h3>
            <p>Trust you&apos;re paying the best price</p>
          </TextContainer>
        </Item>
        <Item>
          <IconContainer>
            <FaWrench />
          </IconContainer>
          <TextContainer>
            <h3>Service & Repair</h3>
            <p>We service what we sell</p>
          </TextContainer>
        </Item>
        <Item>
          <IconContainer>
            <FaTools />
          </IconContainer>
          <TextContainer>
            <h3>Installation Services</h3>
            <p>Factory-certified teams</p>
          </TextContainer>
        </Item>
      </Section2>
      <GuideContainer>
        <HeadingColumn>
          <h2>Appliance Buying Guide</h2>
          <hr />
          <p>Over 1 million downloads</p>
        </HeadingColumn>
        <ButtonColumn>
          <button>GET THE GUIDE</button>
        </ButtonColumn>
        <TextColumn>
          The most sought-after guide in appliances with the ten most FAQ,
          questions you need to ask your appliance store, and tips to start any
          kitchen renovation.
        </TextColumn>
        <ImageColumn>
          <img
            src="https://res.cloudinary.com/dmqxx6rgm/image/upload/c_fill,f_auto,q_auto/media/uploads/Kitchen_Accessories_New.jpg"
            alt="Guide"
          />
        </ImageColumn>
      </GuideContainer>
      <MostPopular />
      <NextDayDelivery />
      <OurBrands />
    </Container>
  );
}

export default Home;
