import { useState } from "react";
import styled, { keyframes } from "styled-components";

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null);

  const reviews = [
    "The service was amazing! I'm so happy with my new appliances. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti placeat, animi aliquid amet nulla dignissimos. Atque doloribus dolor consequuntur delectus magni provident modi natus quae, quidem id cum soluta qui.",
    "Great prices and reliable delivery. Highly recommend this store! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti placeat, animi aliquid amet nulla dignissimos. Atque doloribus dolor consequuntur delectus magni provident modi natus quae, quidem id cum soluta qui.",
    "Customer support was super helpful and guided me through every step. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti placeat, animi aliquid amet nulla dignissimos. Atque doloribus dolor consequuntur delectus magni provident modi natus quae, quidem id cum soluta qui.",
  ];

  const nextSlide = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 500); // Slight delay to allow for smooth animation
  };

  const prevSlide = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }, 500);
  };

  return (
    <SectionContainer>
      <Overlay />
      <Content>
        <Heading>What our customers are saying</Heading>
        <SliderContainer>
          <ArrowButton onClick={prevSlide}>&lt;</ArrowButton>
          <Slide direction={direction}>
            <ReviewText>{reviews[currentSlide]}</ReviewText>
          </Slide>
          <ArrowButton onClick={nextSlide}>&gt;</ArrowButton>
        </SliderContainer>
      </Content>
    </SectionContainer>
  );
};

export default ReviewsSlider;

// Styled Components

const SectionContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 60vh;
  background-image: url("/kitchen2.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 102, 0.7); /* Dark blue translucent overlay */
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 1rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden; /* Ensures only one slide is visible */
`;

const slideLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Slide = styled.div`
  opacity: 1;
  transition: opacity 0.5s ease;
  animation: ${({ direction }) =>
      direction === "left" ? slideLeft : slideRight}
    0.5s forwards;
`;

const ReviewText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  max-width: 500px;
  margin: 0 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #7d5fff;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
