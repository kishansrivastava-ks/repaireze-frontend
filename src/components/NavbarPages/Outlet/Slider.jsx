/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderSection = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 5rem 7rem;
  background-color: #fff;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

const Card = styled(Link)`
  min-width: 20%;
  flex-shrink: 0;
  margin: 0 1rem;
  text-align: center;
  color: #333;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    min-width: 40%;
  }

  img {
    width: 100%;
    height: 40rem;
    border-radius: 10px;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1.2rem;
    color: #007bff;
  }
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

  ${(props) => (props.direction === "left" ? "left: 10px;" : "right: 10px;")}
`;

const cards = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  image: "/fridge.png",
}));

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  return (
    <SliderSection>
      <ArrowButton direction="left" onClick={handlePrev}>
        <FaArrowLeft />
      </ArrowButton>
      <SliderContainer translate={-currentIndex * cardWidth}>
        {cards.map((card) => (
          <Card to={`/product/${card.id}`} key={card.id}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
          </Card>
        ))}
      </SliderContainer>
      <ArrowButton direction="right" onClick={handleNext}>
        <FaArrowRight />
      </ArrowButton>
    </SliderSection>
  );
};

export default Slider;
