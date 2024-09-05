/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  /* margin-bottom: 5rem; */
  background-color: #fff;
`;

const Heading = styled.h2`
  text-align: center;
  color: #007bff;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 2rem;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

const Card = styled.div`
  min-width: 20%;
  flex-shrink: 0;
  margin: 0 1rem;
  text-align: left;
  position: relative;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    min-width: 40%;
  }
`;

const StockBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => (props.inStock ? "#28a745" : "#dc3545")};
  color: white;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: 5px;
  font-weight: bold;
`;

const WishlistIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => (props.wished ? "red" : "#333")};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

const ProductDetails = styled.div`
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.3rem;
`;

const ProductModel = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;

  button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .overstock {
    background-color: #ffcc80;
    color: white;
  }

  .outlet {
    background-color: #e57373;
    color: white;
  }

  svg {
    margin-right: 0.3rem;
  }
`;

const ProductFooter = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  z-index: 10;

  &:hover {
    color: #007bff;
  }

  ${(props) => (props.direction === "left" ? "left: 20px;" : "right: 20px;")}
`;

const cards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  model: `UHWC115-IG01A`,
  price: `₹1,20,000`,
  inStock: i % 2 === 0,
  image: "/fridge.png",
}));

const FeaturedCloseouts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const cardWidth =
    window.innerWidth < 768 ? window.innerWidth * 0.4 : window.innerWidth * 0.2;
  const sliderWidth = cardWidth * cards.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
      toast.success("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      toast.success("Added to wishlist");
    }
  };

  return (
    <Section>
      <Heading>Feature Closeouts</Heading>
      <SliderWrapper>
        <ArrowButton direction="left" onClick={handlePrev}>
          <FaArrowLeft />
        </ArrowButton>
        <SliderContainer translate={-currentIndex * cardWidth}>
          {cards.map((card) => (
            <Card key={card.id}>
              <StockBadge inStock={card.inStock}>
                {card.inStock ? "In Stock" : "Out of Stock"}
              </StockBadge>
              <WishlistIcon
                wished={wishlist.includes(card.id)}
                onClick={() => toggleWishlist(card.id)}
              >
                {wishlist.includes(card.id) ? <FaHeart /> : <FaRegHeart />}
              </WishlistIcon>
              <ProductImage src={card.image} alt={card.title} />
              <ProductDetails>
                <ProductName>{card.title}</ProductName>
                <ProductModel>Model #: {card.model}</ProductModel>
                <ProductPrice>{card.price}</ProductPrice>
                <ButtonGroup>
                  <button className="overstock">
                    <FaArrowLeft /> Overstock
                  </button>
                  <button className="outlet">
                    <FaArrowRight /> Outlet
                  </button>
                </ButtonGroup>
              </ProductDetails>
              <ProductFooter>
                WHILE SUPPLIES LAST <br />
                IMMEDIATE DELIVERY REQUIRED
              </ProductFooter>
            </Card>
          ))}
        </SliderContainer>
        <ArrowButton direction="right" onClick={handleNext}>
          <FaArrowRight />
        </ArrowButton>
      </SliderWrapper>
    </Section>
  );
};

export default FeaturedCloseouts;
