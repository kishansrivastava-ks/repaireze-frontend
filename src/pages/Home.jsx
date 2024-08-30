import styled from "styled-components";
import { FaGoogle } from "react-icons/fa"; // For Google icon

const Section1 = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f8f9fa;

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

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
