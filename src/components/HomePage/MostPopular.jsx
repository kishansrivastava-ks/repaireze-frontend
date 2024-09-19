/* eslint-disable no-unused-vars */
import styled from "styled-components";

// Container for the entire section
const MostPopularContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Left Column
const LeftColumn = styled.div`
  flex: 3;
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

// Header
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
`;

const HeaderText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ShopAllButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

// Slider Container
const SliderContainer = styled.div`
  display: flex;
  position: relative;
`;

const SliderWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const SliderContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SlideItem = styled.div`
  min-width: 33.33%;
  padding: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SlideCard = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StockTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  font-weight: bold;
  border-radius: 0 0 8px 0;
  z-index: 5;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
`;

// Slider Controls
const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:nth-of-type(1) {
    left: 0;
  }

  &:nth-of-type(2) {
    right: 0;
  }
`;

// Right Column
const RightColumn = styled.div`
  flex: 1;
  background-color: #003366;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const BannerHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BannerText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const LearnMoreButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffb700;
  }
`;

const BannerImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  /* position: absolute; */
  /* top: -20%; */
  /* right: -10%; */
  /* transform: rotate(5deg); */
`;

function MostPopular() {
  // Example items for the slider
  const items = [
    { name: "Product 1", price: "$100", description: "Description 1" },
    { name: "Product 2", price: "$150", description: "Description 2" },
    { name: "Product 3", price: "$200", description: "Description 3" },
    { name: "Product 4", price: "$250", description: "Description 4" },
    { name: "Product 5", price: "$300", description: "Description 5" },
  ];

  return (
    <MostPopularContainer>
      <LeftColumn>
        <SectionHeader>
          <HeaderTitle>Most Popular</HeaderTitle>
          <HeaderText>Shop our top-selling models</HeaderText>
          <ShopAllButton>Shop All</ShopAllButton>
        </SectionHeader>
        <SliderContainer>
          <ControlButton>&lt;</ControlButton>
          <SliderWrapper>
            <SliderContent>
              {items.map((item, index) => (
                <SlideItem key={index}>
                  <SlideCard>
                    <StockTag>In Stock</StockTag>
                    <ProductImage src="/kitchen.jpg" alt={item.name} />
                    <ProductName>{item.name}</ProductName>
                    <ProductPrice>{item.price}</ProductPrice>
                    <ProductDescription>{item.description}</ProductDescription>
                  </SlideCard>
                </SlideItem>
              ))}
            </SliderContent>
          </SliderWrapper>
          <ControlButton>&gt;</ControlButton>
        </SliderContainer>
      </LeftColumn>
      {/* <RightColumn>
        <BannerHeading>Product Spotlight</BannerHeading>
        <BannerImage src="/kitchen.jpg" alt="Product Spotlight" />
        <BannerText>Product Name</BannerText>
        <BannerText>$350</BannerText>
        <BannerText>Short product description goes here.</BannerText>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </RightColumn> */}
    </MostPopularContainer>
  );
}

export default MostPopular;
