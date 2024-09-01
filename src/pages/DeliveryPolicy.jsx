import styled from "styled-components";

const InfoSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url("/kitchen2.png");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CenterText = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
  z-index: 1;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const YellowStrip = styled.div`
  background-color: #f7e81c;
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: blue;
`;

const StripText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
  }
`;

const StripSubText = styled.p`
  font-size: 1rem;
  margin: 0 1rem;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
  }
`;

function DeliveryPolicy() {
  return (
    <>
      <InfoSection>
        <BackgroundImage>
          <Overlay />
          <CenterText>The Best Appliance Delivery Available</CenterText>
        </BackgroundImage>
        <YellowStrip>
          <StripText>Looking to track your delivery team?</StripText>
          <StripSubText>
            Track within a 30-minute window on the day of your delivery
          </StripSubText>
          <Button>START HERE</Button>
        </YellowStrip>
      </InfoSection>
    </>
  );
}

export default DeliveryPolicy;
