import styled from "styled-components";

const InfoSection = () => {
  return (
    <SectionContainer>
      <Overlay />
      <Content>
        <Subheading>APPLIANCE GUIDANCE MADE EASY</Subheading>
        <MainHeading>Learning Center</MainHeading>
        <Description>
          Learn before you buy for every appliance including in-depth brand
          analysis, videos, reliability studies, and checklists designed to make
          appliance shopping easier.
        </Description>
      </Content>
    </SectionContainer>
  );
};

export default InfoSection;

const SectionContainer = styled.section`
  position: relative;
  width: 100vw;
  height: 50vh;
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
  background-color: rgba(0, 0, 102, 0.7);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 1rem;
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
